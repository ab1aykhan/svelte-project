import { API_BASE } from "$lib/config.ts";


export const load = async({fetch, params}) =>{
    const response = await fetch(`${API_BASE}/categories/${params.id}/products`);
    const data = await response.json();


    console.log(data)
    return {
        products: data
    }

}