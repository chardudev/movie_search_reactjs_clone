import React, { useState } from "react"
import Card from "../components/Card"

export default function SearchMovies() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([])

	const searchMovies = async (e) => {
		e.preventDefault();
		const url = `https://api.themoviedb.org/3/search/movie?api_key=69fa41a3b95809e275f4f59cf3a2902b&query=${query}`

		try {
			const res = await fetch(url)
			const data = await res.json()
			setMovies(data.results)
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			<form className="form" onSubmit={searchMovies}>
				<label className="label" htmlFor="query"> Movie Names</label>
				<input className="input" type="text" id="query"
					placeholder="Saving Face"
					onChange={(e) => setQuery(e.target.value)}
				></input>
				<button className="button" type="submit">Search</button>
			</form>
			<div className="card-list">
				{movies.filter(movie => movie.poster_path).map((movie) => {
					return (
						<Card movie={movie} key={movie.id} />
					)
				})}
			</div>
		</>
	)
}
// 69fa41a3b95809e275f4f59cf3a2902b