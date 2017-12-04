pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                nvm(nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh', nvmIoJsOrgMirror: 'https://iojs.org/dist', nvmNodeJsOrgMirror: 'https://nodejs.org/dist', version: 'v9.0') {
                    sh 'npm version && npm install'
                }
            }
        }
        stage('Tests') {
            environment {
                CODECOV_TOKEN="7e91e7ca-1bad-4783-89fb-8fee7d975e23"
            }
            steps {
                nvm(nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh', nvmIoJsOrgMirror: 'https://iojs.org/dist', nvmNodeJsOrgMirror: 'https://nodejs.org/dist', version: 'v9.0') {
                    sh 'npm run coverage'
                }

                step([
                    $class: 'CloverPublisher',
                    cloverReportDir: 'coverage',
                    cloverReportFileName: 'clover.xml',
                    healthyTarget: [methodCoverage: 28, conditionalCoverage: 28, statementCoverage: 28],
                    unhealthyTarget: [methodCoverage: 25, conditionalCoverage: 25, statementCoverage: 25],
                    failingTarget: [methodCoverage: 20, conditionalCoverage: 20, statementCoverage: 20]
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
                nvm(nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh', nvmIoJsOrgMirror: 'https://iojs.org/dist', nvmNodeJsOrgMirror: 'https://nodejs.org/dist', version: 'v9.0') {
                    sh 'NODE_ENV=production npm run-script build'
                    sh 'npm run push'
                }
            }
        }
    }

    post {
        always {
          step([$class: 'Mailer',
            notifyEveryUnstableBuild: true,
            recipients: "devs@legalweb.org.uk",
            sendToIndividuals: true])
        }
    }
}
