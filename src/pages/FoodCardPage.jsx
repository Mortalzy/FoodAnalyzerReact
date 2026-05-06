import { useEffect, useState } from "react"

const FoodCardPage = () => {
    const taskId = '123'

    const [task, setTask] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        
    })

    return (
        <div>
            <h1>Детали задачи</h1>
        </div>
    )
}

export default FoodCardPage