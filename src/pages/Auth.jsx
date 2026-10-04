import {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Auth(){
    const [searchParams, setSearchParams] = useSearchParams()
    const mode = searchParams.get("mode") === "login" ? "login" : "signup"
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const {signup, login} = useAuth()

    const { register, handleSubmit, reset, formState: {errors}} = useForm()

    useEffect(() => {
        setError(null)
        reset()
    }, [mode])

    function onSubmit(data){
        setError(null)
        let result;
        if(mode === "signup"){
            result = signup(data.email, data.password)
        }else{
           result = login(data.email, data.password)
        }
        
        if(result.success){
            navigate("/")
        }else{
            setError(result.error)
        }
        
    }

    function switchMode(newMode){
        setSearchParams({mode: newMode})
    }
   
    
    return(
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">{mode === "signup"? "Sign up" : "Login"}</h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className="error">{error}</div>}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input type="email" className="form-input" id="email" placeholder="leo@gmail.com" {...register("email", {required: "Email is required", pattern: {
                    value: /^\S+@\S+\.\S+$/, message: "Enter a valid email",
                },
                })} />
                     {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="passwords">Password</label>
                            <input type="password" className="form-input" id="passwords" placeholder="At least 6 characters"  {...register("password", {required: "password is required", minLength: {value: 6, message: "At least 6 characters"},
                })} />
                {errors.password && <p className="error">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary btn-large">
                            {mode === "signup"? "Sign up" : "Login"}
                            </button>
                    </form>
                    <div className="auth-switch">
                        { mode === "signup" ? (<p>
                            Already have an account?{" "} <span className="auth-link" onClick={() => switchMode("login")}>Login</span></p>

                        ):(
                            <p>{" "}
                            Don't have an account?{" "} <span className="auth-link" onClick={() => switchMode("signup")}>Sign up</span></p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}