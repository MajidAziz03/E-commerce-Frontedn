import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isFetching: false,
    user: null,
    isError: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        success: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
            state.isError = false;
        }
    },
})

export const { success } = userSlice.actions

export default userSlice.reducer;
