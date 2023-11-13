import React from 'react'
import Card from '../komponen/cards'
import DefaultCarousel from '../komponen/carousel'

const page = () => {
    return (
        <div>
            <div className="h-[400px] w-full">
                <DefaultCarousel />
            </div>
            <div>
                <h1 className="p-20 pb-0 font-bold text-5xl">
                    Snacks
                </h1>
            </div>
            <div className="grid grid-cols-4">
                <Card img={"assets//pancake-bg.png"} judul={"Pancake"} isi={"Espresso + Susu segar"} />
                <Card img={"assets//kentang-bg.png"} judul={"French fries"} isi={"Espresso + Susu segar + caramel"} />
                <Card img={"assets//pancake-bg.png"} judul={"Pancake"} isi={"Espresso + Susu segar"} />
                <Card img={"assets//kentang-bg.png"} judul={"French fries"} isi={"Espresso + Susu segar + caramel"} />
            </div>
            <div className="grid grid-cols-4 mb-[370px] mt-60">
                <Card img={"assets//pancake-bg.png"} judul={"Pancake"} isi={"Espresso + Susu segar"} />
                <Card img={"assets//kentang-bg.png"} judul={"French fries"} isi={"Espresso + Susu segar + caramel"} />
                <Card img={"assets//pancake-bg.png"} judul={"Pancake"} isi={"Espresso + Susu segar"} />
                <Card img={"assets//kentang-bg.png"} judul={"French fries"} isi={"Espresso + Susu segar + caramel"} />
            </div>
        </div>
    )
}

export default page
