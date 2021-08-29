import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const HomePage = () => {
  return (
    <Container>
      <Box
        width={"100%"}
        display={"flex"}
        flex={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img src="https://react-etc.net/files/2016-11/1478160120_react-mobx-typescript.png" />
      </Box>
    </Container>
  );
};

export default HomePage;
