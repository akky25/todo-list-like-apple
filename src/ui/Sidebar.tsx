import { FC } from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import SidebarItems from "ui/organisms/Sidebar";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.only("xs")]: {
        width: "100%",
      },
    },
  })
);

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const Sidebar: FC<Props> = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const { mobileOpen, handleDrawerToggle } = props;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <SidebarItems handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <SidebarItems handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Hidden>
    </nav>
  );
};
export default Sidebar;
