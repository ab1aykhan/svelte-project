<script lang="ts">
	import type { Category } from '../../routes/types.js';

	const { name, image, slug, id }: Category = $props();
</script>

<div class="category cursor-pointer">
	<a href="/product/category/{id}" class="category__inner flex items-center gap-2">
		<div class="category__icon">
			<img src={image} alt={slug} style="width: 30px; height: 30px" />
		</div>
		<div class="category__name">{name}</div>
	</a>
</div>
