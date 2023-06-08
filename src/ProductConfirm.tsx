import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Grid,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { ProductLinks, ProductMetaConfirm } from "./ProductTypes";

const useStyles = makeStyles({
  name: "TabloProductConfirm",
})((theme) => ({
  root: {
    textAlign: "center",
  },
  actions: {
    margin: `${theme.spacing(2)}px auto`,
  },
}));

export type ProductConfirmProps = {
  open: DialogProps["open"];
  handleRequestClose: DialogProps["onClose"];
  title: ProductMetaConfirm["heading"];
  description: ProductMetaConfirm["description"];
  forwardUrl: ProductLinks["apply"];
};

export const ProductConfirm: React.FC<ProductConfirmProps> = ({
  open,
  handleRequestClose,
  title,
  description,
  forwardUrl,
}) => {
  const { classes } = useStyles();

  return (
    <Dialog className={classes.root} open={open} onClose={handleRequestClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        <Grid container>
          <Grid className={classes.actions} item xs={12} sm={8} lg={4}>
            <Button size="large" href={forwardUrl}>
              Confirm
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
