import styled from 'styled-components';


export const AreaLogin = styled.div`

    background-color: #FFFFFF;
    padding: 30px;
    max-width:457px;
    height: 559px;
    margin: auto;
    margin-top: 51px;
    margin-bottom: 54px;
    margin-left: 175px;
    border-radius: 16px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
    color: #000;


    h1{
        font-size: 24px;
        margin-bottom: 4px;
        margin-left: 78px;
        margin-top: 56px;
    }

    .p1{
        color: #8E8E8E;
        margin-top: 4px;
        margin-left: 78px;
    }

    .p2{
        color: #8E8E8E;
        margin-left: 161px;
        margin-top: 96px;
    }

    .footerLogin{
        font-size: 13px;
        margin-left: 242px;
        margin-top: -7px;
        color: #76AADB;
        font-weight: bold;
    }

    .form-imput{
        text-align: left;
        label{
            display: block;
            margin-left: 78px;
        }
        input{
            margin-bottom: 20px;
            margin-left: 78px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 0, 0, 0, 1px;
            width: 280px;
            transition: 0.3s;

            &:hover{
                border: 2px solid #7d2ae8
            }

        }
    }
`
