import { FC, useState } from "react";
import { Menu, MenuItem, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import {
  Create,
  Menu as MenuIcon,
  CheckCircleOutline,
  SyncAlt,
  VisibilityOutlined,
  DeleteForeverOutlined,
} from "@material-ui/icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import IconButtonTemplate from "ui/atom/IconButtonTemplate";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    paper: {
      // background: theme.palette.background.paper,
      background: theme.palette.grey[900],
    },
    list: {
      padding: 0,
    },
    item: {
      borderBottom: `0.5px solid ${theme.palette.grey[600]}`,
      paddingRight: 5,
      minHeight: 45,
    },
    lastItem: {
      paddingRight: 5,
      minHeight: 45,
    },
    itemText: {
      width: 180,
    },
    menuIcon: {
      color: blue.A400,
    },
    menuIconOpen: {
      color: blue[900],
    },
  })
);

type MenuItem = {
  title: string;
  icon: JSX.Element;
};

const ListMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItem: MenuItem[] = [
    { title: "名前と外観", icon: <Create /> },
    { title: "リマインダーの選択...", icon: <CheckCircleOutline /> },
    {
      title: "表示順序",
      icon: <SyncAlt style={{ transform: "rotate(90deg)" }} />,
    },
    { title: "実行済みを表示", icon: <VisibilityOutlined /> },
    { title: "リストを削除", icon: <DeleteForeverOutlined /> },
  ];

  return (
    <>
      <IconButtonTemplate handleDrawerToggle={handleClick}>
        <MenuIcon
          className={anchorEl ? classes.menuIconOpen : classes.menuIcon}
        />
      </IconButtonTemplate>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{ paper: classes.paper, list: classes.list }}
      >
        {menuItem.map((elem, index) => (
          <MenuItem
            onClick={handleClose}
            classes={{
              root:
                index === menuItem.length - 1 ? classes.lastItem : classes.item,
            }}
          >
            <Typography classes={{ root: classes.itemText }}>
              {elem.title}
            </Typography>
            {elem.icon}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ListMenu;
