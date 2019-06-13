pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                sh 'docker run --rm --user $(id -u):$(id -g) -v $(pwd):/app --workdir /app node:11 yarn -v'
                sh 'docker run --rm --user $(id -u):$(id -g) -v $(pwd):/app --workdir /app node:11 yarn install'
            }
        }
        stage('Tests') {
            environment {
                CI=true
                CODECOV_TOKEN="7e91e7ca-1bad-4783-89fb-8fee7d975e23"
            }
            steps {
                sh 'docker run --rm -v $(pwd):/app --workdir /app node:11 yarn coverage'

                step([
                    $class: 'CloverPublisher',
                    cloverReportDir: 'coverage',
                    cloverReportFileName: 'clover.xml',
                    healthyTarget: [methodCoverage: 95, conditionalCoverage: 95, statementCoverage: 95],
                    unhealthyTarget: [methodCoverage: 93, conditionalCoverage: 93, statementCoverage: 93],
                    failingTarget: [methodCoverage: 90, conditionalCoverage: 90, statementCoverage: 90]
                ])
                
                sh 'curl -s https://codecov.io/bash | bash -s - -t '
            }
        }

        stage('Deploy') {
            when {
                environment name: 'BRANCH_NAME', value: 'master'
            }
            environment {
                GCLOUD_STORAGE_KEY_FILE = credentials('b2b-gcloud-svc-acc-storage')
            }
            steps {
                nvm(nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh', nvmIoJsOrgMirror: 'https://iojs.org/dist', nvmNodeJsOrgMirror: 'https://nodejs.org/dist', version: 'v11.6') {
                    sh 'NODE_ENV=production npm run-script build'
                    sh 'npm run push'
                }
            }
        }
    }

    post {
        always {
          cleanWs()

          step([$class: 'Mailer',
            notifyEveryUnstableBuild: true,
            recipients: "devs@legalweb.org.uk",
            sendToIndividuals: true])
        }
    }
}
