import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function CenteredLoginBox() {
  return (
    <Box
      sx={
        {
          // flexGrow: 1,
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center', // Center vertically
          // minHeight: '100vh', // Set the minimum height to the viewport height
        }
      }>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          Screen 1
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center vertically
            minHeight: "100vh", // Set the minimum height to the viewport height
          }}>
          <Paper
            elevation={3}
            sx={{ padding: 3, width: "100%", maxWidth: "400px" }}>
            {/* Blank Login Box */}
            {/* Add your content or leave it blank */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
