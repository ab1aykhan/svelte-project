<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { Toaster } from 'svelte-sonner';
	import Loader from '$lib/components/Loader.svelte';
	import type { PageProps } from './$types.ts';

	let { data }: PageProps = $props();


</script>

<div class="p-4 w-full h-full overflow-auto">
	<h1 class="text-2xl m-4">Product List</h1>
	{#if data.products?.length }
		<div class="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-sm:gap-2 max-md:grid-cols-3">
			{#each data.products as product}
				<Card
					imgUrl={product.images[0]}
					title={product.title}
					description={product.description}
					id={product.id}
				/>
			{/each}
		</div>
		{:else}
		<Loader />
	{/if}

</div>
<Toaster position="top-right" />
