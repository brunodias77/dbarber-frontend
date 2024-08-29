import React from 'react';
import Button from './button';
import { RiScissors2Fill } from "react-icons/ri";
import ButtonIcon from './button-icon';
const BannerHome = () => {
    return (
        <div className="relative h-screen w-full">
            <div
                className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/assets/banner-home.png')" }}
            >
                <div className=" flex flex-col justify-center items-center mt-[10%] text-[#fff] gap-4">
                    <h3 className="">Tradição e modernidade em um só lugar</h3>
                    <p className='text-justify text-gray_200'>
                        Horário de funcionamento das 08:00 às 19:00
                    </p>
                    <ButtonIcon text="Agende seu horario" color='bg-yellow_300' Icon={RiScissors2Fill}></ButtonIcon>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;