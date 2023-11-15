'use client';
export default function FooterSitemapLinks() {
    return (
        <div className="md:h-72 sm:h-56 h-44 md:w-screen sm:w-56 w-auto bg-slate-300">
            <div className="grid grid-cols-4">
                <div className="md:h-56 sm:h-48 h-40">
                    <img className="h-full w-15" src="assets//logo.png" />
                </div>
                <div>
                    <p className="text-red-900 font-bold md:text-4xl ms:text-2xl text-m pt-12 -translate-x-[150px]">Urban Kitchen</p>
                    <p className="-translate-x-[150px] pt-3">Urban Kitchen is a Fast Food Restaurant bla bla bla bla bla bla bla bla bla bla bla </p>
                </div>
                <div>
                    <p className="font-bold text-2xl pt-12 -translate-x-[40px]">Contact Us</p>
                    <p className="-translate-x-[40px] w-80">jl.Citra garden, Kalideres, Jakarta Barat 11840</p>
                    <div className=' flex gap-3 py-2 -translate-x-[40px]'>
                        <img src="assets//wa.png" />
                        <p className=' my-auto'>084367283982</p>
                    </div>
                    <div className=' flex gap-3 py-2 -translate-x-[40px]'>
                        <img src="assets//pesan.png" />
                        <p className=' my-auto'>marketing@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-2xl pt-12">Follow Us</p>
                    <p>UrbanKitchenOfficial</p>
                    <div className=' flex gap-3 py-2'>
                        <img src="assets//ig.png" />
                        <p className=' my-auto'>UrbanKitchenOfficial</p>
                    </div>
                    <div className=' flex gap-3 py-2'>
                        <img src="assets//fb.png" />
                        <p className=' my-auto'>UrbanKitchenReal</p>
                    </div>
                </div>
                <div className="border-t border-black w-screen h-1 mt-5 ">
                    <p className="text-center">Copyright © 2023 Urban Kitchen</p>
                </div>
            </div>
        </div>
    )
}


