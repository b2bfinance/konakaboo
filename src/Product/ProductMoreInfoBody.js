import { Grid, Hidden, Table, TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  productMoreInfoBodyWrapper: {
    padding: theme.spacing(2)
  },
  productMoreInfoBodyDisclaimer: {
    width: "100%",
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4)
    }
  },
  productMoreInfoBodyDetailRow: {
    height: 24
  },
  productMoreInfoBodyDetailCell: {
    border: 0
  }
}));

const ProductMoreInfoBody = ({ description, detailed, disclaimer }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.productMoreInfoBodyWrapper} container>
      {disclaimer && (
        <div className={classes.productMoreInfoBodyDisclaimer}>
          <Typography>{disclaimer}</Typography>
        </div>
      )}
      <Hidden smUp implementation="css">
        {description && (
          <Typography variant="body2" paragraph>
            {description}
          </Typography>
        )}
      </Hidden>
      <Grid container spacing={4}>
        {detailed &&
          Object.keys(detailed).map(heading => (
            <Grid item xs={12} sm={6} lg={4} key={heading}>
              <Typography variant="h6">{heading}</Typography>
              <Table padding="none">
                <TableBody>
                  {detailed[heading].map(detail =>
                    detail.label ? (
                      <TableRow className={classes.productMoreInfoBodyDetailRow} key={detail.label}>
                        <TableCell className={classes.productMoreInfoBodyDetailCell} variant="head">
                          {detail.label}
                        </TableCell>
                        <TableCell className={classes.productMoreInfoBodyDetailCell} align="right">
                          {detail.value}
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow className={classes.productMoreInfoBodyDetailRow} key={detail.value}>
                        <TableCell className={classes.productMoreInfoBodyDetailCell}>
                          <Typography paragraph>{detail.value}</Typography>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default ProductMoreInfoBody;
