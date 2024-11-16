import { useContext } from "react";
import { AuthContex } from "../provider/Authprovider";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
    const {user} = useContext(AuthContex);
    if  (user && user?.email){
        return children;
    }
    return (
       <Navigate to='/auth/login'></Navigate>
    );
};

export default Private;