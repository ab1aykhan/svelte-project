<script lang="ts">
	export let products;
	import Card from '$lib/components/Card.svelte';
	import Loader from '$lib/components/Loader.svelte';
</script>

<div class="p-4 w-full h-full overflow-auto">
	<h1 class="text-2xl m-4">Product List</h1>
	<!-- {#if loading}
		<Loader /> -->
	{#if products.length}
		<div class="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-sm:gap-2 max-md:grid-cols-3">
			{#each products as product}
				<Card
					imgUrl={product.images[0]}
					title={product.title}
					description={product.description}
					id={product.id}
				/>
			{/each}
		</div>
	{:else}
		<div class="text-shadow-2xs mx-auto w-max">Product list is empty</div>
	{/if}
</div>
<Toaster position="top-right" />
