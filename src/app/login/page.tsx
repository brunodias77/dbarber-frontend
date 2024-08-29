"use client";
import Input from '@/components/ui/input';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }
        // Aqui você pode adicionar a lógica de autenticação
        toast.success('Login realizado com sucesso!');
    };

    return (
        <div>
            <span>Login Page</span>
            <button onClick={handleSubmit}>Clique para notificacoes</button>
            <Input />
            <Toaster />
        </div>
    );
};


export default Login;