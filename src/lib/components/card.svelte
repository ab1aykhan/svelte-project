<script lang="ts">
	import ImagePlaceholder from '$lib/images/placeholder.avif';

	interface CardProps {
		imgUrl: string;
		title: string;
		subtitle?: string;
		description: string;
	}

	let { imgUrl, title, subtitle = '', description }: CardProps = $props();

	const handleImgError = (e: Event): void => {
		(e.target as HTMLImageElement).src = ImagePlaceholder;
	};
</script>

<div class="card p-4 shadow-xl shadow-xl cursor-pointer">
	<aside class="card__aside mb-3">
		<figure class="card__figure">
			{#if imgUrl}
				<img src={imgUrl} alt="card-img" loading="lazy" onerror={handleImgError} />
			{:else}
				<img src={ImagePlaceholder} alt="img-placeholder" />
			{/if}
		</figure>
	</aside>
	<header class="card__header mb-3">
		<h2 class="card__title text-2xl">{title}</h2>
		<h3 class="card__subtitle">{subtitle}</h3>
	</header>
	<div class="card__body">
		<p class="card__description">
			{description}
		</p>
	</div>
</div>

<style>
	.card {
		max-width: 400px;
		width: 100%;
	}
</style>
