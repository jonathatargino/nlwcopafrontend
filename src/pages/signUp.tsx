import Image from 'next/image'
import logoImage from '../assets/logo.svg'

export default function signUp(){
  return (
    <div className="absolute right-0 text-white h-full w-[400px] flex flex-col items-center px-10 py-12 bg-gray-800">
      <Image src={logoImage} alt="NLW Copa" className="mb-20"/>
      <button
        className="bg-red-500 px-6 py-4 rounded mb-4 uppercase"
      >
        Entrar com Google
      </button>
      <p>
        Nenhuma informação além de seu nome e email serão usadas.
      </p>
    </div>
  )
}