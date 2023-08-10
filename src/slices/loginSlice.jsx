import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsersService } from '../services/loginService';

const initialState = {
  isAuthenticated: false,
  isLoading: null,
  userData: null,
  error: null,
};

export const userLogin = createAsyncThunk(
  'userLogin',
  async (payload, { rejectWithValue }) => {
    const {
      requestPayload: { username, password },
      onAfterLogin,
    } = payload;

    try {
      const response = await getAllUsersService(
        `https://swapi.dev/api/people/?search=${username}`
      );
      const data = await response.json();
      const foundData = data.results[0];
      let wrapData = {};
      if (foundData && foundData.birth_year === password) {
        wrapData = {
          character: foundData,
          isAuthenticated: true,
        };
      } else {
        let error = 'Incorrect username and password;';
        error += data.results.length > 1 ? 'more than one result;' : '';
        wrapData = {
          character: null,
          isAuthenticated: false,
          error,
        };
      }
      onAfterLogin(wrapData);
      return { data: wrapData };
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      const { character, isAuthenticated, error } = action.payload.data;
      state.isAuthenticated = isAuthenticated;
      state.userData = character;
      state.error = error;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
    });
  },
});

const {} = loginSlice.actions;
export default loginSlice;
