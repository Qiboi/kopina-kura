import Link from 'next/link'
import Image from 'next/image'

export default function Header({ siteTitle }: { siteTitle: string }) {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 border-b border-black/5 shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="#" className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="alt"
                        width={48}
                        height={48}
                        className="rounded-full shadow-sm"
                    />
                    <span className="font-serif text-xl tracking-wide">{siteTitle}</span>
                </Link>

                {/* Navbar Links */}
                <div className="hidden md:flex items-center gap-8 text-[15px]">
                    <a href="#about" className="transition-opacity hover:opacity-60 font-semibold">About</a>
                    <a href="#menu" className="transition-opacity hover:opacity-60 font-semibold">Menu</a>
                    <a href="#news" className="transition-opacity hover:opacity-60 font-semibold">News</a>
                    <a href="#gallery" className="transition-opacity hover:opacity-60 font-semibold">Gallery</a>
                    <a href="#reviews" className="transition-opacity hover:opacity-60 font-semibold">Reviews</a>
                    <a href="#contact" className="px-4 py-2 rounded-lg bg-secondary text-white shadow hover:opacity-90 transition font-bold">
                        Book a table
                    </a>
                </div>
            </nav>
        </header>
    )
}
