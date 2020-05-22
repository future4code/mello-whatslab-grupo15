import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    Input,
    SendBtn,
    InputBox,
    MessagesBox,
    ChatBubble,
    MyMessages,
} from './styles';
import { IoMdSend, IoMdMic } from 'react-icons/io';
import { GrEmoji } from 'react-icons/gr';
import { BsCheckAll } from 'react-icons/bs';

export default function Chats() {
    const [messages, sendMessage] = useState([]);
    const [sentMessages, printMessage] = useState([]);
    const [robotMessages, setRobot] = useState([
        'Bacana isso que escreveu',
        'Que massa! Isso me parece um teste.',
        'Meu criador sempre dizia: ``Nada de bugs``',
    ]);

    const handleMsg = (e) => {
        sendMessage(e.target.value);
    };

    const handleSend = (e) => {
        e.preventDefault();
        messages == ''
            ? console.log('')
            : printMessage([...sentMessages, messages]);
        sendMessage('');
    };

    const remove = (e) => {
        let sure = prompt(
            'Deseja excluir essa mensagem? Digite S para sim e N para não'
        );

        sure == 's' || sure == 'S'
            ? (ReactDOM.findDOMNode(e.target).style.display = 'none')
            : console.log('');
    };

    return (
        <>
            <MessagesBox>
                <MyMessages>
                    {sentMessages.map((item) => (
                        <ChatBubble onClick={remove}>
                            <strong>Eu</strong>
                            {item}
                            <span>
                                <p>
                                    {new Date().getMinutes() < 10
                                        ? new Date().getHours() +
                                          ':0' +
                                          new Date().getMinutes()
                                        : new Date().getHours() +
                                          ':' +
                                          new Date().getMinutes()}
                                </p>
                                <BsCheckAll color="gray" size={15} />
                            </span>
                        </ChatBubble>
                    ))}
                </MyMessages>
                <form>
                    <InputBox>
                        <GrEmoji size={30} />
                        <Input
                            placeholder="Escreva uma mensagem"
                            value={messages}
                            onChange={handleMsg}
                        />
                        <SendBtn onClick={handleSend}>
                            <IoMdSend size={30} />
                            <IoMdMic size={30} />
                        </SendBtn>
                    </InputBox>
                </form>
            </MessagesBox>
        </>
    );
}
