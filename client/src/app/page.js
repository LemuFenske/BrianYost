import Image from 'next/image'
import imageUrl from './homebrian.jpeg'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="relative h-screen w-full bg-gray-600 flex justify-center items-center">
      <link rel="icon" href="/favicon.ico" sizes="any" />
    <Image
      src={imageUrl}
      className="object-cover h-full w-full fixed z-0"
      alt="asd"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>
    <div className=" z-20 absolute text-white text-3xl font-bold flex flex-col justify-center items-center">
      <h1 className='text-6xl text-gray-400 sm:mt-8 italic font-black ml-3 mr-3'>MEJORO TU SALUD Y TU FÍSICO</h1>
      <h2 className='mb-4 mx-3 my-4'>Alcanzá tu mejor versión</h2>
      <button className="bg-black hover:bg-black hover:text-gray-400 px-4  py-2 rounded-lg font-semibold mx-auto">
        <Link href='/plans'>¡Empezá hoy!</Link>
      </button>
    </div>
    
  </div>
  )
}
