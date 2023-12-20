import { QuerySnapshot, collection, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../lib/firebase/page';




function Card() {
    const [makanan, setMakanan] = useState<any[]>([]);
    const makananCollectionRef = collection(db, "makanan");

    useEffect(() => {
        const getmakanan = async () => {
            try {
                const data: QuerySnapshot = await getDocs(makananCollectionRef);
                setMakanan(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("error", error
                );
            }
        };
        getmakanan()
    }, [])


    return (
        <div className='grid grid-cols-4 gap-3'>
            {makanan.map((makan) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div>{""}
                        <div className='' ref={makanan.Link} >



                            <div className=' md:w-56 ms:w-44 w-32 md:h-44 ms:h-32 h-24 ml-24 gap-[200px] translate-y-[80px]'>
                                <img src={makan.gambar} className="md:h-40 ms:h-32 h-24 md:w-44 ms:w-32 w-24  md:ml-8 ms:ml-6 ml-4 md:mt-3 ms:mt-2 mt-1 md:translate-y-[50px] ms:translate-y-[30px] translate-y-[25px]" />
                                <div className='bg-inherit border-solid border-[3px] border-red-900 rounded-[30px] md:w-full ms:w-80 w-76 md:h-64 ms:h-54 h-48'>
                                    <h1 className='text-center pt-20 font-bold md:text-xl ms:text-l text-m'>{makan.nama}</h1>
                                    <p className='text-center pt-3 font-italic '>{makan.keterangan}</p>
                                </div>
                            </div>

                        </div>


                    </div>
                )
            }
            )
            }
        </div>
    )


}



export default Card;
