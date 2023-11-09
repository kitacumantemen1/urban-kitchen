'use client'
import React from 'react'


import Card from '../komponen/cards';
import DefaultCarousel from '../komponen/carousel';


export default function page() {
    return (
        <div>
            <div className="h-[400px] w-full">
                <DefaultCarousel />
            </div>
            <div>
                <h1 className="p-20 pb-0 font-bold text-5xl">
                    Foods
                </h1>
            </div>
            <div className='grid grid-cols-4 '>
                <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />
                <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />
                <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />
                <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />

            </div>
            <div className='grid grid-cols-4 mt-60  mb-[370px]'>
                <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />
                <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />
                <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />
                <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />
            </div>

        </div>
    )
}
