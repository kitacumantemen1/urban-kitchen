import React from 'react'

export default function page() {
    return (
        <div>
            <div className="p-16 pl-[550px]">
                <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                    <a className="text-italic text-xl text-slate-100" href="/register">Confirm</a>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div><p className='text-5xl font-bold p-20 pl-[280px] mb-64'>E-Wallet</p>
                    <a href="/">
                        <div className='mb-10 h-[150px] w-64 border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[250px]'>
                            <img className='w-50 h-22 pl-2' src='assets/Dana-removebg-preview.png' />
                            <p className=' translate-x-[65px] font-bold text-2xl'>RP.52.000</p>
                        </div></a>

                    <a href="/">  <div className='mb-10 h-[150px] w-64 border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[250px]'>
                        <img className='w-50 pt-7 h-16 pl-14' src='assets/ovo-bg.png' />
                        <p className=' translate-x-[65px] font-bold text-2xl pt-4   '>RP.52.000</p>
                    </div></a>

                    <a href="/"> <div className='mb-10 h-[150px] w-64 border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[250px]'>
                        <img className='w-50 pt-7 h-16 pl-14' src='assets/gopay-bg.png' />
                        <p className=' translate-x-[65px] font-bold text-2xl pt-4   '>RP.52.000</p>
                    </div></a>

                    <a href="/"> <div className=' h-[150px] w-64 border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[250px]'>
                        <img className='w-50 pt-7 h-16 pl-14' src='assets/qris-bg.png' />
                        <p className=' translate-x-[65px] font-bold text-2xl pt-4   '>RP.52.000</p>
                    </div></a>
                </div>

                <div>
                    <div>
                        <p className='font-bold text-5xl p-20 pl-44 mb-64'>Bank</p>
                        <a href="/">
                            <div className='mb-10 h-[150px] w-64 border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[100px]'>
                                <img className='w-50 pt-7 h-16 pl-14' src='assets/bca-bg.png' />
                                <p className=' translate-x-[65px] font-bold text-2xl pt-4   '>RP.52.000</p>
                            </div></a>

                        <a href="/">  <div className='mb-10 h-[150px] w-64 border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[100px]'>
                            <img className='w-50 pt-7 h-16 pl-16' src='assets/bri-bg.png' />
                            <p className=' translate-x-[65px] font-bold text-2xl pt-4'>RP.52.000</p>
                        </div></a>

                        <a href="/">  <div className='mb-10 h-[150px] w-64 border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[100px]'>
                            <img className='w-56 pt-3 h-20 pl-14' src='assets/mandiri-bg.png' />
                            <p className=' translate-x-[65px] font-bold text-2xl pt-2   '>RP.52.000</p>
                        </div></a>

                        <a href="/">
                            <div className=' h-[150px] w-64 border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[100px]'>
                                <img className='w-52 pt-3 h-20 pl-10' src='assets/cimbniaga-bg.png' />
                                <p className=' translate-x-[65px] font-bold text-2xl pt-2   '>RP.52.000</p>
                            </div></a>

                    </div>
                </div>
            </div>

        </div>
    )
}
