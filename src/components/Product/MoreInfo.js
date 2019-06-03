import React from 'react';
import MoreInfoHeader from './MoreInfoHeader';
import MoreInfoBody from './MoreInfoBody';
import MoreInfoFooter from './MoreInfoFooter';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/styles';

export const MoreInfoDrawer = styled(Drawer)`
  max-width: 60%;
`;

const useStyles = makeStyles({
  paper: {
    width: '60%',
    '@media(max-width: 1280px)': {
      width: '70%'
    },
    '@media(max-width: 960px)': {
      width: '85%'
    }
  }
});

export default ({
  open,
  onClose,
  title,
  links,
  brand,
  disclaimer,
  detailed
}) => {
  const classes = useStyles();

  return (
    <Drawer classes={classes} anchor="right" open={open} onClose={onClose}>
      <MoreInfoHeader
        brand={brand}
        title={title}
        logo={links.logo}
        onClose={onClose}
      />
      <MoreInfoBody detailed={detailed} disclaimer={disclaimer} />
      <MoreInfoFooter link={links.apply} onClose={onClose} />
    </Drawer>
  );
};
