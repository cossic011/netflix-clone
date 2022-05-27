import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../../typings'

interface ModalState {
  modalState: boolean
  movieState: Movie | null
}

const initialState: ModalState = {
  modalState: false,
  movieState: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleModalState: (state, action) => {
      state.modalState = action.payload
    },
    handleMovieState: (state, action) => {
      state.movieState = action.payload
    },
  },
})

export const { handleModalState, handleMovieState } = modalSlice.actions

export default modalSlice.reducer
