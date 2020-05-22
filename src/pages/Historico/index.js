import React, { useState } from 'react';

import { MdChat } from 'react-icons/md';
import { IoMdMore, IoMdSync } from 'react-icons/io';

//assets
import {
    Title,
    Avatar,
    List,
    Item,
    EnvelopeItem,
    ListConversation,
    Conversation,
    Text,
    IconBig,
    Status,
    Icons,
    Icon,
    EnvelopeTexto,
    MensageWhats,
    TextWhats,
} from './style';

import Caio from '../../assets/caio.png';
import Paula from '../../assets/paula.jpg';
import Soter from '../../assets/soter.jpg';
import Whats from '../../assets/iconegrande.jpg';
import Eu from '../../assets/eulirico.jpg';

function Historico(props) {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            nome: 'Caio',
            msg: 'Bora para aula, que hoje tem evidência!',
            avatar: Caio,
            url: '/caio',
        },
        {
            id: 2,
            nome: 'Paula',
            msg: 'E esse HTML que não está semântico?',
            avatar: Paula,
            url: '/paula',
        },
        {
            id: 3,
            nome: 'Soter',
            msg: 'Legal que tal agora fazer com bananinha?',
            avatar: Soter,
            url: '/soter',
        },
    ]);
    return (
        <ListConversation>
            <List>
                <Status>
                    <Avatar src={Eu} />
                    <Icons>
                        <p>Labenauta</p>
                        <Icon>
                            <IoMdSync size={24} color="#666" />
                        </Icon>
                        <Icon>
                            <MdChat size={24} color="#666" />
                        </Icon>
                        <Icon>
                            <IoMdMore size={24} color="#666" />
                        </Icon>
                    </Icons>
                </Status>
                {conversations.map((conversation) => (
                    <Item key={conversation.id}>
                        <a href={conversation.url}>
                            <EnvelopeItem>
                                <Avatar src={conversation.avatar}></Avatar>
                            </EnvelopeItem>
                            <EnvelopeTexto>
                                <Title>{conversation.nome}</Title>
                                <Text>{conversation.msg}</Text>
                            </EnvelopeTexto>
                        </a>
                    </Item>
                ))}
            </List>
            <Conversation>
                <IconBig src={Whats} />
                <MensageWhats>Keep your phone connected</MensageWhats>
                <TextWhats>
                    WhatsApp connects to your phone to sync messages. To reduce
                    data usage connect yout phone to Wi Fi.
                </TextWhats>
            </Conversation>
        </ListConversation>
    );
}
export default Historico;
