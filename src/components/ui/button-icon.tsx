import React from 'react';
import { IconType } from 'react-icons';

interface ButtonIconProps {
    text: string;
    color: string;
    Icon?: IconType;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ color, text, Icon }) => {
    return (
        <button className={`flex items-center px-4 py-2 ${color} rounded-lg hover:brightness-75 text-[#262626]`}>
            {Icon && <Icon className="mr-2" />}  {/* Renderiza o ícone se fornecido */}
            {text}
        </button>
    );
};

export default ButtonIcon;