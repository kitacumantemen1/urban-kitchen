'use client';
import React, { useRef, useState } from 'react'
import Iframe from 'react-iframe'
import emailjs from "@emailjs/browser";

const page = () => {
  const form: any = useRef();
  const sendMail = async (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jq3kzs9",
        "template_lat31j2",
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
      <div className='grid grid-cols-2 py-10 gap-2 pl-24 pb-52 pt-20'>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.900795388923!2d107.61613223864283!3d-6.90246616757731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sid!2sid!4v1698980897307!5m2!1sid!2sid"
          width="500px"
          height="320px"
          id=""
          className=""
          display="block"
          position="relative" />
        <form ref={form} onSubmit={(e) => sendMail(e)}>
          <div>
            <p className='font-bold text-lg pb-8'>Insert Your Name:</p>

            <div className=''>

              <input type="text" placeholder='Type Here' name='from_name' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' />
              <p className='font-bold text-lg pb-8 pt-8'>Insert Your Address:</p>
              <div className=''>
                <input type="text" placeholder='Type Here' name='from_address' color='bg-transparent' className='rounded-2xl w-[500px] borde-slate-300 input' />
              </div>
              <div className="pl-24 translate-y-[70px] pt-10">
                <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                  <button type='submit' className="text-italic text-xl text-slate-100">Payment</button>
                </div>
              </div>
              <div className="pl-24 -translate-y-[40px]">
                <div className="bg-red-900 h-10 w-60 rounded-2xl text-center pt-1">
                  <button type='submit' className="text-italic text-xl text-slate-100">Add Other Menu</button>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default page
