import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/User';

const initialState:UserSchema = {
    _ininted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, actions:PayloadAction<User>) => {
            state.authData = actions.payload;
        },
        inintAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._ininted = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
