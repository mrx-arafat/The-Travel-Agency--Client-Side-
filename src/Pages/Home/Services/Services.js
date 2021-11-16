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
      "It’s been a familiar and infuriating story during the pandemic: Hours waiting for an agent only to have the call dropped. The ordeal of rescheduling canceled flights. Delayed refunds. What give",
    img: bookingdot,
  },
  {
    name: "airbnb",
    description:
      "LIt’s been a familiar and infuriating story during the pandemic: Hours waiting for an agent only to have the call dropped. The ordeal of rescheduling canceled flights. Delayed refunds. What give",
    img: airbnb,
  },
  {
    name: "Teeth Whitening",
    description:
      "It’s been a familiar and infuriating story during the pandemic: Hours waiting for an agent only to have the call dropped. The ordeal of rescheduling canceled flights. Delayed refunds. What give",
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
