import Image from "next/image"
import Link from "next/link"
import {
    Facebook,
    Instagram,
    Phone,
    Mail,
    MapPin,
    Clock,
} from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#1E3A34] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Image
                            src="/images/logo.png"
                            alt="Kopina Kura"
                            width={64}
                            height={64}
                            className="object-contain"
                            priority
                        />
                        <h2 className="text-3xl font-semibold tracking-wide">Kopina Kura</h2>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-200 max-w-xs">
                        A warm, aesthetic space for coffee, work, and rooftop sunsets.
                        Come for the coffee, stay for the vibe.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-6">
                        <Link
                            href="#"
                            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                        >
                            <Instagram size={18} />
                        </Link>

                        <Link
                            href="#"
                            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                        >
                            <Facebook size={18} />
                        </Link>

                        <Link
                            href="#"
                            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                        >
                            <Phone size={18} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        <li><Link href="#" className="hover:text-white">Home</Link></li>
                        <li><Link href="#" className="hover:text-white">About</Link></li>
                        <li><Link href="#" className="hover:text-white">Menu</Link></li>
                        <li><Link href="#" className="hover:text-white">Gallery</Link></li>
                        <li><Link href="#" className="hover:text-white">Reviews</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>

                    <ul className="space-y-3 text-gray-200 text-sm">
                        <li className="flex items-center gap-2">
                            <MapPin size={18} /> Bandung, West Java — Indonesia
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={18} /> hello@kopinakura.com
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock size={18} /> Mon–Sun: 08:00 – 22:00
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300">
                <p>© {new Date().getFullYear()} Kopina Kura. All rights reserved.</p>
                <p className="mt-1">Crafted with ❤️ in Bandung</p>
            </div>
        </footer>
    )
}
