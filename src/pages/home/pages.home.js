import React, { useEffect, useContext } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import AppBarSimple from '../../components/component.appBar.mui/appBar.simple'
import ThemeApp from "../../themeApp/theme.app.configuration";
import CardInformation from "../../components/component.card/card.information";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './index.css'
import Toolbar from '@mui/material/Toolbar';
import ActiveLastBreadcrumb from '../../components/component.footers/footer-simple'
const mdTheme = createTheme(ThemeApp);



export default function HomePages() {

  return (
    <ThemeProvider theme={mdTheme}>
      <AppBarSimple CardInformation={<CardInformation />} ></AppBarSimple>
      <Box  >
        <Grid container
          spacing={1}
          align="center"
          sx={{ marginTop: 5, paddingLeft: 4, paddingRight: 4 }}>

          <Grid item md={3}   >
            <img src="https://assets.skool.com/skool/4a532a8d526a43faa120e4c42bb9463c.png" className="images-home-list"></img>
            <img src="https://assets.skool.com/skool/8c14f506b35e453d9864e2300176a483.png" className="images-home-list-phone"></img>
          </Grid>

          <Grid item md={3}   >
            <img src="https://assets.skool.com/skool/f7863e11e92a4ad796e44841e5c4371e.png" className="images-home-list" ></img>
            <img src="https://assets.skool.com/skool/990ae7e7280647acbb23a545753f21dd.png" className="images-home-list-phone"></img>
          </Grid>

          <Grid item md={3}    >
            <img src="https://assets.skool.com/skool/d1f2c4971b6f440ab6f24823468e8607.png" className="images-home-list"></img>
            <img src="https://assets.skool.com/skool/4e83a59ca6124c2197ecd10ccaec0018.png" className="images-home-list-phone"></img>
          </Grid>

          <Grid item md={3} >
            <img src="https://assets.skool.com/skool/6f1bb511462644009de19e949b8b2c20.png" className="images-home-list"></img>
            <img src="https://assets.skool.com/skool/2c96d8fc489c43049e7090e0071042dd.png" className="images-home-list-phone"></img>
          </Grid>

        </Grid>

        <Grid item md={12} justifyContent={'center'}  sx={{ marginTop: 20}}>
          <Toolbar></Toolbar>
          <ActiveLastBreadcrumb></ActiveLastBreadcrumb>
        </Grid>


      </Box>

    </ThemeProvider>
  );
}
