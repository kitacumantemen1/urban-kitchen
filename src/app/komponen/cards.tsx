import React from 'react'

export default function Card({ img, judul, isi }: { img?: any, judul?: any, isi?: any }) {
    return (
        <div>
            <a href="/Detail">
                <div className=' md:w-56 ms:w-44 w-32 md:h-44 ms:h-32 h-24 ml-24'>
                    <img src={img} className="md:h-40 ms:h-32 h-24 md:w-44 ms:w-32 w-24  md:ml-8 ms:ml-6 ml-4 md:mt-3 ms:mt-2 mt-1 md:translate-y-[50px] ms:translate-y-[30px] translate-y-[25px]" />
                    <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[30px] md:w-full ms:w-80 w-76 md:h-64 ms:h-54 h-48'>
                        <h1 className='text-center pt-20 font-bold md:text-xl ms:text-l text-m'>{judul}</h1>
                        <p className='text-center pt-3 font-italic '>{isi}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
