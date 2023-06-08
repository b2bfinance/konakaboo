import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "TabloProductMoreInfoHeader",
})((theme) => ({
  root: {
    borderBottom: `2px solid ${theme.palette.grey[200]}`,
  },
  headerLogo: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
}));

export type ProductMoreInfoHeaderProps = {
  title: string;
  brand: string;
  logo: string;
  onClose: () => void;
};

export const ProductMoreInfoHeader: React.FC<ProductMoreInfoHeaderProps> = ({
  title,
  brand,
  logo,
  onClose,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root} p={1}>
      <Grid container>
        <Box
          sx={{
            display: {
              xs: "none",
            },
          }}
        >
          <Grid item sm={3} md={3} xl={2}>
            <Box
              display="flex"
              border={2}
              p={1}
              height={100}
              width={150}
              borderColor="grey.200"
            >
              <img className={classes.headerLogo} src={logo} alt={brand} />
            </Box>
          </Grid>
        </Box>
        <Grid item sm={9} md={9} xl={10}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">{brand}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">{title}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box position="absolute" mt={1} mr={1} top={0} right={0}>
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
