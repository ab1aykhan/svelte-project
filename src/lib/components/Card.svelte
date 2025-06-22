<script lang="ts">
	import ImagePlaceholder from '$lib/images/placeholder.avif';

	interface CardProps {
		imgUrl: string;
		title: string;
		subtitle?: string;
		description: string;
		id: string | number;
		onclickCard?: () => void | Promise<void>;
	}

	let { imgUrl, title, subtitle = '', description, id }: CardProps = $props();

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
		<p class="card__description mb-5">
			{description}
		</p>
		{#if id}
			<a href="/product/{id}" class="w-max ml-auto block text-blue-600">View full info</a>
		{/if}
	</div>
</div>

<style>
	.card {
		max-width: 400px;
		width: 100%;
	}
</style>
