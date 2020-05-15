import styled from 'styled-components';
export const PageBody = styled.main`
    display: flex;
    justify-content: center;
    align-content: center;
    background-image: url('https://media.discordapp.net/attachments/704853583295676516/710676954172489879/Whatsapp-Wallpaper-112.jpg?width=247&height=439');
    background-attachment: fixed;
    background-size: contain;
    width: 100%;
    height: 100vh;
`;

export const Input = styled.input`
    color: white;
    background: none;
    outline: none;
    box-sizing: border-box;
    letter-spacing: 1px;
    border-width: 0px 0px 1px 0px;
    width: 200px;
    margin: 20px;
    font-weight: bold;
    box-shadow: 5px 5px 10px #00000085;
    border-radius: 3.5px;

    &::placeholder {
        color: #ffffff45;
    }
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    a {
        text-decoration: none;
        color: white;
    }
    h1 {
        margin-bottom: 100px;
        margin-top: 20px;
        color: white;
    }
    p {
        margin-top: 100px;
        color: yellow;
    }
`;

export const Send = styled.a`
    width: 200px;
    height: 60px;
    background-color: #02af9c;
    border: none;
    border-radius: 4%;
    outline: none;
    margin-top: 80px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;
