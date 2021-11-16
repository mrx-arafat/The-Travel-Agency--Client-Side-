import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

import bookingdot from "../../../images/bookingdot.jpg";
import airbnb from "../../../images/airbnb.png";
import travel3 from "../../../images/travel-3.jpg";
import HomeService from "../Home/HomeService";

const services = [
  {
    name: "Booking.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: bookingdot,
  },
  {
    name: "airbnb",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: airbnb,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: travel3,
  },
];
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "#5CE7ED" }}
          variant="h6"
          component="div"
        >
          Available Services
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Meet Our Official Partner
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <HomeService key={service.name} service={service}></HomeService>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
