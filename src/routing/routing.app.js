import React, { useLayoutEffect, } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePages from "../pages/home/pages.home";
import { Provider } from "react-redux";
import store from '../store'
import ProviderAuth from '../provider/auth/provider.auth.pages'
import DisgneSplashScreen from "../components/component.screen/cpt.display.screen";
import "../assets/css/app.css";
import "../assets/css/var/variable.css";
import PagesNotFound from "../pages.not.found"


export default function RoutingApp() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePages/>,
      errorElement: <PagesNotFound />
    }
  ]);

  return (
    <React.StrictMode>
      <Provider store={store}> 
          <ProviderAuth>
          <RouterProvider router={router}
            fallbackElement={<DisgneSplashScreen />}/>
        </ProviderAuth>
      </Provider>

    </React.StrictMode>

  )
}