const calculateDailyMacros = (formData) => {
        const {age, weight, height, gender, activityCoefficient} = formData

        const bmr = 
            gender === 'Male' 
            ?  10 * weight + 6.25 * height - 5 * age + 5
            :  10 * weight + 6.25 * height - 5 * age - 161

        let dailyCalories = bmr * activityCoefficient
        let dailyProteins = weight * 2
        let dailyFats = weight * 0.9
        let dailyCarbs = (dailyCalories - dailyProteins * 4 - dailyFats * 9) / 4

        dailyCalories = Math.round(dailyCalories)
        dailyProteins = Math.round(dailyProteins)
        dailyFats = Math.round(dailyFats)
        dailyCarbs = Math.round(dailyCarbs)

        return {
            dailyCalories,
            dailyProteins,
            dailyFats,
            dailyCarbs
        }
    }

    export default calculateDailyMacros