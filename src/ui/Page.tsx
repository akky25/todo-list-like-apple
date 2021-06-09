import { FC, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import Sidebar from "ui/Sidebar";
import Main from "ui/Main";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

const Page: FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Main handleDrawerToggle={handleDrawerToggle} />
    </div>
  );
};
export default Page;
