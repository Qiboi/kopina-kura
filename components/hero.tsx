/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wifi, Sun, Clock, Coffee, BookOpen, Star } from "lucide-react";

export default function Hero({ content }: any) {
    console.log(content)
    return (
        <section className="relative w-full">
            <div
                className=" h-[75vh] md:h-[93vh] bg-[url('/images/hero-image.jpg')] bg-cover bg-center flex items-center justify-center relative"
                role="img"
                aria-label="Kopina Kura hero image"
            >
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)]" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white"
                >
                    {/* ⭐ Rating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex space-x-2 items-center bg-muted/70 px-4 py-1.5 rounded-full text-sm font-medium shadow-lg"
                    >
                        <Star size={16} /> <span>Rated 4.9/5 from 1,106+ reviews</span>
                    </motion.div>

                    {/* Heading */}
                    <h1 className="mt-6 text-4xl md:text-6xl font-serif font-bold leading-tight">
                        Your Cozy Café Retreat in{" "}
                        <span className="text-terracotta">Bandung</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-base md:text-lg">
                        A warm, aesthetic space for coffee, work, and rooftop sunsets.
                        <br />
                        Come for the coffee, stay for the vibe.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground px-6 py-5 rounded-lg text-base shadow-md hover:opacity-90"
                        >
                            <Coffee size={16} /> Book a Table
                        </Button>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-muted px-6 py-5 rounded-lg text-base hover:opacity-90"
                        >
                            <BookOpen size={16} /> See Menu
                        </Button>
                    </div>

                    {/* Feature icons */}
                    <div className="mt-8 flex justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock size={16} /> Open Daily 08:00 – 22:00
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi size={16} /> Free High-Speed WiFi
                        </div>
                        <div className="flex items-center gap-2">
                            <Sun size={16} /> Rooftop Seating
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute -bottom-50 left-1/2 -translate-x-1/2 text-sm"
                    >
                        <div className="flex flex-col items-center gap-1">
                            <span>Scroll to explore</span>
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ repeat: Infinity, duration: 1.4 }}
                            >
                                ⌄
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
