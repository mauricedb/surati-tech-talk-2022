<script>
	export let movie;
</script>

<article class="card m-2 shadow">
	<img
		src={`//image.tmdb.org/t/p/w300${movie.backdrop_path}`}
		class="card-img-top"
		alt={movie.title}
	/>
	<div class="card-body">
		<h5 class="card-title">{movie.title}</h5>
		<p class="card-text">
			{movie.overview}
		</p>
	</div>
</article>

<style>
	.card {
		flex-basis: 18rem !important;
		max-width: 18rem;
	}
</style>
