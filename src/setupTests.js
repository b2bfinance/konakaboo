import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import theme from './utils/theme';
import productStubs from '../stubs/products/response.json';
import 'jest-styled-components';

const filterStateStubs = [
  { chosen: {} },
  {
    chosen: {
      0: [undefined, '']
    },
    available: [
      {
        multiChoice: true,
        key: 'TEST_KEY'
      }
    ]
  },
  {
    chosen: {
      0: undefined
    },
    available: [
      {
        multiChoice: false,
        key: 'TEST_KEY'
      }
    ]
  },
  {
    chosen: {
      0: ['TEST_CHOICE', 'TEST_CHOICE']
    },
    available: [
      {
        multiChoice: true,
        key: 'TEST_KEY'
      }
    ]
  },
  {
    chosen: {
      0: 'TEST_CHOICE'
    },
    available: [
      {
        multiChoice: false,
        key: 'TEST_KEY'
      }
    ]
  },
  {
    chosen: {
      0: ['TEST_CHOICE_1', 'TEST_CHOICE_2'],
      1: 'TEST_CHOICE_1'
    },
    available: [
      {
        title: 'Test Title 1',
        multiChoice: true,
        key: 'TEST_KEY_1',
        choices: [
          { label: 'TEST_CHOICE_1_LABEL', value: 'TEST_CHOICE_1' },
          { label: 'TEST_CHOICE_2_LABEL', value: 'TEST_CHOICE_2' }
        ]
      },
      {
        title: 'Test Title 2',
        multiChoice: false,
        key: 'TEST_KEY_2',
        choices: [
          { label: 'TEST_CHOICE_1_LABEL', value: 'TEST_CHOICE_1' },
          { label: 'TEST_CHOICE_2_LABEL', value: 'TEST_CHOICE_2' }
        ]
      }
    ]
  }
];

configure({ adapter: new Adapter() });

global.stubData = {
  theme,
  filters: {
    withNoChosen: filterStateStubs[0],
    withNullMultiChoiceChosen: filterStateStubs[1],
    withNullSingleChoiceChosen: filterStateStubs[2],
    withMultiChoiceChosen: filterStateStubs[3],
    withSingleChoiceChosen: filterStateStubs[4],
    withSingleAndMultiChoiceChosen: filterStateStubs[5]
  },
  products: {
    response: productStubs,
    item: productStubs.data[0]
  }
};
