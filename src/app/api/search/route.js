import  key  from '../../../../APIKey'


export async function POST(req){
    const { query } = await req.json()
    const search = encodeURIComponent("eco friendly" + query)

    const request = await fetch(`https://real-time-product-search.p.rapidapi.com/search?q=${search}&country=us&language=en&page=1&limit=20&sort_by=BEST_MATCH&product_condition=ANY`, {
        method:'GET',
        headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
        },
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


