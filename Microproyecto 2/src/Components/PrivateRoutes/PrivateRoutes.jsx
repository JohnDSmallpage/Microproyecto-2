import { Navigate } from "react-router";
import { useUser } from "../../Context/userContext";
import { LOGIN_URL } from "../../Urls/Urls";

export function PrivateRoute({children}){
    const {user,isLoading}=useUser();

    if(isLoading){
        return<h1>LOADING USER...</h1>;
    }

    if(!isLoading && !user){
        return <Navigate to={LOGIN_URL}/>;
    }

    return children;
}