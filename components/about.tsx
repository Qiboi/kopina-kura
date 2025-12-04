"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Wifi, Music, Bed } from "lucide-react";

interface FeatureItem {
    title: string;
    copy: string;
    icon?: "pin" | "wifi" | "music" | "bed";
}

interface AboutData {
    short: string;
    features: FeatureItem[];
    image?: string;
    rating?: {
        value: string | number;
        count: string | number;
    };
}

export default function About({ data }: { data: AboutData }) {
    const reduce = useReducedMotion();
    const imageSrc = data.image ?? "/images/interior.jpg";

    const starRow = (
        <div className="flex items-center gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                        d="M12 17.3 7.053 19.9l.9-5.25L3.6 11.55l5.3-.77L12 6l2.1 4.78 5.3.77-4.35 3.07.9 5.25L12 17.3z"
                        fill="#F7A36A"
                    />
                </svg>
            ))}
        </div>
    );

    const iconFor = (key?: string) => {
        const common = "w-5 h-5 text-white";
        switch (key) {
            case "pin":
                return <MapPin className={common} />;
            case "wifi":
                return <Wifi className={common} />;
            case "music":
                return <Music className={common} />;
            case "bed":
                return <Bed className={common} />;
            default:
                return <MapPin className={common} />;
        }
    };

    const viewportProps = reduce ? undefined : { viewport: { once: true, amount: 0.3 } };

    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <motion.div
                            initial={reduce ? undefined : { opacity: 0, y: 16 }}
                            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: reduce ? 0 : 0.6 }}
                            {...viewportProps}
                            className="rounded-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="relative">
                                <Image
                                    src={imageSrc}
                                    alt="Cozy interior of Kopina Kura"
                                    width={1200}
                                    height={800}
                                    className="w-full h-[360px] md:h-[420px] object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={reduce ? undefined : { opacity: 0, scale: 0.92 }}
                            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                            transition={{ delay: 0.12, duration: reduce ? 0 : 0.45 }}
                            {...viewportProps}
                            className="absolute -bottom-8 right-6 bg-primary rounded-xl text-white shadow-xl w-40 p-4 flex flex-col items-center"
                            role="region"
                            aria-label="Average rating"
                        >
                            <div className="text-xl font-bold">{data.rating?.value ?? "4.9"}</div>
                            {starRow}
                            <div className="mt-2 text-xs opacity-90">{data.rating?.count ?? "1,106+ Reviews"}</div>
                        </motion.div>
                    </div>

                    <div>
                        <div className="inline-block">
                            <span className="inline-block bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                                About Kopina Kura
                            </span>
                        </div>

                        <motion.h2
                            initial={reduce ? undefined : { opacity: 0, y: 10 }}
                            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                            transition={{ delay: 0.06, duration: reduce ? 0 : 0.6 }}
                            {...viewportProps}
                            className="mt-6 text-3xl md:text-4xl font-serif font-bold leading-tight"
                        >
                            When Cozy Café Feels Like <span className="block text-accent">Home</span>
                        </motion.h2>

                        <motion.p
                            initial={reduce ? undefined : { opacity: 0 }}
                            whileInView={reduce ? undefined : { opacity: 1 }}
                            transition={{ delay: 0.12, duration: reduce ? 0 : 0.7 }}
                            {...viewportProps}
                            className="mt-6 text-neutral-700 max-w-xl"
                        >
                            {data.short ??
                                "Kopina Kura blends classic charm with modern comfort. Our spacious interiors, rooftop lookout, vinyl music, and menu of comfort food and signature drinks create the perfect atmosphere for work, relaxation, and connection."}
                        </motion.p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.features?.map((f, idx) => (
                                <motion.article
                                    key={f.title}
                                    initial={reduce ? undefined : { opacity: 0, y: 8 }}
                                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                                    transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : idx * 0.06 }}
                                    {...viewportProps}
                                    className="flex gap-3 items-start"
                                >
                                    <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary shadow-sm">
                                        {iconFor(
                                            f.title.toLowerCase().includes("rooftop")
                                                ? "pin"
                                                : f.title.toLowerCase().includes("wfc") || f.title.toLowerCase().includes("wifi")
                                                    ? "wifi"
                                                    : f.title.toLowerCase().includes("vinyl")
                                                        ? "music"
                                                        : "bed"
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{f.title}</h4>
                                        <p className="text-sm text-muted">{f.copy}</p>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
