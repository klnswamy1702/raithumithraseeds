'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Raithu Mithra Seeds</div>
            <ul className="flex gap-6">
                {["/", "/about", "/infrastructure", "/contact"].map((href, idx) => (
                    <li key={idx}>
                        <Link
                            href={href}
                            className={`hover:underline ${pathname === href ? 'underline font-semibold' : ''}`}
                        >
                            {href === "/" ? "Home" : href.replace("/", "").charAt(0).toUpperCase() + href.slice(2)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
