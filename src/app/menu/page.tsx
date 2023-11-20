import React from 'react'
import DefaultCarousel from '../komponen/carousel'
import Card from '../komponen/cards'
import Burger from '../komponen/Burger'
import Link from 'next/link'
import Kopi from '../komponen/Kopi'
import Pancake from '../komponen/pancake'

export default function page() {
    return (
        <div>
            <div className='h-[400px] w-full'>
                <DefaultCarousel />
            </div>
            <p className='text-4xl font-bold text-center pt-20'>
                Category Menus
            </p>

            <div className='grid grid-cols-2'>
                <a href="">
                    <div className=' w-64 h-96 ml-64 mt-20 '>
                        <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-64 items-center '>
                            <Burger
                                obj={"./assets/3d/burgerNew.gltf"}

                                harga={"jjo"}



                            />
                            <p className='font-bold text-2xl text-center pt-4'>Foods</p>
                        </div></div>
                </a>

                <a href="menuminum">
                    <div className=' w-64 h-96 ml-40 mt-20 '>
                        <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-64 items-center '>

                            <Kopi
                                obj={"./assets/3d/kopiNew.gltf"}

                                harga={"jjo"}



                            />
                            <p className='font-bold text-2xl text-center pt-4'>Drinks</p>
                        </div></div></a>

            </div>
            <a href="menuSnacks">
                <div className=' w-64 h-96 ml-[550px]  '>
                    <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-64 items-center '>
                        <Pancake
                            obj={"./assets/3d/pancakeNew.gltf"}

                            harga={"jjo"}



                        />
                        <p className='font-bold text-2xl text-center pt-4'>Snacks</p>
                    </div></div>
            </a>






        </div>
    )
}
