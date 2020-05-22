import styled from 'styled-components';

export const ListConversation = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
`;

export const List = styled.div`
    flex: 20%;
    width: 100vw;
    height: 100vh;
    border-right: 1px solid rgba(110, 110, 100, 0.2);
`;

export const Item = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    height: 72px;
    width: 100%;
    pointer-events: all;
    position: relative;

    a {
        color: #000;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        width: 96%;
        border-bottom: 1px solid rgba(110, 110, 100, 0.2);
    }
    a:hover {
        background-color: #e6e6e6;
    }
`;

export const Title = styled.h1`
    padding: 0px 15px 0 13px;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`;

export const EnvelopeItem = styled.div`
    padding: 10px 3px 0 13px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    flex: none;
    display: flex;
    align-items: center;
`;

export const Conversation = styled.div`
    flex: 70%;
`;

export const Text = styled.p`
    padding-bottom: 20px;
`;

export const IconBig = styled.img`
    display: flex;
    margin-top: 100px;
    margin-left: 290px;
    border-radius: 50%;
    align-items: center;
    align-self: center;
    flex: none;
`;

export const Status = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 72px;
    background-color: #e6e6e6;

    img {
        margin-top: 10px;
        align-items: center;
        margin-left: 23px;
    }
`;

export const Icons = styled.span`
    display: flex;
    flex-direction: row;
    align-self: center;
    margin: 20px;
    margin-left: 200px;
    justify-content: space-between;

    p {
        position: relative;
        right: 90%;
        font-weight: bold;
    }
`;

export const Icon = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
    margin-left: 20px;
`;

export const EnvelopeTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-top: 10px;
    padding-left: 10px;
`;

export const MensageWhats = styled.h1`
    margin-top: 10px;
    font-size: 32px;
    color: #525252;
    text-align: center;
    font-weight: inherit;
`;

export const TextWhats = styled.p`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 190px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    line-height: 20px;
`;
