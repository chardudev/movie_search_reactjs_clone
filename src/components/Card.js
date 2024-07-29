import React from "react"

export default function Card({ movie }) {
	return (
		<div className='card'>
			<img className='card-image' src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
			<div className='card-content'>
				<h3 className="card-title">{movie.title}</h3>
				<p><small>RATING: {movie.vote_average}</small></p>
				<p><small>RELEASE DATE: {movie.release_date}</small></p>
				<p>{movie.overview}</p>
			</div>
		</div>
	)

}