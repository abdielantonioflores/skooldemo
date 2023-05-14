import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './index.css'
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import CardInformation from "../../component.card/card.information";

const drawerWidth = 240;
const navItems = ['Caso de Uso', 'Registro', 'Inicio de session'];

export default function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src='https://tribu.network/assets/images/logo-tribu.png' className='logoTribu'></img>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box  sx={{  }}>
            <CssBaseline />
            <AppBar component="nav" className="box-shadow-none">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <img src='https://images-skool.s3.us-east-1.amazonaws.com/logo-tribu.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCvJG0QDdOhGr%2BhlmVTWEBtgSDzuME82EvPXVUzu873gAIgPqFwj2aq%2BTRLahJWxFJxnoQG8AOfzNmHdOaJTzBS2zsq7QII5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw2MjkzMTgzOTI3MzkiDK%2F0t3OnArfUwK1vmCrBAq98iXf2TXKWDZLHcmoj93EZ%2B6pVhwy4dAY%2Fet%2Bo8mwI20r7hWDIwpvBuPXiVbGSM%2BKdoiXQmPusMstxeuu58DhI%2FfqQxQ4RAOxXMyjyLqIqdRr4OkcvA9DR1%2B5z%2BUWLC0CfaHU6rJzSPlv6EKz%2BOnIXm33Qthu4VCqKTxd3f8MyYfktgKiw7WzLweoczsVlp3sBvYBWlH1QAcNvbEITwnl9ZC9oi7xs93VilEQHoaK9fD76g0eU29eTHTARnWr3CFMYQpqkAZLmWaacbRlUOfG%2BNmRwIBppd%2B%2FYwNgXWX6ugS1oWSDLV1uI0mfPaXzwiH5cfo5cNjfKjpucod6Jtj4F%2FJTTdmo65C6QyeKtwWWgPo823oPIfn9zq46b4FJ05OKyt4jdRH8WmyLmvmGVgtEwh1MdAJtO%2Bp7Yykit0UP74TDQs%2F%2BiBjqzAjSf3Y1DU0DuzimEhLmZ8%2BHv4l6eAczaOqnyIy%2FvaJOtkLf87Gc2r72HG%2FWBVyxh3jSkNDBcVgACHRd2SwL7Kmm4rbc4j0WaAyLhoZGYwG1ZIHmbpd%2BWvXQUgzQujHPinDuMW0p24RJxge0DbLa04p3QXVCVq5AV%2FrnVIdX42KeRMvwjg5AjgOUhS%2FRrZy%2BmpJcgVr%2FQSJhyv9Wu8qheC84klb24TT52yWtgcFW950y0HtBgPi1cH%2Fxff40gEHkikWEX%2BrZb4ZtUx%2FQS%2Fk3%2F09%2Ffa9vyymxaiv4BDodLhMUL2z44m2BzFs35el13nFyZwENEtkt%2FdFBh7GWt9VqWuttoS1TfgtqLwnpkKYrjwJJaQ2Rwt0NxHzgHijP7LmRKaVnSEMpAtdDMz0bzQuhALmwMHwE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230514T044313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZFBSMTOR4O5IUVIM%2F20230514%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c48de17fe5f79cf1a654ebf643164dd2e578974030ec52b8c88ea32e9d3e9e98' className='logoTribu'></img>

                        <MenuIcon className='icon-button-menu-phone' />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src='https://images-skool.s3.us-east-1.amazonaws.com/logo-tribu.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCvJG0QDdOhGr%2BhlmVTWEBtgSDzuME82EvPXVUzu873gAIgPqFwj2aq%2BTRLahJWxFJxnoQG8AOfzNmHdOaJTzBS2zsq7QII5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw2MjkzMTgzOTI3MzkiDK%2F0t3OnArfUwK1vmCrBAq98iXf2TXKWDZLHcmoj93EZ%2B6pVhwy4dAY%2Fet%2Bo8mwI20r7hWDIwpvBuPXiVbGSM%2BKdoiXQmPusMstxeuu58DhI%2FfqQxQ4RAOxXMyjyLqIqdRr4OkcvA9DR1%2B5z%2BUWLC0CfaHU6rJzSPlv6EKz%2BOnIXm33Qthu4VCqKTxd3f8MyYfktgKiw7WzLweoczsVlp3sBvYBWlH1QAcNvbEITwnl9ZC9oi7xs93VilEQHoaK9fD76g0eU29eTHTARnWr3CFMYQpqkAZLmWaacbRlUOfG%2BNmRwIBppd%2B%2FYwNgXWX6ugS1oWSDLV1uI0mfPaXzwiH5cfo5cNjfKjpucod6Jtj4F%2FJTTdmo65C6QyeKtwWWgPo823oPIfn9zq46b4FJ05OKyt4jdRH8WmyLmvmGVgtEwh1MdAJtO%2Bp7Yykit0UP74TDQs%2F%2BiBjqzAjSf3Y1DU0DuzimEhLmZ8%2BHv4l6eAczaOqnyIy%2FvaJOtkLf87Gc2r72HG%2FWBVyxh3jSkNDBcVgACHRd2SwL7Kmm4rbc4j0WaAyLhoZGYwG1ZIHmbpd%2BWvXQUgzQujHPinDuMW0p24RJxge0DbLa04p3QXVCVq5AV%2FrnVIdX42KeRMvwjg5AjgOUhS%2FRrZy%2BmpJcgVr%2FQSJhyv9Wu8qheC84klb24TT52yWtgcFW950y0HtBgPi1cH%2Fxff40gEHkikWEX%2BrZb4ZtUx%2FQS%2Fk3%2F09%2Ffa9vyymxaiv4BDodLhMUL2z44m2BzFs35el13nFyZwENEtkt%2FdFBh7GWt9VqWuttoS1TfgtqLwnpkKYrjwJJaQ2Rwt0NxHzgHijP7LmRKaVnSEMpAtdDMz0bzQuhALmwMHwE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230514T044313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZFBSMTOR4O5IUVIM%2F20230514%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c48de17fe5f79cf1a654ebf643164dd2e578974030ec52b8c88ea32e9d3e9e98' className='logoTribu'></img>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Link key={item} sx={{ color: '#000000' }} className='button-home-appBar'>
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" 
            
            >
                <Toolbar />
                {props.CardInformation}

            </Box>
        </Box>
    );
}
