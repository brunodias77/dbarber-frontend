import React from 'react';

interface ButtonProps {
    text: string;
    color: string;
}

const Button: React.FC<ButtonProps> = ({ text, color }) => {
    return (
        <button className={`px-4 py-2 ${color} rounded-lg hover:brightness-75 text-[#262626]`}>
            {text}
        </button>
    );
};

export default Button;