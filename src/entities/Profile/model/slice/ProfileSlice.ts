import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema, ValidateProfileErrors } from '../type/type';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';

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
        setReadonly: (state, actions:PayloadAction<boolean>) => {
            state.readonly = actions.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        },
        updateProfile: (state, actions:PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...actions.payload,
            };
        },
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
                state.form = actions.payload;
            })
            .addCase(fetchProfileData.rejected, (state, actions:PayloadAction<string>) => {
                state.isLoading = false;
                state.error = actions.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, actions:PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = actions.payload;
                state.form = actions.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, actions:PayloadAction<ValidateProfileErrors[]>) => {
                state.isLoading = false;
                state.validateErrors = actions.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
