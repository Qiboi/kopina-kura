/* components/promo-section.tsx */
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NewsItem = {
    id: string;
    type: "promo" | "event" | "news" | string;
    title: string;
    date: string; // ISO string
    excerpt: string;
    image?: string;
    location?: string;
    cta?: { label: string; href: string };
};

export default function PromoSection({ items }: { items: NewsItem[] }) {
    const reduce = useReducedMotion();
    const viewportProps = reduce ? undefined : { viewport: { once: true, amount: 0.2 } };

    return (
        <section id="news" className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <span className="inline-block bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                        News & Events
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold">Promo, Events & Stories</h2>
                    <p className="mt-2 text-muted max-w-2xl mx-auto">
                        Keep up with Kopina Kura — promos, live music, new beans, and behind-the-scenes stories.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {items.map((it, idx) => (
                        <motion.article
                            key={it.id}
                            initial={reduce ? undefined : { opacity: 0, y: 10 }}
                            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                            transition={{ delay: reduce ? 0 : idx * 0.06, duration: 0.45 }}
                            {...(viewportProps ?? {})}
                        >
                            <Card className="overflow-hidden rounded-2xl pt-0">
                                {it.image ? (
                                    <div className="relative h-44 w-full">
                                        <Image src={it.image} alt={it.title} fill className="object-cover" />
                                    </div>
                                ) : null}
                                <CardContent>
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <div className="text-xs font-semibold uppercase text-muted">{it.type}</div>
                                            <h3 className="mt-2 text-lg font-semibold">{it.title}</h3>
                                            <p className="mt-2 text-sm text-muted">{it.excerpt}</p>
                                            <div className="mt-4 flex items-center justify-between gap-3">
                                                <div className="text-xs text-muted">{new Date(it.date).toLocaleDateString()}</div>
                                                {it.cta ? (
                                                    <Link href={it.cta.href} className="ml-auto">
                                                        <Button size="sm">{it.cta.label}</Button>
                                                    </Link>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.article>
                    ))}
                </div>

                {/* CTA to all posts */}
                <div className="mt-8 flex justify-center">
                    <Link href="/news" className="inline-flex items-center">
                        <Button size="lg" className="bg-muted text-white px-6 py-3">View all posts</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
