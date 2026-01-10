"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex w-20 bg-red-500">
            <nav className="bg-zinc-500 flex flex-col justify-between items-center w-20 p-5 fixed h-screen">
                <div>
                    <Image
                        src="/images/logo1.png"
                        alt="Logo"
                        height={10}
                        width={40}
                    />
                </div>
                <div>
                    <ul>
                        <li> <Link href="/"> home </Link> </li>
                        <li> <Link href="/about"> about </Link> </li>
                        <li> <Link href="/blog/5"> blog </Link> </li>
                        <li> <Link href="/analytics" className="underline text-blue-700"> analytics </Link> </li>
                    </ul>
                </div>
                <Image
                    src="/images/logo1.png"
                    alt="Logo"
                    height={10}
                    width={40}
                />
            </nav>
        </div>
    );
}
