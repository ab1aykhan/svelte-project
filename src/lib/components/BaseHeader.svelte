<script lang="ts">
	import { API_BASE } from '$lib/config.js';
	import { onMount } from 'svelte';
	import Category from './category.svelte';
	import type { Category as CategoryType } from '../../routes/types.ts';

	let categories = $state<CategoryType[]>([]);

	const getCategories = async () => {
		const response = await fetch(`${API_BASE}/categories`);
		const data = await response.json();
		categories = data.slice(0, 5);
	};

	onMount(getCategories);
</script>

<div class="flex flex-wrap gap-3 p-3">
	{#each categories as category}
		<Category {...category} />
	{/each}
	<a href="/product/create">Create Product</a>
</div>
