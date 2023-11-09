import React from 'react'

export default function Card({ img, judul, isi }: { img?: any, judul?: any, isi?: any }) {
    return (
        <div>
            <a href="/Detail">
                <div className=' w-56 h-44 ml-24'>
                    <img src={img} className="h-40 w-44 ml-8 mt-3 translate-y-[50px]" />
                    <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[30px]  w-full h-64'>
                        <h1 className='text-center pt-20 font-bold text-xl'>{judul}</h1>
                        <p className='text-center pt-3 font-italic '>{isi}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
