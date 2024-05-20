import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="50%"
        textAlign="center"
      >
        <img
          src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1880.jpg?size=626&ext=jpg&ga=GA1.1.1093844312.1716055033&semt=ais_user_b"
          alt="notfound"
          style={{ Width: "70%", height: "10%", flexWrap: "wrap" }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Page Not Found
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          RETURN TO HOME PAGE
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
