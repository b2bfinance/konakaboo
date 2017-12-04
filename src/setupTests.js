import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
      0: ['TEST_CHOICE', 'TEST_CHOICE'],
      1: 'TEST_CHOICE'
    },
    available: [
      {
        multiChoice: true,
        key: 'TEST_KEY'
      },
      {
        multiChoice: false,
        key: 'TEST_KEY_2'
      }
    ]
  }
];

configure({ adapter: new Adapter() });

global.stubData = {
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
    withHighlight: productStubs.data[0],
    withoutMoreInformation: productStubs.data[1],
    withMoreInformation: productStubs.data[2]
  }
};
