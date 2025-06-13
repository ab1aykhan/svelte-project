<script lang="ts">
	import ImagePlaceholder from '$lib/images/placeholder.avif';

	export let data;

	const { product } = data;
</script>

<div class="product p-10">
	<div class="product__inner">
		<div class="product__header mb-5">
			<a href="/" class="text-blue-600">Go Back</a>
		</div>
		<div class="product__body flex gap-10">
			<div class="product__image">
				{#if product.images.length}
					<img src={product.images[0]} alt="product-img" />
				{:else}
					<img src={ImagePlaceholder} alt="img-placeholder" />
				{/if}
			</div>
			<div class="product__info">
				<h1 class="mb-6">{product.title}</h1>
				<p class="mb-4">{product.description}</p>
				<b>{product.price}$</b>
			</div>
		</div>
	</div>
</div>
