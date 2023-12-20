'use client'



import Card from "./komponen/cards";
import DefaultCarousel from "./komponen/carousel";

export default function Home() {
  return (
    <div>
      <div className="h-[400px] w-screen">
        <DefaultCarousel />
      </div>
      <div>
        <h1 className="md:p-20 ms:p-10 p-5 pb-0 font-bold md:text-5xl ms:text-4xl text-2xl">
          Urban Foods
        </h1>
      </div>
      <div className="md:grid grid-cols-4 sm:grid grid-cols-2 pr-20">
        <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />

      </div>
      <div className="flex justify-center items-center mt-[400px]">
        <div className="bg-red-900 h-19 md:w-56 ms:w-48 w-44 rounded-lg text-center ">
          <a className="text-italic md:text-3xl ms:text-2xl text-xl text-slate-100" href="/menumakan"> See All Foods</a>
        </div>
      </div>
      <div>
        <h1 className="md:p-20 ms:p-10 p-10 pb-0 font-bold md:text-5xl ms:text-4xl text-2xl">
          Urban Drinks
        </h1>
      </div>
      <div className="grid grid-cols-4 mb-[370px] pr-20">
        <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
        <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
        <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
        <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
      </div>
      <div className="flex justify-center items-center mt-[80px] mb-[80px]">
        <div className="bg-red-900 h-19 md:w-56 sm:w-48 w-44 rounded-lg text-center ">
          <a className="text-italic md:text-3xl sm:text-2xl text-xl text-slate-100" href="/menuminum"> See All Drinks</a>
        </div>
      </div>
      <div>
        <h1 className="mb:p-20 sm:p-10 p-10 pb-0 font-bold md:text-5xl sm:text-4xl text-2xl">
          Urban Snacks
        </h1>
      </div>
      <div className="md:grid grid-cols-4 sm: grid grid-cols-2 mb-[370px] pr-20">
        <Card img={"assets//pancake-bg.png"} judul={"Pancake"} isi={"Espresso + Susu segar"} />
        <Card img={"assets//kentang-bg.png"} judul={"French fries"} isi={"Espresso + Susu segar + caramel"} />
        <Card img={"assets//pancake-bg.png"} judul={"Pancake"} isi={"Espresso + Susu segar"} />
        <Card img={"assets//kentang-bg.png"} judul={"French fries"} isi={"Espresso + Susu segar + caramel"} />
      </div>
      <div className="flex justify-center items-center mt-[80px] mb-[80px]">
        <div className="bg-red-900 h-19 md:w-56 sm:w-48 w-44 rounded-lg text-center ">
          <a className="text-italic md:text-3xl sm:text-2xl text-xl text-slate-100" href="/menuSnacks"> See All Snacks</a>
        </div>
      </div>

    </div>

  );
}
