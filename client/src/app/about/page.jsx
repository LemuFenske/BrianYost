import style from './about.module.css'
import Image from 'next/image'
import imageUrl from './fondo.jpg'
import brianUrl from './Brian.png'
import brian1 from './brianyost/1.jpeg'
import brian2 from './brianyost/2.jpeg'
import brian3 from './brianyost/3.jpeg'
import brian4 from './brianyost/4.jpeg'

export default function About() {
  return (
<div className="relative min-h-screen mt-0 w-full bg-gray-600 flex justify-center items-center">

  <Image src={imageUrl} className="object-cover top-0 left-0 w-full min-h-screen fixed z-10" alt="asd"/>
  <div className="fixed top-0 left-0 w-full min-h-screen bg-black opacity-50 z-10"></div>

  <div className='relative z-20 w-[100%] py-auto rounded flex flex-col items-center justify-around'>
    <div className='flex flex-wrap mx-auto sm:mt-20'>
      <div className='flex flex-col  items-center justify-center mx-auto sm:pt-0'>
        <h1 className='text-5xl font-black text-gray-400 mt-20 sm:mt-0 font-mono'>Brian Yost</h1>
        <h2 className=' mb-0 mt-4  sm:my-4 ml-3 font-mono'>💪🏽 | Entrenador de Alto Rendimiento</h2>
      </div>
      <Image src={brianUrl} className="mx-auto mt-0 pt-0" alt="asd" width={300} height={0}/>
    </div>
    <div className='z-20 w-full text-black bg-white mt-0 mx-auto flex items-center justify-center px-4'>
      <p className="py-4 mx-auto px-auto ">
        Inspiro, educo y guío a otros para que se conviertan en lo mejor de sí mismos recuperando su vitalidad, <br/>
        resiliencia emocional y mental y sentido de propósito. Cuando entramos en nuestro poder auténtico,  <br/>
        encendemos una luz para que otros hagan lo mismo y elevamos colectivamente la conciencia humana.  <br/>
        Esa es mi agenda secreta.
      </p>
    </div>
  <div className='flex z-20 flex-wrap justify-around w-full'>
  <Image src={brian1} className="sm:w-[25%]" alt="asd" width={0} height={0}/>
  <Image src={brian3} className="sm:w-[25%]" alt="asd" width={0} height={0}/>
  <Image src={brian2} className="sm:w-[25%]" alt="asd" width={0} height={0}/>
  <Image src={brian4} className="sm:w-[25%]" alt="asd" width={0} height={0}/>
  </div>
  </div>
</div>
  )
}