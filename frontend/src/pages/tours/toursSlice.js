import { createSlice } from "@reduxjs/toolkit";

const toursSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    tour: null,
    query: "",
    page: 1,
  },
  reducers: {
    setTours: (state, { payload: tours }) => {
      state.tours = tours;
    },
    setTourDetails: (state, { payload: tour }) => {
      state.tour = tour;
    },
  },
});

export const { setTours, setTourDetails } = toursSlice.actions;

const selectToursState = (state) => state.tours;
export const selectTours = (state) => selectToursState(state).tours;
export const selectTourDetails = (state) => selectToursState(state).tour;

export default toursSlice.reducer;
