import './ProgressRing.css'

const ProgressRing = (props) => {

    const {
        dailyCalories,
        totalCalories,
    } = props

    const radius = 90
    const lengthOfCircle = 2 * Math.PI * radius 
    const percent = Math.min((totalCalories / dailyCalories) * 100, 100)
    const strokeDashoffset = lengthOfCircle - (lengthOfCircle * percent / 100)   
        

    return (
        <div className='progress-ring__wrapper'>
            <svg 
            className="progress-ring"
            width='220'
            height='220'
            >

                <circle 
                className="progress-ring__bg"
                cx='110'
                cy='110'
                r='90'
                >
                </circle>

                <circle 
                className="progress-ring__border"
                cx='110'
                cy='110'
                r='90'
                >
                </circle>

                <circle 
                className="progress-ring__value"
                cx='110'
                cy='110'
                r='90'
                strokeDasharray={lengthOfCircle}
                strokeDashoffset={strokeDashoffset}
                
                >
                </circle>
            </svg>

            <div className='calories-progress'>
                <p className='calories-progress__value'>{totalCalories}/{dailyCalories}</p>
                <p className='calories-progress__Kcal'>Kcal</p>
            </div>
        </div>
    )
}

export default ProgressRing
    