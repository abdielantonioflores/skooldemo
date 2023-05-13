import { createSlice } from "@reduxjs/toolkit";
// import FirebaseServiceApis from '../../services/auth/firebase.auth.apis'
export const configSliceApp = createSlice({
  name: "configuration",
  initialState: {
    displayAlertSesion: {
      value: "none",
    },
    alertSesion: {
      value: "defauld",
    },
    waitAuthCheck: {
      value: false,
    },
    isAuthenticated: {
      value: false,
    },
    isOpenService: {
      value: false,
    },
    dashboardHome: {
    
    },
  },
  reducers: {
    setDisplayAlert: (state, action) => {
      state.displayAlertSesion = {
        value: action.payload,
      };
    },
    setAlertSesion: (state, action) => {
      state.alertSesion = {
        value: action.payload,
      };
    },
    setWaitAuthCheck: (state, action) => {
      state.waitAuthCheck = {
        value: action.payload,
      };
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = {
        value: action.payload,
      };

      if (action.payload === false) {
        // FirebaseServiceApis.logoutUser();
      }
    },
    setServiceExpand: (state, action) => {
      state.isOpenService = {
        value: action.payload,
      };
    },
    setChangeTitleDashboard: (state, action) => {
      state.dashboardHome.titleDashboard = `Bienvenido  a planner Day`;
    },
  },
});

export const {
  setDisplayAlert,
  setAlertSesion,
  setWaitAuthCheck,
  setIsAuthenticated,
  setServiceExpand,
  setChangeTitleDashboard,
} = configSliceApp.actions;

export default configSliceApp.reducer;
