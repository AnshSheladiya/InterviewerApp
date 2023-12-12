import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import {
    Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LoginLayoutcopy from "./LoginLayoutcopy";
const NavbarMUI = () => {
  return (
    <div style={{backgroundColor: "rgba(255, 233, 233, 0.99)",height:'100vh'}}>
      <AppBar
        position="static"
        style={{
          top: 0,
          backgroundColor: "rgba(255, 233, 233, 0.99)",
          padding: 5,
        }}>
        <Toolbar>
        <Grid container alignItems="center" justifyContent='flex-start'>

          {/* Add your bottom bar content here */}
          <Typography
            style={{
              color: "black",
              fontFamily: "monospace",
              fontSize: "24px",
              fontWeight: "bolder",
              fontStyle: "normal",
              lineHeight: "normal",
              marginRight: "3%",
            }}>
            LOGO
          </Typography>
          <Typography
            style={{
              color: "black",
              fontSize: "22px",
              fontStyle: "normal",
              lineHeight: "normal",
              marginRight: "2%",
            }}>
            Courses
          </Typography>
          <Typography
            style={{
              color: "black",
              fontSize: "22px",
              fontStyle: "normal",
              lineHeight: "normal",
              marginRight: "2%",
            }}>
            Resources
          </Typography>
          <Typography
            style={{
              color: "black",
              fontSize: "22px",
              fontStyle: "normal",
              lineHeight: "normal",
              marginRight: "2%",
            }}>
            Instructors
          </Typography>
          <FormControl sx={{ m: 1, width: "30ch" }} size="small" style={{
              marginRight: "2%",
            }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    //   onClick={handleClickShowPassword}
                    //   onMouseDown={handleMouseDownPassword}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="outlined"  position="end" style={{
              marginRight: "2%",color: "black",borderColor:'black',width:100
            }}>Sign In</Button>
          <Button variant="contained"  position="end" style={{
              color: "black",width:100,
            }}>Log In</Button> 
          </Grid>
        </Toolbar>
      </AppBar>
      <LoginLayoutcopy/>
    </div>
  );
};

export default NavbarMUI;
