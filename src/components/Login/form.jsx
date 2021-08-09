import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="form-imput">
               
                    <input type="email" placeholder="E-mail" />
                </div>

                <div className="form-imput">
                  
                    <input type="password" placeholder="Senha"/>
                </div>
    </form>
  );
}