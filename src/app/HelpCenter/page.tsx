'use client';
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
const HelpCenter = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [topic, setTopic] = useState("");
    // const [outlet, setOutlet] = useState("");
    // const [message, setMessage] = useState("");
    const form: any = useRef();
    const sendMail = async (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_jq3kzs9",
                "template_vn5o59s",
                form.current,
                "uJVzpHqiRUtgqvAeS"
            )
            .then(
                (result) => {
                    alert("message send");
                },
                (error) => {
                    alert(error);
                }
            );
    };
    return (
        <div>
            <div className='grid grid-cols-2'>
                <h1 className="p-64 pb-20 font-bold text-3xl pl-[100px]">
                    Your satisfaction is always our priority
                </h1>
                <form ref={form} onSubmit={(e) => sendMail(e)}>
                    <div className='pl-10 p-20'>
                        <p className='font-bold text-lg pb-8'>Name:</p>
                        <div className=''>
                            <input type="text" name='from_name' placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' />

                            <p className='font-bold text-lg pb-8 pt-8'>Email:</p>
                            <div className=''>
                                <input type="text" name='from_email' placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' />

                                <p className='font-bold text-lg pb-8 pt-8'>Topic:</p>
                                <div className=''>
                                    <input type="text" name='from_topic' placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' />

                                    <p className='font-bold text-lg pb-8 pt-8'>Outlet:</p>
                                    <div className=''>
                                        <input type="text" name='from_outlet' placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' />

                                        <p className='font-bold text-lg pb-8 pt-8'>message:</p>
                                        <div className='pb-32'>
                                            <input type="text" name='from_message' placeholder='Type Here' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 h-[200px] input' />
                                        </div>
                                    </div>
                                    <div className="-translate-y-[70px] pl-40">
                                        <div className="bg-red-900 h-10 w-44 rounded-2xl text-center pt-1">
                                            <button type='submit' className='text-italic text-xl text-slate-100'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

                <div>
                    <h1 className=" pb-20 font-bold text-xl pl-[100px] w-[600px] -translate-y-[730px]">
                        For further questions, feel free to contact us using the form on the right. We will contact you as soon as possible.
                    </h1>
                </div>
            </div>
        </div>

    )
}

export default HelpCenter

