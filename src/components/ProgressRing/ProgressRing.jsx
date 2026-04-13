import './ProgressRing.css'

const ProgressRing = () => {
    return (
        <div className='progress-ring__wrapper'>
            <svg 
            className="progress-ring"
            width='180'
            height='180'
            >
                <circle 
                className="progress-ring__bg"
                cx='90'
                cy='90'
                r='70'
                >
                </circle>

                <circle 
                className="progress-ring__border"
                cx='90'
                cy='90'
                r='70'
                >
                </circle>

                <circle 
                className="progress-ring__value"
                cx='90'
                cy='90'
                r='70'
                >
                </circle>
            </svg>

            <div className='calories-progress'>
                <p className='calories-progress__percent'>10%</p>
                <p className='calories-progress__value'>1800/2000</p>
                <p className='calories-progress__Kcal'>Kcal</p>
            </div>
        </div>
    )
}

export default ProgressRing
    