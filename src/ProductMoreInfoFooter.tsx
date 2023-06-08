import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "TabloProductMoreInfoFooter",
})((theme) => ({
  root: {
    borderColor: theme.palette.grey[200],
  },
  primaryButton: {
    display: "flex",
    marginLeft: "auto",
  },
}));

export type ProductMoreInfoFooterProps = {
  link: string;
  onClose: () => void;
};

export const ProductMoreInfoFooter: React.FC<ProductMoreInfoFooterProps> = ({
  link,
  onClose,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} mt="auto" p={2} minHeight={80} borderTop={2}>
      <Grid container alignItems="center">
        <Grid item xs={5} sm={7} lg={8}>
          <Button onClick={onClose} variant="text" color="inherit" size="small">
            <CloseIcon fontSize="small" /> close
          </Button>
        </Grid>
        <Grid item xs={7} sm={5} lg={4}>
          <Button
            className={classes.primaryButton}
            variant="contained"
            color="primary"
            size="large"
            href={link}
            disableElevation
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
