import React from 'react'

export default function page() {
    return (
        <>
            <div>
                <div className="p-16 pl-[550px]">
                    <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                        <a className="text-italic text-xl text-slate-100" href="register">Confirm</a>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div><p className='text-5xl font-bold p-20 pl-64'>E-Wallet</p>
                        <div className='h-[100px] w-[500px] border-red-900 bg-inherit border-solid border-[3px] mb-[370px] rounded-[15px] translate-x-[90px]'>
                            <img className='w-42 pt-1 h-24' src='assets/Dana-removebg-preview.png' />
                            <p className='-translate-y-[60px] translate-x-[350px] font-bold text-2xl'>RP.52.000</p>

                        </div>
                        <div>
                            <div className='h-[100px] w-[500px] border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[330px] translate-x-[90px]'>
                                <img className='w-42 pt-5 pl-8 h-20' src='assets/ovo-bg.png' />
                                <p className='-translate-y-[50px] translate-x-[350px] font-bold text-2xl'>RP.52.000</p>
                            </div>
                        </div>
                        <div>
                            <div className='h-[100px] w-[500px] border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[290px] translate-x-[90px]'>
                                <img className='w-42 pt-1 pl-4 h-24' src='assets/gopay-bg.png' />
                                <p className='-translate-y-[60px] translate-x-[350px] font-bold text-2xl'>RP.52.000</p>
                            </div>
                        </div>
                        <div>
                            <div className='h-[100px] w-[500px] border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[250px] translate-x-[90px]'>
                                <img className='w-42 pt-1 h-24 pl-9' src='assets/qris-bg.png' />
                                <p className='-translate-y-[60px] translate-x-[350px] font-bold text-2xl'>RP.52.000</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className='font-bold text-5xl p-20 pl-72'>Bank</p>
                            <div className='h-[100px] w-[500px] border-red-900 bg-inherit border-solid border-[3px] mb-[370px] rounded-[15px] translate-x-[90px]'>
                                <img className='w-48 pt-4 h-20 pl-5' src='assets/bca-bg.png' />
                                <p className='-translate-y-[60px] translate-x-[350px] font-bold text-2xl pt-3'>RP.52.000</p>
                            </div>
                            <div>
                            </div>
                            <div className='h-[100px] w-[500px] border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[330px] translate-x-[90px]'>
                                <img className='w-48 pt-4 h-20 pl-8' src='assets/bri-bg.png' />
                                <p className='-translate-y-[60px] translate-x-[350px] font-bold text-2xl pt-3'>RP.52.000</p>
                            </div>
                            <div className='h-[100px] w-[500px] border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[290px] translate-x-[90px]'>
                                <img className='w-52 h-24 pl-9 pb-3' src='assets/mandiri-bg.png' />
                                <p className='-translate-y-[60px] translate-x-[350px] font-bold text-2xl'>RP.52.000</p>
                            </div>
                            <div className='h-[100px] w-[500px] border-red-900 bg-inherit border-solid border-[3px] rounded-[15px] -translate-y-[260px] translate-x-[90px]'>
                                <img className='w-42 pt-1 h-24 pl-5' src='assets/cimbniaga-bg.png' />
                                <p className='-translate-y-[60px] translate-x-[350px] font-bold text-2xl'>RP.52.000</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
