import { API } from "../constants"

const loginApi = async (formData) => {
    const response = await fetch(API.LOGIN, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: formData.email,
            password: formData.password,
        })
    })

    const data = await response.json()

    console.log(data);

    if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)
    }

    return data
}

const registerApi = async (formData) => {
    const response = await fetch(API.REGISTER, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })

    const data = await response.json()

    console.log(data);

    if (!response.ok) {
        throw new Error(`${data.message} (${response.status})`)
    }

    return data
}


export {
    loginApi,
    registerApi,
}