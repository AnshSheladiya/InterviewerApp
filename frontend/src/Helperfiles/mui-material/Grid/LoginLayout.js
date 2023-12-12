import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function BasicSaperateScreenGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          //something 1
        </Grid>
        <Grid item xs={6}>
        //something 2
        </Grid>
     
      </Grid>
    </Box>
  );
}
