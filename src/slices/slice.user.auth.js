import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: 'Tribu skool',
            phoneNumber: 50762569274,
            email: 'skool@tribu.com',
            photoURL: '',
            typeUser: 'user',
            id: null,
            apellido: "",
            direccion: "",
            biografia: "",
            pais: "",
            provincia: ""
        }

    },
    reducers: {
        setUserAuth: (state, action) => {
            state.user = action.payload;
        },
        setUserInformationPrincipal: (state, action) => {
            state.user.biografia = action.payload.biografia;
        },
        setPersonalInformation: (state, action) => {

            if (action.payload.name !== undefined) {
                state.user.name = action.payload.name;
            }

            if (action.payload.apellido !== undefined) {
                state.user.apellido = action.payload.apellido;
            }

            if (action.payload.direccion !== undefined) {
                state.user.direccion = action.payload.direccion;
            }

            if (action.payload.pais !== undefined) {
                state.user.pais = action.payload.pais;
            }

            if (action.payload.provincia !== undefined) {
                state.user.provincia = action.payload.provincia;
            }


        },
        setPhotoURL: (state, action)=>{
            state.user.photoURL = action.payload;
        }
    }
})

export const { setUserAuth, setUserInformationPrincipal, setPersonalInformation,setPhotoURL } = usersSlice.actions
export default usersSlice.reducer
