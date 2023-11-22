'use client';
import React, { useRef, useState } from 'react';
import { Datepicker } from 'flowbite-react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../lib/firebase/page';
import { db } from '../../../lib/firebase/page';
import { collection, addDoc } from 'firebase/firestore';


async function addDataToFirestore(nama, email, nomor) {
    try {
        const docRef = await addDoc(collection(db, "userweb"), {
            nama: nama,
            email: email,
            nomor: nomor
        });
        return true;
    } catch (error) {
        console.error("error", error)
    }

}

const Signup = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [nomor, setNomor] = useState("");
    const emailRef = useRef<HTMLInputElement>(null);
    const namaRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nomorRef = useRef<HTMLInputElement>(null);


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const added = await addDataToFirestore(nama, email, nomor);
        if (added) {
            setNama("");
            setEmail("");
            setNomor("")

        }

    }

    const signup = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // Handle successful user creation
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // Handle error during user creation
                });
        }
    };

    return (
        <div>
            <div>
                <div className='grid grid-cols-2 p-24'>
                    <div className='h-[1000px] w-[650px] border-solid border-[3px] border-red-900 mb-[370px] rounded-[27px]'>
                        <p className='text-5xl font-bold text-center p-20'>Register</p>
                        <div className='pl-10'>
                            <p className='font-bold text-lg pb-8'>Name:</p>
                            <div className=''>
                                <input type="text" placeholder='Type Here' ref={namaRef} color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />

                                <p className='font-bold text-lg pb-8 pt-8'>Telephone:</p>
                                <div className=''>
                                    <input type="text" placeholder='Type Here' ref={nomorRef} color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />

                                    <p className='font-bold text-lg pb-8 pt-8'>Tanggal Lahir:</p>
                                    <div className=''>
                                        <Datepicker className='w-[500px] border-slate-300 rounded-2xl' language='in-id' />

                                        <p className='font-bold text-lg pb-8 pt-8'>Email:</p>
                                        <div className=''>
                                            <input type='email' placeholder='Type Here' ref={emailRef} color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />
                                            <p className='font-bold text-lg pb-8 pt-8'>Password:</p>
                                            <div className=''>
                                                <input type='password' placeholder='Type Here' ref={passwordRef} color='bg-transparent' className='rounded-2xl w-[500px] border-slate-300 input' />
                                            </div>
                                        </div>
                                        <div className="p-10 pl-[150px]">
                                            <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                                                <button className="text-italic text-xl text-slate-100" onClick={signup}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <img className='pt-64 translate-x-[150px]' src="assets//logo.png" />
                </div>
            </div>
        </div>
    );
};

export default Signup;
