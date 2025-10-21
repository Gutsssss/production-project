import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../type/type';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, actions:PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = actions.payload;
            })
            .addCase(fetchProfileData.rejected, (state, actions:PayloadAction<string>) => {
                state.isLoading = false;
                state.error = actions.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
