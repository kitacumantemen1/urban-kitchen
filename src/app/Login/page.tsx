import React from 'react'

export default function page() {
    return (
        <div>
            <div className='p-24 grid grid-cols-2'>
                <div className=' h-[800px] w-[650px] border-solid border-[3px] border-red-900 mb-[370px] rounded-[27px]'>
                    <p className='text-center font-bold text-5xl p-20'>Login</p>
                    <div className='pl-10'>
                        <p className='font-bold text-lg pb-8'>Nomor Handphone:</p>
                        <div className=''>
                            <input type="text" placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' />

                            <p className='font-bold text-lg pb-8 pt-8'>Password:</p>
                            <div className=''>
                                <input type="text" placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' />
                            </div>
                            <p className='font-bold text-end pt-10 pr-20 '>Lupa Kata Sandi?</p>
                        </div>
                        <div className="pt-[40px] pl-40">
                            <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                                <a className="text-italic text-xl text-slate-100" href="">Login</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 pl-[200px]">
                        <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                            <a className="text-italic text-xl text-slate-100" href="register">Register</a>
                        </div>
                    </div>
                </div>
                <img src="assets//logo.png" className='translate-x-[150px] pt-56' />
            </div>
        </div>
    )
}
