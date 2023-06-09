import {
  Box,
  Grid,
  Hidden,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { Product, ProductDetailed } from "./ProductTypes";

const useStyles = makeStyles({
  name: "TabloProductMoreInfoBody",
})((theme) => ({
  root: {},
  disclaimer: {
    width: "100%",
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  detailRow: {
    height: 24,
  },
  detailCell: {
    border: 0,
  },
}));

export type ProductMoreInfoBodyProps = {
  description?: Product["description"];
  detailed: ProductDetailed[];
  disclaimer?: Product["disclaimer"];
};

export const ProductMoreInfoBody: React.FC<ProductMoreInfoBodyProps> = ({
  description,
  detailed,
  disclaimer,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} p={2}>
      {disclaimer && (
        <div className={classes.disclaimer}>
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
        {detailed.map((detail) => (
          <Grid item xs={12} sm={6} key={detail.title}>
            <Typography variant="h6">{detail.title}</Typography>
            <Table padding="none">
              <TableBody>
                {detail.rows.map((row, index) =>
                  row.label ? (
                    <TableRow className={classes.detailRow} key={index}>
                      <TableCell className={classes.detailCell} variant="head">
                        {row.label}
                      </TableCell>
                      <TableCell className={classes.detailCell} align="right">
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow className={classes.detailRow} key={index}>
                      <TableCell className={classes.detailCell}>
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
