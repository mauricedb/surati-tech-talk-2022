const apiKey = import.meta.env['VITE_API_KEY'];

export const get = async () => {
	const rsp = await fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`
	);

	const body = await rsp.json();

	return {
		status: rsp.status,
		body: body.results.map(({ id, title, overview, backdrop_path }) => ({
			id,
			title,
			overview,
			backdrop_path
		}))
	};
};
