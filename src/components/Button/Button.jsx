import './Button.css'

const Button = (props) => {

    const {
        className='',
        type='button',
        onClick,
        children,
        colorButton
    } = props

    return (
        <button 
        className={`button button-- ${className}`}
        type={type}
        onClick={onClick}
        style={ {
            backgroundColor: colorButton
        }}
        
        >
            {children}
        </button>
    )
}

export default Button