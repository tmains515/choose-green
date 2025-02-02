import  key  from '../../../../APIKey'
export async function GET(req){

    const request = await fetch('https://real-time-product-search.p.rapidapi.com/search-v2?q=Nike%20shoes&country=us&language=en&page=1&limit=10&sort_by=BEST_MATCH&product_condition=ANY', {
        method:'GET',
        headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
        }
    })

    if (!request.ok){
        throw new Error("Something went wrong")
    }

    const data = await request.json()
    return new Response(JSON.stringify(data), {
        status: request.status,
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}