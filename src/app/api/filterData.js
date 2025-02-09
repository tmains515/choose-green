import  AIkey from '../../../OpenAI'

export default async function categorizeProduct(productList, catagorySelected) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${AIkey}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            max_tokens: 100,
            messages: [{ role: "system", content: `Remove any products from ${JSON.stringify(productList)} that would not be part of ${JSON.stringify(catagorySelected)}` },
                       { role: "user", content: `Remove any products from ${JSON.stringify(productList)} that would not be part of ${JSON.stringify(catagorySelected)}` }]
        })
    });


    const data = await response.json();
    console.log(JSON.stringify(data) + 'here')

     // Extract response from OpenAI
     let filteredProducts;
     try {
         filteredProducts = JSON.parse(data.choices[0].message.content.trim());
         console.log(response)

     } catch (error) {
         filteredProducts = []; // Fallback if parsing fails
     }
 
     return filteredProducts; 
}