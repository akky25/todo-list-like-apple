import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleDrawerToggle?: (props: any) => void;
};

const IconButtonTemplate: FC<Props> = (props) => {
  const { handleDrawerToggle, children } = props;

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
    >
      {children}
    </IconButton>
  );
};
export default IconButtonTemplate;
