import { API_BASE } from "$lib/config.js";
import type { Actions } from "@sveltejs/kit";

export const actions = {
	default: async ({request}) => {
		console.log(request)
		const formData = await request.formData();
		console.log(formData)
		const title = formData.get('title');
		const price = formData.get('price');
		const description = formData.get('description');

		console.log(price, title, description)

		const res = await fetch(`${API_BASE}/products/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
				title,
				price,
				description,
				categoryId: 1,
				images: ['']
			 })
		  });

		  console.log(res)

		  if (!res.ok) {
			return { success: false, error: 'Failed to send data to external API' };
		  }

		return { success: true };
	}
} satisfies Actions;