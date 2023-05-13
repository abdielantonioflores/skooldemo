import React from 'react'
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main:'#ffffff',
            dark: '#ffffff',
            contrastText: '#000000'
          },
          secondary:{
            light: '#f59e0b',
            main: '#f59e0b',
            dark: '#f59e0b',
            contrastText: '#e3f2fd'
          },
          buttonsTribu:{
            light: '#f8d481',
            main: '#f8d481',
            dark: '#f8d481',
            contrastText: '#000000'
          }


        },
      
  });

  export default  theme 