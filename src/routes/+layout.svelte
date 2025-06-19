<script lang="ts">
	import '../app.css';
	import BaseHeader from '$lib/components/BaseHeader.svelte';

	let { children } = $props();
</script>

<BaseHeader />
{@render children()}
