"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose,
} from "@/components/ui/sheet";

export default function Header({ siteTitle }: { siteTitle: string }) {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5 shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="#" className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="KopiMu Logo"
                        width={44}
                        height={44}
                        className="rounded-full shadow-sm"
                        priority
                    />
                    <span className="font-serif text-lg sm:text-xl tracking-wide">
                        {siteTitle}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-[15px]">
                    <a href="#about" className="font-semibold hover:opacity-60 transition">
                        About
                    </a>
                    <a href="#menu" className="font-semibold hover:opacity-60 transition">
                        Menu
                    </a>
                    <a href="#promo" className="font-semibold hover:opacity-60 transition">
                        Promo
                    </a>
                    <a href="#gallery" className="font-semibold hover:opacity-60 transition">
                        Gallery
                    </a>
                    <a href="#reviews" className="font-semibold hover:opacity-60 transition">
                        Reviews
                    </a>
                    <a
                        href="#contact"
                        className="px-4 py-2 rounded-lg bg-secondary text-white shadow hover:opacity-90 transition font-bold"
                    >
                        Book a table
                    </a>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-72">
                            <div className="flex flex-col gap-6 mt-8">
                                <SheetClose asChild>
                                    <a href="#about" className="text-lg font-semibold">
                                        About
                                    </a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a href="#menu" className="text-lg font-semibold">
                                        Menu
                                    </a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a href="#promo" className="text-lg font-semibold">
                                        Promo
                                    </a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a href="#gallery" className="text-lg font-semibold">
                                        Gallery
                                    </a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a href="#reviews" className="text-lg font-semibold">
                                        Reviews
                                    </a>
                                </SheetClose>

                                <SheetClose asChild>
                                    <a
                                        href="#contact"
                                        className="mt-4 px-4 py-3 rounded-lg bg-secondary text-white text-center font-bold"
                                    >
                                        Book a table
                                    </a>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
