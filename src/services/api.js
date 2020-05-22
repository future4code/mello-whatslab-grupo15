import React, { useState } from 'react';

// import { Container } from './styles';

import Historico from '../pages/Historico';

function Api() {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            nome: 'Caio',
            msg: 'Bora para aula, que hoje tem evidência!',
        },
        {
            id: 2,
            nome: 'Paula',
            msg: 'E esse HTML que não está semântico?',
        },
        {
            id: 3,
            nome: 'Soter',
            msg: 'Legal que tal agora fazer com bananinha?',
        },
    ]);
    return (
        <Historico
            mensage={conversations.map((conversation) => (
                <li key={conversation.id}>
                    {conversation.nome} | {conversation.msg}
                </li>
            ))}
        />
    );
}

export default Api;
