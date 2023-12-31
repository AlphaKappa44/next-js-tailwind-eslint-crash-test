import Image from 'next/image'
import Link from 'next/link'
import Logo from 'app/components/noun-delete-1394852.svg'

export default function Navbar() {
    return (
        <nav>
            <Image
                src={Logo} 
                alt="logo" 
                width={70}
                quality={100}
                // placeholder='blur'
                />
            <h1>Helpdesk</h1>
            <Link href={"/"}>Dashboard</Link>
            <Link href={"/tickets"}>Tickets</Link>
        </nav>
    )
}
