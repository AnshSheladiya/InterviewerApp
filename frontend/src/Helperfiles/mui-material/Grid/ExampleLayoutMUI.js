import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';

const ExampleLayoutMUI = () => {
  return (
    <div>
      {/* Top Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Top Bar</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="xl">
        <Grid container spacing={3} style={{ marginTop: '50px',minHeight: 'calc(100vh - 64px)' }}>
          <Grid item xs={12}>
            <Paper>
              {/* Main screen content */}
              {/* Add your main content here */}
              <Typography color="secondary" variant="h4">Main Screen</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Bar */}
      <AppBar position="static" color="primary" style={{ bottom: 0 }}>
        <Toolbar>
          {/* Add your bottom bar content here */}
          <Typography variant="body1">Bottom Bar</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ExampleLayoutMUI;
