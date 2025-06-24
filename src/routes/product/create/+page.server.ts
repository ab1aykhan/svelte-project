// import { API_BASE } from "$lib/config.ts";
import type { Actions } from "@sveltejs/kit";
import { z } from 'zod/v4';
import { fail, superValidate } from "sveltekit-superforms";
import { zod4 } from 'sveltekit-superforms/adapters';


const productSchema = z.object({
	title: z.string().min(1),
	price: z.number().positive(),
	description: z.string().min(1)
})

export const load = async (event) => {
	const form = await superValidate(event,zod4(productSchema))
	return {
		 form
	}
}

export const actions = {
	default: async (event) => {

		const form = await superValidate(event, zod4(productSchema))

		if(!form.valid) {
			return fail(400, {
				form
			})
		}
	}
} satisfies Actions;