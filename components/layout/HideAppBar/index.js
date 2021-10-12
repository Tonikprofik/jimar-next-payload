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
import { IconButton } from "@mui/material";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import Link from "../Link";
import NextLink from "next/link";

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
  const { classes, megaMenu } = props;
  const megamenu = megaMenu;
  console.log(props);
  console.log(megamenu);

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <IconButton>
            <ChangeHistoryIcon />
          </IconButton>
          <Typography variant="h6" component="div" />
          Jimar{" "}
          {megamenu?.nav?.map(({ link }, i) => (
            <h3 key={link.label}>
              <Link {...link} className={classes.primaryNavItem}>
                {link.label}
              </Link>
            </h3>
          ))}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default HideAppBar;
