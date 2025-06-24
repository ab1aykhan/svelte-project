<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, errors, enhance } = superForm(data.form);
</script>

<div class="">
	<form method="POST" use:enhance>
		<label for="title">Title:</label><br />
		<input type="text" id="title" name="title" class="border" bind:value={$form.title} />
		{#if $errors.title}
			<small>{$errors.title}</small>
		{/if}
		<br />
		<label for="price">Price:</label><br />
		<input type="text" id="price" name="price" class="border" bind:value={$form.price} />
		{#if $errors.price}
			<small>{$errors.price}</small>
		{/if}
		<br />

		<label for="description">Description:</label><br />
		<textarea id="description" name="description" class="border" bind:value={$form.description}
		></textarea>
		{#if $errors.description}
			<small>{$errors.description}</small>
		{/if}
		<br />

		<button type="submit" class="border p-1">Create</button>
	</form>
</div>
