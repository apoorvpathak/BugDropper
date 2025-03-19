'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames';

import { FaBug } from "react-icons/fa";

function Navbar() {
    const currentPath = usePathname()
    const paths = [
        {label: 'Dashboard', href:"/dashboard"},
        {label: 'Issues', href:"/issues"}
    ]
  return (
    <nav className='flex space-x-12 border-b px-5 mb-5 h-14 items-center'>
        <Link className='font-semibold text-xl flex items-center gap-2' href='/'> <FaBug /> Tracker</Link>
        <ul className='flex space-x-8'>
            {paths.map(path => (
                <Link 
                    key={path.href} 
                    className={classnames({
                        'text-zinc-900': path.href === currentPath,
                        'text-zinc-500': path.href !== currentPath,
                        'hover:text-zinc-800 transition-colors': true
                    })}
                    href={path.href}
                >
                    {path.label}
                </Link>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar