import Link from 'next/link'
import React from 'react'

import { FaBug } from "react-icons/fa";

function Navbar() {
    const paths = [
        {label: 'Dashboard', href:"/"},
        {label: 'Issues', href:"/issues"}
    ]
  return (
    <nav className='flex space-x-12 border-b px-5 mb-5 h-14 items-center'>
        <Link className='font-semibold text-xl flex items-center gap-2' href='/'> <FaBug /> Tracker</Link>
        <ul className='flex space-x-8'>
            {paths.map(path=><Link key={path.href} className='hover:text-gray-500' href={path.href}>{path.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar