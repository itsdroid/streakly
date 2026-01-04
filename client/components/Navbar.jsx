"use client";
import Image from "next/image";

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
                    <ul className="flex flex-col gap-10 justify-center">
                        <li href='/'> Home </li>
                        <li> Home </li>
                        <li> Home </li>
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
