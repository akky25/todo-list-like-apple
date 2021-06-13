import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Add } from "@material-ui/icons";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginLeft: "auto",
      padding: 0,
      color: theme.palette.grey[500],
    },
  })
);

type Props = {
  onClick?: () => void;
};

const TopIconButton: FC<Props> = (props) => {
  const classes = useStyles();
  const { onClick } = props;

  return (
    <IconButton
      aria-label="open drawer"
      edge="start"
      onClick={onClick}
      className={classes.menuButton}
    >
      <Add />
    </IconButton>
  );
};
export default TopIconButton;
