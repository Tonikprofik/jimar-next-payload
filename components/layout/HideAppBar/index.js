import { FC } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const HideAppBar = (props) => {
  const { classes } = props;

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" />
          Jimar
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default HideAppBar;
