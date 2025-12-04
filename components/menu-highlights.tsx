/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function MenuHighlights({ items }: any) {
    const reduce = useReducedMotion();

    return (
        <section aria-labelledby="menu-highlights" className="py-12">
            <div className="text-center mb-8">
                <span className="inline-block bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                    Our Menu
                </span>
                <h2 id="menu-highlights" className="mt-4 text-3xl md:text-4xl font-serif font-bold">
                    Signature Drinks & Delights
                </h2>
                <p className="mt-3 text-muted max-w-xl mx-auto">
                    From specialty coffee to refreshing signature beverages, every drink is crafted with care.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {items.map((it: any, idx: number) => (
                        <motion.article
                            key={it.title + idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: reduce ? 0 : 0.05 * idx, duration: 0.5 }}
                            whileHover={reduce ? {} : { translateY: -6, boxShadow: "0 8px 30px rgba(16,24,40,0.12)" }}
                            className="rounded-2xl overflow-hidden bg-transparent"
                            aria-labelledby={`dish-${idx}`}
                        >
                            <div className="relative">
                                {/* image */}
                                <div className="overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={it.image}
                                        alt={it.title}
                                        width={1200}
                                        height={800}
                                        className="w-full h-48 md:h-56 object-cover block"
                                        priority={idx < 1} /* preload first image */
                                    />
                                </div>

                                {/* Badge (top-right) */}
                                {it.tag && (
                                    <div className="absolute top-3 right-3">
                                        <span className="inline-flex items-center bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                                            {it.tag}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* content area (pale mint) */}
                            <div className="bg-[#eaf6ef] p-6 rounded-b-2xl">
                                <h3 id={`dish-${idx}`} className="text-lg font-bold">
                                    {it.title}
                                </h3>
                                <p className="text-sm mt-2 text-muted max-w-[34ch]">{it.description}</p>

                                <div className="mt-4 flex items-center justify-between gap-4">
                                    <div className="text-accent font-bold">{it.price}</div>
                                    <Button
                                        size="sm"
                                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-sm hover:opacity-95"
                                        aria-label={`Order ${it.title}`}
                                        onClick={() => {
                                            // default behaviour: open order link if provided, otherwise scroll to contact
                                            if (it.orderLink) {
                                                window.open(it.orderLink, "_blank");
                                            } else {
                                                const el = document.querySelector("#contact");
                                                el?.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        Order Now
                                    </Button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View Full Menu CTA */}
                <div className="mt-12 flex justify-center">
                    <Button
                        size="lg"
                        className="bg-muted text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer"
                        onClick={() => { console.log("Menu") }}
                        aria-label="View full menu"
                    >
                        <span className="mr-2"> <BookOpen /> </span> View Full Menu
                    </Button>
                </div>
            </div>
        </section>
    );
}
