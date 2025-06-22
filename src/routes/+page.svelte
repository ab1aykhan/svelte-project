<script lang="ts">
	import { onMount } from 'svelte';
	import type { Product } from './types.ts';
	import Card from '$lib/components/Card.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import Modal from '$lib/components/Modal.svelte';
	import { API_BASE } from '$lib/config.js';

	let productList = $state.raw<Product[]>([]);

	let loading = $state<boolean>(false);

	let showModal = $state<boolean>(false);

	const openModal = () => {
		showModal = !showModal;
	};

	const getProducts = async (): Promise<void> => {
		try {
			loading = true;
			const response = await fetch(`${API_BASE}/products`);
			productList = await response.json();
		} catch (error) {
			toast.error(`Error fetching products ${error}`);
		} finally {
			loading = false;
		}
	};

	onMount(getProducts);
</script>

<div class="p-4 w-full h-full overflow-auto">
	<h1 class="text-2xl m-4">Product List</h1>
	{#if loading}
		<Loader />
	{:else if productList.length}
		<div class="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-sm:gap-2 max-md:grid-cols-3">
			{#each productList as product}
				<Card
					imgUrl={product.images[0]}
					title={product.title}
					description={product.description}
					onclickCard={openModal}
					id={product.id}
				/>
			{/each}
		</div>
	{:else}
		<div class="text-shadow-2xs mx-auto w-max">Product list is empty</div>
	{/if}

	<Toaster position="top-right" />
</div>
