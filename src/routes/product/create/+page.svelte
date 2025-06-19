<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="">
	<form method="POST" use:enhance>
		<label for="title">Title:</label><br />
		<input type="text" id="title" name="title" class="border" />
		<br />
		<label for="price">Price:</label><br />
		<input type="text" id="price" name="price" class="border" />
		<br />

		<label for="description">Description:</label><br />
		<textarea id="description" name="description" class="border"></textarea>
		<br />

		<button type="submit" class="border p-1">Create</button>
	</form>
</div>
