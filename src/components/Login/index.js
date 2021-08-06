import React from 'react';
import { BtnIcons1, BtnIcons2, BtnDefaut } from './styled.js';
import './styled.css';
import { AreaLogin } from './LoginStyled';
import { SiFacebook, SiGoogle } from "react-icons/si";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <AreaLogin> 
            <h1>Login</h1>
            <p className="p1">Faça seu login e embarque nessa viagem.</p>

            <form>
                <div className="form-imput">
                    <label>E-mail</label>
                    <input type="email" />
                </div>

                <div className="form-imput">
                    <label>Senha</label>
                    <input type="password" />
                </div>
            </form>

            <div className="footerLogin">
                Esqueci minha senha
            </div>
                                    
            <BtnDefaut>
                Entrar
            </BtnDefaut>

            <p className="p2">Ou conecte-se com</p>
            
            <div className="row">
                <BtnIcons1 className="btn btn-primary btn-md">
                    <SiFacebook/>
                    <div className="center1">Facebook</div>
                </BtnIcons1>

                <BtnIcons2>
                    <SiGoogle className="btn btn-danger btn-md"/>
                    <div className="center2">Google +</div>
                </BtnIcons2>
            </div>
        </AreaLogin>
    );
}

