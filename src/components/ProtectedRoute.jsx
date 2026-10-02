import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Children } from "react";

export default function ProtectedRoute(){
    const {user} = useAuth()
    if(!user){
        return <Navigate to="/auth?mode=login" replace/>
    }
    return children
}