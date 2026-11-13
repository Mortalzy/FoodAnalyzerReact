import API from "../constants"

const analyzeFoodApi = async (file, comment) => {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('comment', comment)

    const response = await fetch(API.FOOD_ANALYZE, {
        method: "POST",
        body: formData
    })

    if (!response.ok) {
        throw new Error(`Не удалось проанализировать фото (${response.status})`)
    }

    return response.json()
}

export default analyzeFoodApi