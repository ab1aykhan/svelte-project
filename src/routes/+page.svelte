<script lang="ts">
	import { onMount } from 'svelte';
	import type { Product } from './types.ts';
	import Card from '$lib/components/+card.svelte';

	let productList = $state.raw<Product[]>([]);

	let loading = $state<boolean>(false);

	const getProducts = async () => {
		try {
			loading = true;
			const response = await fetch(' https://api.escuelajs.co/api/v1/products');
			productList = await response.json();
		} catch (error) {
			console.error('Error fetching products', error);
		} finally {
			loading = false;
		}
	};

	onMount(getProducts);
</script>

<div class="p-4">
	<h1 class="text-2xl m-4">Product List</h1>
	<div class="grid grid-cols-4 gap-2 max-sm:grid-cols-1 max-sm:gap-2 max-md:grid-cols-3">
		{#each productList as product}
			<Card imgUrl={product.images[0]} title={product.title} description={product.description} />
		{/each}
	</div>
</div>
