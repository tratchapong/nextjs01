'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    {href : '/content', text : 'Contents'},
    {href : '/posts', text : 'Posts'}
]

export default function Navbar() {
    const pathname = usePathname()
    const isActive = (href) => pathname === href ? 'btn bg-blue-300' : 'btn'
  return (
    <nav className="flex gap-2">
        { navItems.map( el => (
            <Link key={el.href} href={el.href} className={isActive(el.href)}>{el.text}</Link>
        ))}

        {/* <Link href='/content' className="btn bg-blue-300">Contents</Link>
        <Link href='/posts' className="btn">Posts</Link> */}
    </nav>
  )
}
