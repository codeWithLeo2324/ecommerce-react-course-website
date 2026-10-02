import { useState } from "react";
import {useForm} from "react-hook-form"
import "./form.css"



export default function Form(){
   const {register, handleSubmit, watch, 
          formState: {errors}
   } = useForm()


    function onSubmit(data){
       alert(`Welcome ${data.name}!`)

    }

    return(
        <div className="page">
            
         <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign up form</h1>
           <div className="field">
             <label htmlFor="name">Name</label>
            <input id="name" type="text"  placeholder="Name..." 
            {...register("name", {required: "Name is required", minLength: {value: 2, message: "At least 2 characters"},
            })}
           />
            {errors.message && <p className="error">{errors.name.message}</p>}
           </div>

            <div className="field">
                 <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="example@gmail.com"
                {...register("email", {required: "Email is required", pattern: {
                    value: /^\S+@\S+\.\S+$/, message: "Enter a valid email",
                },
            })}
            />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="field">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" placeholder="At least 6 characters"
                {...register("password", {required: "password is required", minLength: {value: 6, message: "At least 6 characters"},
                })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className="field">
                <label htmlFor="confirm"> Confirm Password</label>
                <input type="text" id="confirm" placeholder="At least 6 characters"
                {...register("confirm", {required: "Please confirm your password", validate: (value) => 
                    value === watch("password") || "password do not match",
                })} />


                {errors.confirm && <p>{errors.confirm.message}</p>}
            </div>

            <button type="submit">Sign up</button>
        </form>

        </div>
      
    )
}