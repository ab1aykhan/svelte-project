import { API_BASE } from "$lib/config.ts";
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async({fetch, params}: {fetch: any, params: any}) =>{
    try {
    
        const response = await fetch(`${API_BASE}/categories/${params.id}/products`);
        
        const data = await response.json();

        if (!response.ok) {
			throw error(response.status, `Failed to fetch products`);
		}
        
        return { products:data };
    } catch (e:any) {
        throw error(e.status, 'Server error while loading products');
    }
}