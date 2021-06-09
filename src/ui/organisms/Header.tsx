import { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import TopIconButton from "ui/atom/TopIconButton";

type Props = {
  handleDrawerToggle: () => void;
};

const Header: FC<Props> = (props) => {
  const { handleDrawerToggle } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <TopIconButton handleDrawerToggle={handleDrawerToggle} />
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
