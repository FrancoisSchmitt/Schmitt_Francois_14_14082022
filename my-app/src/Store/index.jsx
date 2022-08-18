import { createSlice, configureStore } from '@reduxjs/toolkit';

export const firstNameSlice = createSlice({
      name: 'firstName',
      initialState: {
            firstName: '',
      },
      reducers: {
            getFirstName: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const lastNameSlice = createSlice({
      name: 'lastName',
      initialState: {
            lastName: '',
      },
      reducers: {
            getLastName: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const birthDateSlice = createSlice({
      name: 'Birthdate',
      initialState: {
            Birthdate: '',
      },
      reducers: {
            getBirthdate: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const startDaySlice = createSlice({
      name: 'StartDay',
      initialState: {
            StartDay: '',
      },
      reducers: {
            getStartDay: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const selectSlice = createSlice({
      name: 'Select',
      initialState: {
            Select: '',
      },
      reducers: {
            getSelect: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const streetSlice = createSlice({
      name: 'Street',
      initialState: {
            Street: '',
      },
      reducers: {
            getStreet: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const StateSlice = createSlice({
      name: 'State',
      initialState: {
            State: '',
      },
      reducers: {
            getState: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const citySlice = createSlice({
      name: 'City',
      initialState: {
            City: '',
      },
      reducers: {
            getCity: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const zipCodeSlice = createSlice({
      name: 'ZipCode',
      initialState: {
            ZipCode: '',
      },
      reducers: {
            getZipCode: (state, action) => {
                  state.value = action.payload;
            },
      },
});

export const { getFirstName } = firstNameSlice.actions;
export const { getLastName } = lastNameSlice.actions;
export const { getBirthdate } = birthDateSlice.actions;
export const { getStartDay } = startDaySlice.actions;
export const { getSelect } = selectSlice.actions;
export const { getStreet } = streetSlice.actions;
export const { getState } = StateSlice.actions;
export const { getCity } = citySlice.actions;
export const { getZipCode } = zipCodeSlice.actions;

export const store = configureStore({
      reducer: {
            firstName: firstNameSlice.reducer,
            lastName: lastNameSlice.reducer,
            Birthdate: birthDateSlice.reducer,
            StartDay: startDaySlice.reducer,
            Select: selectSlice.reducer,
            Street: streetSlice.reducer,
            State: StateSlice.reducer,
            City: citySlice.reducer,
            ZipCode: zipCodeSlice.reducer,
      },
});
