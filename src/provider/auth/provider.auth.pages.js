import React, { useState, useEffect } from "react";
import DisgneSplashScreen from "../../components/component.screen/cpt.display.screen";
import { useSelector, useDispatch } from 'react-redux'

function ProvideAuth({ children }) {

    const configAuth = useSelector((state) => {
        // console.log(state )
        return state.configSliceApp
    })
  
    return configAuth.waitAuthCheck.value ? (
        <DisgneSplashScreen />) : (
        <> {children} </>
    );


}

export default ProvideAuth;
