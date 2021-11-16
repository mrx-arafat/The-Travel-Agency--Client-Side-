import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/travel-banner.jpeg";
import bg from "../../../images/bg.jpg";
import { Typography, Button, Container } from "@mui/material";
import Box from "@mui/material/Box";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1, margin: "20px auto" }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h4">
              We travel not to escape life but for life not to escape us
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 13, fontWeight: 300, color: "gray" }}
            >
              “Travel is the only thing you buy that makes you richer” –
              Anonymous. Traveling makes you richer. Quotes about traveling like
              this one help us to remember how travel makes us humble and life
              experiences are more important than physical “things.” The older I
              get, the more I value experiences over things.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Explore Our Packages
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img
            style={{ width: "420px", display: "block", margin: "0 auto" }}
            src={chair}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
