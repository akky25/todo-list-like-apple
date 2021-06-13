import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ArrowBackIos, Add } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

import IconButtonTemplate from "ui/atom/IconButtonTemplate";
import { Hidden } from "@material-ui/core";
// import { relative } from "path/posix";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      color: blue.A400,
    },
    listsNumber: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      color: blue.A400,
    },
    appbar: {
      background: theme.palette.background.default,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    iconbar: {
      // height: 40,
      minHeight: 40,
      paddingRight: 5,
    },
    arrowBackIos: {
      // flexGrow: 1,
      marginRight: "auto",
    },
    addItem: {
      // flexGrow: 1,
      marginLeft: "auto",
      color: theme.palette.grey[500],
    },
    menuIcon: {
      margin: 0,
    },
  })
);

type Props = {
  handleDrawerToggle: () => void;
};

const Header: FC<Props> = (props) => {
  const classes = useStyles();
  const { handleDrawerToggle } = props;

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Hidden mdUp>
        <Toolbar className={classes.iconbar}>
          <Box className={classes.arrowBackIos}>
            <IconButtonTemplate handleDrawerToggle={handleDrawerToggle}>
              <ArrowBackIos />
              <Typography>リスト</Typography>
            </IconButtonTemplate>
          </Box>
          <IconButtonTemplate handleDrawerToggle={handleDrawerToggle}>
            <MenuIcon />
          </IconButtonTemplate>
        </Toolbar>
      </Hidden>
      <Hidden smDown>
        <Toolbar className={classes.iconbar}>
          <Box className={classes.addItem}>
            <IconButtonTemplate handleDrawerToggle={handleDrawerToggle}>
              <Add />
            </IconButtonTemplate>
          </Box>
        </Toolbar>
      </Hidden>
      <Toolbar>
        <Typography variant="h4" noWrap className={classes.title}>
          <Box fontWeight="fontWeightBold">Webアプリ製作</Box>
        </Typography>
        <Typography variant="h4" noWrap className={classes.listsNumber}>
          <Box fontWeight="fontWeightBold">5</Box>
        </Typography>
      </Toolbar>
    </AppBar>
    // </div>
  );
};
export default Header;
