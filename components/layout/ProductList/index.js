import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export default function ProductList() {

    const cards = [1,2,3,4,5,6 ]
  return (
    <>
      <Box sx={{ width: 200, height: 200 }}>
        <Container>
          <Grid container spacing={4} sx={{ display: "inline-block" }}>
            <Grid item> 1</Grid>
            <Grid item> 2</Grid>
            <Grid item> 3</Grid>
          </Grid>
        </Container>{" "}
        product list here
      </Box>
    </>
  );
}
