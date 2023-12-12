import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import anshImage from '../../../assets/ansh.svg';
export default function LoginLayoutcopy() {
  return (
    <Box
      sx={
        {
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Center vertically
          minHeight: '100vh', // Set the minimum height to the viewport height
        }
      }> 
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Typography
              color="secondary"
              variant="h4"
              elevation={3}
            sx={{ padding: 3, width: "100%", maxWidth: "400px" }}
              style={{
                marginTop: "30%",
                marginLeft: "25%",
                color: "black",
                borderColor: "black",
                width: 100,
                fontSize:'60px'
                
              }}>
              Unlock Your Potential With LearnHub
            </Typography>
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
          <img src={anshImage} alt="Ansh" />
        </Grid>
      </Grid>
    </Box>
  );
}


