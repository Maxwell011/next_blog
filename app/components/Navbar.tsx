import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bld text-white grid place-content-center mb-2 md:mb-0'>
          <Link
            href='/'
            className='text-white/90 no-underline hover:text-white'
          >
            Orji Maxwell
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
          <Link className='text-red-600 hover:text-red' href='#'>
            <FaYoutube />
          </Link>
          <Link className='text-white/90 hover:text-white' href='#'>
            <FaLaptop />
          </Link>
          <Link className='text-black/90 hover:text-black' href='#'>
            <FaGithub />
          </Link>
          <Link className='text-blue-700 hover:text-blue' href='#'>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
