const defaultApi = 'http://localhost:3001/api'

const API = {
    FOOD_ANALYZE: `${defaultApi}/foods/analyze`,
    LOGIN: `${defaultApi}/auth/login`,
    REGISTER: `${defaultApi}/auth/register`,
    FOOD: `${defaultApi}/foods`
}

const ROUTES = {
    CALCULATE: '/calculate',
    ADD_FOOD: '/add-food',
    MAIN: '/',
    PROFILE: '/profile',
    AUTH: '/auth',
}

const STORAGE_KEYS = {
    TOKEN: 'token',
    USER: 'user',
}

export {
    API,
    ROUTES,
    STORAGE_KEYS
}