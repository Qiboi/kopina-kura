'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react'

interface GalleryImage {
    src: string
    alt?: string
    caption?: string
}

export default function Gallery({ images }: { images: GalleryImage[] }) {
    const [idx, setIdx] = useState<number | null>(null)
    const reduce = useReducedMotion()

    const open = (i: number) => setIdx(i)
    const close = () => setIdx(null)

    const showPrev = useCallback(() => {
        setIdx((cur) => {
            if (cur === null) return null
            return (cur - 1 + images.length) % images.length
        })
    }, [images.length])

    const showNext = useCallback(() => {
        setIdx((cur) => {
            if (cur === null) return null
            return (cur + 1) % images.length
        })
    }, [images.length])

    useEffect(() => {
        if (idx === null) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
            if (e.key === 'ArrowLeft') showPrev()
            if (e.key === 'ArrowRight') showNext()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [idx, showPrev, showNext])

    return (
        <section
            aria-labelledby="gallery-title"
            className="py-12 text-primary-foreground px-6"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <span className="inline-block bg-primary-foreground text-accent px-3 py-1 rounded-full text-sm font-bold">
                    Gallery
                </span>

                <h2 id="gallery-title" className="mt-4 text-3xl md:text-4xl font-serif font-bold">
                    Experience the Vibe
                </h2>

                <p className="mt-2 text-sm md:text-base text-primary-foreground/90 max-w-2xl mx-auto">
                    From cozy corners to rooftop views, discover the spaces that make Kopina Kura special
                </p>

                {/* Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => open(i)}
                            className="w-full rounded-lg overflow-hidden block focus:outline-none focus:ring-4 focus:ring-ring"
                            aria-label={`Open gallery image ${i + 1}`}
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={img.src}
                                    alt={img.alt ?? `Gallery ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    priority={i < 3}
                                />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Instagram CTA */}
                <div className="mt-8">
                    <Button
                        size="lg"
                        className="bg-[#E1306C] text-white px-6 py-3 rounded-md inline-flex items-center gap-3"
                        onClick={() => {
                            window.open('https://www.instagram.com/kopinakura', '_blank')
                        }}
                    >
                        <Instagram size={16} />
                        Follow us on Instagram
                    </Button>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {idx !== null && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.18 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        aria-modal="true"
                        role="dialog"
                    >
                        {/* backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: reduce ? 0 : 0.18 }}
                            className="absolute inset-0 bg-black"
                            onClick={close}
                        />

                        {/* content */}
                        <motion.div
                            initial={{ scale: 0.98, y: 10, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.98, y: -10, opacity: 0 }}
                            transition={{ duration: reduce ? 0 : 0.28 }}
                            className="relative z-10 max-w-[92vw] max-h-[92vh] w-full"
                        >
                            <div className="relative rounded-lg overflow-hidden bg-black">
                                <Image
                                    src={images[idx].src}
                                    alt={images[idx].alt ?? `Large gallery ${idx + 1}`}
                                    width={1200}
                                    height={900}
                                    className="object-contain max-h-[80vh] w-full"
                                />

                                {/* caption */}
                                {images[idx].caption && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-2 px-4 text-sm">
                                        {images[idx].caption}
                                    </div>
                                )}

                                {/* close button */}
                                <button
                                    onClick={close}
                                    aria-label="Close gallery"
                                    className="absolute top-3 right-3 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                                >
                                    <X size={18} />
                                </button>

                                {/* prev/next */}
                                <button
                                    onClick={showPrev}
                                    aria-label="Previous image"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={showNext}
                                    aria-label="Next image"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
