/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Image from "next/image";

export default function GiveName({ params }: any) {
    let min = 800;
    let max = 400;
    const price = Math.floor(Math.random() * (max - min) + min);
    return (
        <>
            {/* <div className="flex"> */}
            <div className="my-20 inline-flex">
                <div className='grid grid-cols-1 text-center md:grid-cols-2 gap-5 px-6'>
                    <div className="item my-8 aspect-w-1 aspect-h-1 overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <Link href={`https://raw.githubusercontent.com/RanaRabees/Static_Images/main/${params.name}.jpg`}>
                            <Image src={`https://raw.githubusercontent.com/RanaRabees/Static_Images/main/${params.name}.jpg`}
                                width={600}
                                height={800}
                                alt={params.name}
                                className="w-[650px] h-[500px] object-cover object-center group text-center-hover:opacity-75"
                            />
                        </Link>
                        {/* <h3 className="font-extrabold text-xl tracking-widest pt-2">{params.name}</h3> */}
                        {/* <h3 className="font-extrabold text-xl tracking-widest mb-2">{params.price}</h3> */}
                        {/* <h3 className="font-extrabold text-xl tracking-widest mb-2">{params.size}</h3>
                        <h3 className="font-extrabold text-xl tracking-widest mb-2">{params.about}</h3>
                        <h3 className="font-extrabold text-xl tracking-widest mb-5">{params.cautions}</h3> */}
                    </div>
                    <div className="my-20 inline-block w-full">
                        <h3 className="font-extrabold text-5xl tracking-widest">{params.name}</h3>
                        <div className="flex mt-10">
                            <h1 className="text-2xl tracking-widest font-bold mr-10">Details:</h1>
                        </div>
                        <p>Lorem Ipsum
                            &quot;Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...&quot;
                            &quot;There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...&quot;
                        </p>
                        <div className="flex mt-5">
                            <h1 className="text-2xl tracking-widest font-bold mr-10">PKR:</h1>
                        </div>
                        <h1 className="text-2xl tracking-widest font-bold mr-10 text-center">{price}</h1>
                        <div className="flex mt-10">
                            <h1 className="text-2xl tracking-widest font-bold mr-10">Quantity:</h1>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                +
                            </button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                -
                            </button>
                        </div>
                        <div className="mt-10">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                Add to Cart
                            </button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                Buy Now
                            </button>
                        </div>

                    </div>

                </div>
            </div >

            {/* </div> */}
        </>
    );
}


