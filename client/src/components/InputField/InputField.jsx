import './InputField.css'

const InputField = (props) => {

    const {
        label,
        suffix,
        type,
        name,
        value,
        onChange,
    } = props
    
    return (
        <div className='input-field'>
            <label className="input-field__label">{label}</label>
            <div className="input-field__field">
                <input 
                className="input-field__input"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                />
                {suffix && <span className="input-field__suffix">{suffix}</span>}
            </div>
            
        </div>
    )
}

export default InputField