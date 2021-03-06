import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: "20px",
  },
  title: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      textDecoration: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Kabir's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
