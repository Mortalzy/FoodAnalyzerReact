import { API } from "../constants"

const createFoodApi = async (formData, token) => {
    const response = await fetch(API.FOOD, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)
    }

    return data
}

const getFoodsApi = async (token) => {
    const response = await fetch(API.FOOD, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)
    }

    return data
}

const deleteFoodByIdApi = async (food_id, token) => {
    const response = await fetch(`${API.FOOD}/${food_id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)
    }

    return data
}

const deleteAllFoodsApi = async (token) => {
    const response = await fetch(API.FOOD, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)
    }

    return data
}

export {
    getFoodsApi,
    createFoodApi,
    deleteFoodByIdApi,
    deleteAllFoodsApi
}


