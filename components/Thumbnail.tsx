import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleModalState,
  handleMovieState,
} from '../features/modal/modalSlice'
import { RootState } from '../store'
import { Movie } from '../typings'

interface Props {
  movie: Movie | DocumentData
}

const Thumbnail = ({ movie }: Props) => {
  const dispatch = useDispatch()

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-125"
      onClick={() => {
        dispatch(handleMovieState(movie))
        dispatch(handleModalState(true))
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
