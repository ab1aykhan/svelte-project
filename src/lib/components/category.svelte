<script lang="ts">
	import type { Category } from '../../routes/types.ts';

	const { name, image, slug }: Category = $props();
</script>

<div class="category cursor-pointer">
	<div class="category__inner flex items-center gap-2">
		<div class="category__icon">
			<img src={image} alt={slug} style="width: 30px; height: 30px" />
		</div>
		<div class="category__name">{name}</div>
	</div>
</div>
