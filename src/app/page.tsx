'use client'



import Card from "./komponen/cards";
import DefaultCarousel from "./komponen/carousel";

export default function Home() {
  return (
    <div>
      <div className="h-[400px] w-full">
        <DefaultCarousel />
      </div>
      <div>
        <h1 className="p-20 pb-0 font-bold text-5xl">
          Urban Foods
        </h1>
      </div>
      <div className="grid grid-cols-4">
        <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of Beef and a Layer of Cheese which is very melting"} />
        <Card img={"assets//waffle.png"} judul={"Fruit Waffles"} isi={"3 waffles + Honey + Premium fruit which is definitely fresh fruit"} />
        <Card img={"assets//burger1.png"} judul={"Burger Beef"} isi={"2 layers of beef and a layer of cheese which is very melting"} />
        <Card img={"assets//waffle.png"} judul={"Fruit Waffles"} isi={"3 waffles + Honey + Premium fruit which is definitely fresh fruit"} />
      </div>
      <div className="flex justify-center items-center mt-[400px]">
        <div className="bg-red-900 h-19 w-56 rounded-lg text-center ">
          <a className="text-italic text-3xl text-slate-100" href="/menumakan"> See All Foods</a>
        </div>
      </div>
      <div>
        <h1 className="p-20 pb-0 font-bold text-5xl">
          Urban Drinks
        </h1>
      </div>
      <div className="grid grid-cols-4 mb-[370px]">
        <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
        <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
        <Card img={"assets//coffe1.png"} judul={"Latte"} isi={"Espresso + Susu segar"} />
        <Card img={"assets//es kopi.png"} judul={"Caramel Latte"} isi={"Espresso + Susu segar + caramel"} />
      </div>
      <div className="flex justify-center items-center mt-[80px] mb-[80px]">
        <div className="bg-red-900 h-19 w-56 rounded-lg text-center ">
          <a className="text-italic text-3xl text-slate-100" href="/menuminum"> See All Drinks</a>
        </div>
      </div>

    </div>

  );
}
