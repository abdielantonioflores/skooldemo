import React, { Component }  from 'react';
import Box from '@mui/material/Box';
// import '../css/spinner.css'

function DisgneSplashScreen() {

  return (
    <div id="fuse-splash-screen">
      <div className="logo">
        <img width="128" src="https://firebasestorage.googleapis.com/v0/b/plannerday-48129.appspot.com/o/calendario.png?alt=media&token=97ba2d1f-6af9-43de-bebd-c363b6ae50d5" alt="logo" />
      </div>
      <Box
        id="spinner"
        sx={{
          '& > div': {
            backgroundColor: 'palette.secondary.main',
          },
        }}
      >
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </Box>
    </div>
  );
}

export default DisgneSplashScreen;
