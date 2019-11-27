import {
  Grid,
  Hidden,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  productMoreInfoBodyDisclaimer: {
    width: "100%",
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  productMoreInfoBodyDetailRow: {
    height: 24,
  },
  productMoreInfoBodyDetailCell: {
    border: 0,
  },
}));

const ProductMoreInfoBody = ({ description, detailed, disclaimer }) => {
  const classes = useStyles();

  return (
    <Box p={2}>
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
        {detailed.map(detail => (
          <Grid item xs={12} sm={6} lg={4} key={detail.title}>
            <Typography variant="h6">{detail.title}</Typography>
            <Table padding="none">
              <TableBody>
                {detail.rows.map((row, index) =>
                  row.label ? (
                    <TableRow
                      className={classes.productMoreInfoBodyDetailRow}
                      key={index}
                    >
                      <TableCell
                        className={classes.productMoreInfoBodyDetailCell}
                        variant="head"
                      >
                        {row.label}
                      </TableCell>
                      <TableCell
                        className={classes.productMoreInfoBodyDetailCell}
                        align="right"
                      >
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow
                      className={classes.productMoreInfoBodyDetailRow}
                      key={index}
                    >
                      <TableCell
                        className={classes.productMoreInfoBodyDetailCell}
                      >
                        <Typography paragraph>{row.value}</Typography>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductMoreInfoBody;
