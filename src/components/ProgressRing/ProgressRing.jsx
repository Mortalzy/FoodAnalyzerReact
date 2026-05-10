import './ProgressRing.css'

const ProgressRing = (props) => {

    const {
        dailyCalories,
        totalCalories,
    } = props

    const width = 180
    const height = 180

    const cx = width / 2
    const cy = height / 2

    const radius = 72

    const lengthOfCircle = 2 * Math.PI * radius 
    const percent = dailyCalories !== 0 
        ? Math.min((totalCalories / dailyCalories) * 100, 100)
        : 0
    const strokeDashoffset = lengthOfCircle - (lengthOfCircle * percent / 100)   
        

    return (
        <div className='progress-ring__wrapper'>
            <svg 
            className="progress-ring"
            width={width}
            height={height}
            >

                <circle 
                className="progress-ring__bg"
                cx={cx}
                cy={cy}
                r={radius}
                >
                </circle>

                <circle 
                className="progress-ring__border"
                cx={cx}
                cy={cy}
                r={radius}
                >
                </circle>

                <circle 
                className="progress-ring__value"
                cx={cx}
                cy={cy}
                r={radius}
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
    