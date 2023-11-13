import React from 'react'
import DefaultCarousel from '../komponen/carousel'
import Card from '../komponen/cards'

export default function page() {
    return (
        <div>
            <div className='h-[400px] w-full'>
                <DefaultCarousel />
            </div>
            <p className='text-4xl font-bold text-center pt-20'>
                Category Menus
            </p>
            <a href="/menumakan">
                <div className='grid grid-cols-2'>
                    <div className=' w-64 h-96 ml-64 mt-20 '>
                        <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-64 items-center '>
                            <img src='assets//burger1.png' className="h-40 w-44 ml-10 mt-4 flex items-center" />
                            <p className='font-bold text-2xl text-center pt-4'>Foods</p>
                        </div></div>
                    <a href="menuminum">
                        <div className=' w-64 h-96 ml-40 mt-20 '>
                            <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-64 items-center '>
                                <img src='assets//burger1.png' className="h-40 w-44 ml-10 mt-4 flex items-center" />
                                <p className='font-bold text-2xl text-center pt-4'>Drinks</p>
                            </div></div></a>

                </div>
                <a href="menuSnacks">
                    <div className=' w-64 h-96 ml-[550px]  '>
                        <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[17px]  w-full h-64 items-center '>
                            <img src='assets//burger1.png' className="h-40 w-44 ml-10 mt-4 flex items-center"
                            />
                            <p className='font-bold text-2xl text-center pt-4'>Snacks</p>
                        </div></div>
                </a>


            </a>



        </div>
    )
}
