import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="w-full my-20">
        <div className='grid grid-cols-1 text-center md:grid-cols-3 gap-5 px-6'>
          <div className="item my-8 pb-2 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Link href="/Shirts">
              <Image src="https://raw.githubusercontent.com/RanaRabees/Static_Images/main/Shirts.jpg"
                width={600}
                height={800}
                alt="RanaRabees"
                className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
              />
              <h3 className="font-extrabold text-xl tracking-widest pt-2">Shirts</h3>
              {/* <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest pt-2">Lorem Data</h3> */}
            </Link>
          </div>

          <div className="item my-8 pb-2 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Link href="/Shoes">
              <Image src="https://raw.githubusercontent.com/RanaRabees/Static_Images/main/Shoes.jpg"
                width={600}
                height={800}
                alt="RanaRabees"
                className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
              />
              <h3 className="font-extrabold text-xl tracking-widest pt-2">Shoes</h3>
              {/* <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest pt-2">Lorem Data</h3> */}
            </Link>
          </div>

          <div className="item my-8 pb-2 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Link href="/Pants">
              <Image src="https://raw.githubusercontent.com/RanaRabees/Static_Images/main/Pants.jpg"
                width={600}
                height={800}
                alt="RanaRabees"
                className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
              />
              <h3 className="font-extrabold text-xl tracking-widest pt-2">Pants</h3>
              {/* <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest mb-2">Lorem Data</h3>
              <h3 className="font-extrabold text-xl tracking-widest pt-2">Lorem Data</h3> */}
            </Link>
          </div>
        </div >
      </div>
    </>
  )
}