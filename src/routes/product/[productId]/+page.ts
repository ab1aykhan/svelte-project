import { API_BASE } from '$lib/config.js'

export const load = async ({fetch, params} )=> {
    console.log(params)

    const response = await fetch(`${API_BASE}/products/${params.productId}`)
    const data = await response.json()



    return {
        product: data
    }
}