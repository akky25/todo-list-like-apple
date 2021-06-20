import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { blue, orange } from "@material-ui/core/colors";
import { Hidden } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { ArrowBackIos, Add } from "@material-ui/icons";

import IconButtonTemplate from "ui/atom/IconButtonTemplate";
import ListMenu from "ui/Molecules/ListMenu";

const drawerWidth = 240;

type StyleProps = {
  headColor: string;
};

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      color: (props) => props.headColor,
    },
    listsNumber: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      color: (props) => props.headColor,
    },
    appbar: {
      background: theme.palette.background.default,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    iconbar: {
      minHeight: 40,
      height: 40,
      paddingRight: 5,
      marginTop: 10,
    },
    arrowBackIos: {
      marginRight: "auto",
      color: blue.A400,
    },
    addItem: {
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
  const classes = useStyles({ headColor: orange[500] });
  const { handleDrawerToggle } = props;

  return (
    <AppBar position="fixed" className={classes.appbar}>
      {/* SPサイズ */}
      <Hidden mdUp>
        {/* <Toolbar className={classes.iconbar}> */}
        <Toolbar classes={{ regular: classes.iconbar }}>
          <Box className={classes.arrowBackIos}>
            <IconButtonTemplate handleDrawerToggle={handleDrawerToggle}>
              <ArrowBackIos />
              <Typography>リスト</Typography>
            </IconButtonTemplate>
          </Box>
          {/* <IconButtonTemplate handleDrawerToggle={handleDrawerToggle}>
            <MenuIcon />
          </IconButtonTemplate> */}
          <ListMenu />
        </Toolbar>
      </Hidden>
      {/* PCサイズ */}
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
        <Typography variant="h3" noWrap className={classes.title}>
          <Box fontWeight="fontWeightBold">Webアプリ製作</Box>
        </Typography>
        <Typography variant="h3" noWrap className={classes.listsNumber}>
          <Box fontWeight="fontWeightBold">5</Box>
        </Typography>
      </Toolbar>
    </AppBar>
    // </div>
  );
};
export default Header;
