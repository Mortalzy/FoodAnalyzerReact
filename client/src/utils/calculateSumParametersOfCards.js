const calculateSumParametersOfCards = (foodCards) => {
    const totalCalories = foodCards.reduce( (total, {calories}) => {
        return total + calories
    }, 0)

    const totalCarbs = foodCards.reduce( (total, {carbs}) => {
        return total + carbs
    }, 0)

    const totalFats = foodCards.reduce( (total, {fats}) => {
        return total + fats
    }, 0)

    const totalProteins = foodCards.reduce( (total, {proteins}) => {
        return total + proteins
    }, 0)

    return {
        totalCalories,
        totalProteins,
        totalFats,
        totalCarbs,
    }
}

export default calculateSumParametersOfCards