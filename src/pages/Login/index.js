import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PageBody, Input, FormWrapper, Send } from './styles';

export default function Login() {
    const [user, setUser] = useState({ user: '' });

    const handleUser = (e) => {
        setUser({ user: e.target.value });
        console.log(user);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <PageBody>
            <FormWrapper>
                <FaWhatsapp size={200} color="#02af9c" />
                <h1>WhatsLabe</h1>
                <Input
                    type="text"
                    onChange={handleUser}
                    placeholder="Usuário"
                    autocomplete="false"
                />
                <Input type="password" placeholder="Senha" />

                <Send onClick={() => handleSubmit} href="/historico">
                    Login
                </Send>
                <strong>
                    <p>
                        Criado por{' '}
                        <a href="https://github.com/joninter">
                            Jonatan Machado
                        </a>{' '}
                        e{' '}
                        <a href="https://github.com/V-Gutierrez">
                            Victor Gutierrez
                        </a>
                    </p>
                </strong>
            </FormWrapper>
        </PageBody>
    );
}
