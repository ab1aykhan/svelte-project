<script lang="ts">
	import { API_BASE } from '$lib/config.js';
	import { onMount } from 'svelte';
	import Category from './Category.svelte';
	import type { Category as CategoryType } from '../../routes/types.ts';
	import { Toaster, toast } from 'svelte-sonner';

	let categories = $state<CategoryType[]>([]);
	let loading = $state<boolean>(false);

	const getCategories = async () => {
		try {
			loading = true;
			const response = await fetch(`${API_BASE}/categories`);
			const data = await response.json();
			categories = data.slice(0, 5);
		} catch (error) {
			toast.error(`Error fetching categories ${error}`);
		} finally {
			loading = false;
		}
	};

	onMount(getCategories);
</script>

<div class="flex flex-wrap gap-3 p-3">
	{#each categories as category}
		<Category {...category} />
	{/each}
	<a href="/product/create">Create Product</a>
	<Toaster position="top-right" />
</div>
