import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Ansh() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ display: "flex" }}>
        <Grid
          container
          style={{
            background: "red",
            width: "39.355%",
            height: "100vh",
          }}></Grid>
        <Grid
          container
          style={{
            backgroundColor: "black",
            width: "70%",
            height: "100vh",
          }}></Grid>
      </Box>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          position: "absolute",
          top: "25%",
          left: "15%",
        }}>
        <Box
          style={{
            backgroundColor: "red",
            display: "flex",
            width: "70vw",
            height: "50vh",
            borderRadius: "50px",
          }}>
          <Box
            style={{
              backgroundColor: "yellow",
              width: "30%",
              height: "100%",
            }}></Box>
          <Box
            style={{
              backgroundColor: "green",
              width: "70%",
              height: "100%",
            }}></Box>
        </Box>
      </Grid>
    </>
  );
}
