import styled from 'styled-components';

export const Input = styled.input`
    width: 700px;
    padding: 12px;
    border-radius: 21px;
    border: none;

    &::placeholder {
        color: gray;
    }
`;

export const SendBtn = styled.button`
    border-radius: 100%;
    outline: none;
    border: none;
    background-color: #e6e6e6;

    * {
        margin: 0 10px;
    }
`;

export const InputBox = styled.div`
    background-color: #e6e6e6;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        margin: auto 40px;
    }
`;

export const MessagesBox = styled.div`
    background-color: #E5DDD5
    height: 1200px;
    width: 850px;
          `;

export const MyMessages = styled.ul`
    background-image: url('https://i.pinimg.com/originals/85/70/f6/8570f6339d3189c96e340d47a581d3b8.jpg');
    background-color: #e5ddd5;
    padding-bottom: 50px;
    background-size: contain;
    padding-top: 15px;
    overflow-y: scroll;
    height: 850px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ChatBubble = styled.div`
    background-color: white;
    padding: 10px;
    min-height: 100px;
    max-height: 2000px;
    min-width: 10%;
    max-width: 90%;
    overflow: hidden;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 2px;
    border-radius: 15px 15px 10px 1px;
    cursor: pointer;

    p {
        margin-top: 5px;
        font-size: 10px;
        color: gray;
    }

    span {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
