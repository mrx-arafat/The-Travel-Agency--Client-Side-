import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import useAuth from "../../hooks/useAuth";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";

const Order = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState();

  //for data load

  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <h2>Ordered By : {user.displayName}</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="orders table">
          <TableHead>
            <TableRow>
              <TableCell>Buyer Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Package</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.customerName}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.serviceName}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  <Link to="/">
                    {" "}
                    <Button variant="contained">Proceed</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Order;
