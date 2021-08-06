import styled from 'styled-components';

export const BtnIcons1 = styled.button`

    background-color:#3B5998;
    display: inline-flex;
    text-align: center;
    color: #FFF;
    align-items: center;
    padding: 10px;
    width: 146px;
    height: 37px;
    border-radius: 20px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    margin-left: 78px;
    transition: 0.4s;

    .center1{
        text-align: center;
        width: 100%;
    }  
`;

export const BtnIcons2 = styled.button`

    background-color: #DB4A39;
    display: inline-flex;
    text-align: center;
    color: #FFF;
    align-items: center;
    padding: 10px;
    width: 146px;
    height: 37px;
    border-radius: 20px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-left: 8px;
    margin-bottom: 15px;
    transition: 0.4s;

    .center2{
        text-align: center;
        width: 100%;  
    }

`;

export const BtnDefaut = styled(BtnIcons1)`
    background-color: #E0E0e0;
    color: #A6A6A6;
    width: 300px;
    height: 37px;
    margin-top: 22px;
    margin-left: 78px;
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    padding: 10px 22px;
    border-radius: 20px;
    margin-bottom: 48px;
`;