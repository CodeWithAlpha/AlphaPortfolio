import React, { ReactNode } from "react";
import homeImage from "../assets/1.jpg";
import { Stack } from "@mui/material";

type props = {
  children: ReactNode;
};

function Home({ children }: props) {
  return (
    <Stack sx={{ height: "100vh", backgroundImage: `url(${homeImage})` }}>
      {children}
    </Stack>
  );
}

export default Home;
