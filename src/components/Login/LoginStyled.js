import styled from 'styled-components';


export const AreaLogin = styled.div`

    background-color: #FFFFFF;
    padding: 30px;
    max-width:457px;

    flex: 1;
    border-radius: 16px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
    color: #000;

    .loginwrapper{
        padding: 10px;
        height: 100%;
        overflow: hidden;
    }
    h1{
        font-size: 24px;
        margin-bottom: 4px;
        margin-left: 78px;
        
    }

    .p1{
        color: #8E8E8E;
        margin-top: 4px;
        margin-left: 78px;
    }

    .p2{
        color: #8E8E8E;
        margin-left: 161px;

    }
    .row {
        margin-bottom: 10px;
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
            border-bottom-color: grey;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
            border: 0, 0, 0, 1px;
            width: 280px;
            transition: 0.3s;

            &:hover{
                border: 2px solid #7d2ae8
            }

        }
    }
`
