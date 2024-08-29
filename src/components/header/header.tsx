import React from 'react';
import Image from 'next/image';
import LogoImg from "../../../public/assets/logo-dbarber.svg";
import UserIcon from "../../../public/assets/icons/logo-user.svg";
import Button from "../ui/button";
import Link from 'next/link';

const Header = () => {
    const navigations = [
        { title: "sobre", path: "#" },
        { title: "serviços", path: "#servicos" },
        { title: "quem somos", path: "#quemsomos" },
        { title: "contato", path: "#contato" }
    ];

    return (
        <div className='flex items-center justify-between bg-[#070707] py-2 px-7'>
            <Link href="/" className='flex items-center justify-center text-[#fff] gap-3 cursor-pointer'>
                <Image
                    src={LogoImg}
                    alt='Logo'
                    width={60}
                    height={60}
                />
                <span>Dbarber</span>
            </Link>

            {/* Pai que centraliza horizontalmente */}
            <div className='flex-1 justify-center hidden md:flex'>
                <ul className='flex space-x-4'>
                    {navigations.map((item, index) => (
                        <li key={index} className='text-[#fff]'>
                            <a href={item.path}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex items-center gap-5 '>
                <Link href="/login" className='flex items-center cursor-pointer gap-2 text-yellow_300'>
                    <span>Login</span>
                    <Image
                        src={UserIcon}
                        alt='User'
                        width={20}
                        height={20}
                    />
                </Link >

                <Button text="Agendar Horário" color='bg-yellow_300' />
            </div>
        </div>
    );
};

export default Header;
