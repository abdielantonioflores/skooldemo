import React, { useState, useEffect } from "react";
import DisgneSplashScreen from "../../components/comp.screen/cpt.display.screen";
import { useSelector, useDispatch } from 'react-redux'

function ProvideAuth({ children }) {
    console.log(children)
    const configAuth = useSelector((state) => {
        return state.configSliceApp
    })
  
    return configAuth.waitAuthCheck.value ? (
        <DisgneSplashScreen />) : (
        <> {children} </>
    );


}

export default ProvideAuth;
