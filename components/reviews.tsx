"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface Review {
    author: string;
    text: string;
    date?: string;
    tags?: string[];
}

export default function ReviewsCarousel({
    reviews,
    rating,
}: {
    reviews: Review[];
    rating: { rating: string | number; ratingCount: string | number };
}) {
    const [current, setCurrent] = useState(0);
    const length = reviews?.length ?? 0;
    const reduce = useReducedMotion();
    const intervalRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const next = useCallback(() => setCurrent((cur) => (cur + 1) % Math.max(1, length)), [length]);
    const prev = useCallback(
        () => setCurrent((cur) => (cur - 1 + Math.max(1, length)) % Math.max(1, length)),
        [length]
    );

    // Autoplay
    useEffect(() => {
        if (reduce || length <= 1) return;
        intervalRef.current = window.setInterval(() => {
            setCurrent((cur) => (cur + 1) % length);
        }, 5000);
        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [length, reduce]);

    // Pause on hover for desktop
    useEffect(() => {
        if (!containerRef.current || reduce || length <= 1) return;
        const el = containerRef.current;
        const onEnter = () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
        const onLeave = () => {
            if (intervalRef.current) return;
            intervalRef.current = window.setInterval(() => {
                setCurrent((cur) => (cur + 1) % length);
            }, 5000);
        };
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        return () => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, [length, reduce]);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [next, prev]);

    if (!reviews || length === 0) return null;

    // viewport props to trigger animations when element scrolls into view
    const viewportProps = reduce ? undefined : { viewport: { once: true, amount: 0.3 } };

    return (
        <section className="py-12">
            <div className="text-center mb-2">
                <span className="inline-block bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                    Reviews
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-bold">What our guests say</h2>
            </div>

            <div className="mx-auto px-6">
                {/* Rating block (will animate on scroll into view) */}
                <div className="flex items-center justify-center mb-6 relative">
                    <motion.div
                        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
                        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                        transition={{ delay: 0.12, duration: reduce ? 0 : 0.45 }}
                        {...(viewportProps ?? {})}
                        className="flex items-center gap-2"
                        role="region"
                        aria-label="Average rating"
                    >
                        <div className="text-5xl font-bold">{rating.rating ?? "4.9"}</div>

                        {/* star row */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center mt-1" aria-hidden>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <path
                                            d="M12 17.3 7.053 19.9l.9-5.25L3.6 11.55l5.3-.77L12 6l2.1 4.78 5.3.77-4.35 3.07.9 5.25L12 17.3z"
                                            fill="#F7A36A"
                                        />
                                    </svg>
                                ))}
                            </div>

                            <div className="mt-2 text-xs opacity-90 font-semibold">
                                Based on {rating.ratingCount}+ Reviews
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={containerRef}
                    className="relative overflow-hidden group"
                    aria-roledescription="carousel"
                    aria-label="Customer testimonials carousel"
                >
                    {/* Fade-in for slides wrapper when in view */}
                    <motion.div
                        initial={reduce ? undefined : { opacity: 0, y: 8 }}
                        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: reduce ? 0 : 0.5 }}
                        {...(viewportProps ?? {})}
                    >
                        {/* Slides wrapper -> horizontal flex, translateX to change slide */}
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {reviews.map((r, i) => (
                                <div key={i} className="min-w-full px-4">
                                    <div className="bg-white/60 p-6 rounded-xl shadow-lg">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-border rounded-full flex items-center justify-center text-primary font-semibold">
                                                {r.author
                                                    .split(" ")
                                                    .map((w) => w[0])
                                                    .slice(0, 2)
                                                    .join("")}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground">{r.author}</div>
                                                {r.date && <div className="text-xs text-muted">{r.date}</div>}
                                            </div>
                                        </div>

                                        <blockquote className="mt-4 italic text-foreground/90">{r.text}</blockquote>

                                        <div className="mt-4 flex items-center gap-2">
                                            {[...Array(5)].map((_, si) => (
                                                <Star key={si} size={14} className="text-accent" />
                                            ))}
                                            <span className="text-xs text-muted ml-2">{rating.ratingCount} reviews</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Left/Right subtle overlay fades (optional, helpful for visual) */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-[#e8efe8] to-transparent md:block hidden" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-[#e8efe8] to-transparent md:block hidden" />
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                    {/* Prev button */}
                    <button
                        onClick={prev}
                        aria-label="Previous review"
                        className="p-2 rounded-md bg-white/60 text-foreground shadow hover:bg-border transition"
                        title="Previous"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to review ${i + 1}`}
                                className={`w-2 h-2 rounded-full ${i === current ? "bg-primary" : "bg-border"}`}
                            />
                        ))}
                    </div>

                    {/* Next button */}
                    <button
                        onClick={next}
                        aria-label="Next review"
                        className="p-2 rounded-md bg-white/60 text-foreground shadow hover:bg-border transition"
                        title="Next"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
