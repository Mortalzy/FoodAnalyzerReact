import './AppLayout.css'

const AppLayout = (props) => {
    const {
        children,
    } = props

    return (
        <div className="app-layout">
            {children}
        </div>
    )
}

export default AppLayout