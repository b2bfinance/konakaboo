import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled(Grid)`
  padding: 16px;
`;

export const Disclaimer = styled.div`
  margin-bottom: 32px;
  background-color: ${props => props.theme.productBorder};
  padding: 16px;
`;

export const DetailRow = styled(TableRow)`
  height: 32px !important;
`;

export const DetailCell = styled(TableCell)`
  border: 0 !important;
`;

export default ({ detailed, disclaimer }) => (
  <Wrapper>
    {disclaimer && (
      <Disclaimer>
        <Typography>{disclaimer}</Typography>
      </Disclaimer>
    )}
    <Grid container spacing={32}>
      {detailed &&
        Object.keys(detailed).map(heading => (
          <Grid item xs={12} sm={6} key={heading}>
            <Typography variant="h6">{heading}</Typography>
            <Table padding="none">
              <TableBody>
                {detailed[heading].map(detail => (
                  <DetailRow key={detail.label}>
                    <DetailCell variant="head">{detail.label}</DetailCell>
                    <DetailCell align="right">{detail.value}</DetailCell>
                  </DetailRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        ))}
    </Grid>
  </Wrapper>
);
