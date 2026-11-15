import { useAuth } from "../../context/AuthContext"
import Auth from "../Auth/Auth"

const ProtectedRoute = ({children}) => {
    const {isLogin} = useAuth()

    if (isLogin) {
        return children
    }

    return <Auth />
}

export default ProtectedRoute