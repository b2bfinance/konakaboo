import Grid from '@material-ui/core/Grid';
import React, { useReducer } from 'react';
import styled from 'styled-components';
import filtersReducer from '../reducers/filters';
import Col from './Col';
import { default as FilterList } from './Filter/List';
import { default as ProductList } from './Product/List';
import { makeProviderURI } from '../utils/api';

export const Wrapper = styled.div`
  font-family: ${props => props.theme.mainFontFamily};
  font-weight: ${props => props.theme.mainNormalFontWeight};
  font-size: ${props => props.theme.mainFontSize};
  color: ${props => props.theme.mainColor};
  line-height: ${props => props.theme.mainLineHeight};

  * {
    box-sizing: border-box;
  }
`;

export default ({ config, filters }) => {
  const [reducedFilters, dispatchFilters] = useReducer(filtersReducer, filters);

  return (
    <Wrapper>
      {reducedFilters.available.length > 0 && (
        <FilterList filters={reducedFilters} dispatch={dispatchFilters} />
      )}
      <Grid>
        <Col phone="100">
          <ProductList
            provider={makeProviderURI(config.provider, reducedFilters)}
            cta={config.cta}
          />
        </Col>
      </Grid>
    </Wrapper>
  );
};
