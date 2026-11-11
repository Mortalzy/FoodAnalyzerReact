import dotenv from 'dotenv'
dotenv.config()

const openRouterApiKey = process.env.OPENROUTER_API_KEY

const fetchToOpenRouter = async (imageUrl, comment) => {

    const prompt = `Посмотри фотографию, проанализируй ее и учти комментарий.
    Выдай мне КБЖУ название и вес в таком формате JSON формате текстом:
    {
        title: string; 
        weight: number; 
        calories: number; 
        proteins: number; 
        fats: number; 
        carbs: number;
    }
    вместо string, number дай строковые и численные значения соответственно.
    Убери все markdown и лишний текст который помешает выполнить JSON.parse()
    ${comment}` 

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${openRouterApiKey}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        model: 'openrouter/free',
        messages: [
        { role: 'user',
            content: [
            {type: 'text', text: prompt},
            {type: 'image_url', image_url: {url: imageUrl}}
            ]},
        ],
        }),
    })

    return response
}

export default fetchToOpenRouter