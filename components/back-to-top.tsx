"use client";

import { useEffect, useState } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop({
    threshold = 300, // show after px scrolled
    bottom = 24,     // distance from bottom in px
    right = 24,      // distance from right in px
}: {
    threshold?: number;
    bottom?: number;
    right?: number;
}) {
    const [visible, setVisible] = useState(false);
    const reduce = useReducedMotion();

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > threshold);
        };

        // initial check
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    const goTop = () => {
        // smooth scroll (browser handles it); fallback for reduced-motion users we use instant
        if (reduce) {
            window.scrollTo(0, 0);
            // move focus to top landmark for screen readers
            const topEl = document.querySelector("header, main, [role='banner'], [role='main']");
            (topEl as HTMLElement | null)?.focus?.();
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
        // optional: return focus to top element for assistive tech after a short delay
        setTimeout(() => {
            const topEl = document.querySelector("header, main, [role='banner'], [role='main']");
            (topEl as HTMLElement | null)?.focus?.();
        }, 500);
    };

    // small animation variants (fade + pop)
    const variants = {
        hidden: { opacity: 0, y: 8, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="back-to-top"
                    initial={reduce ? undefined : "hidden"}
                    animate={reduce ? undefined : "visible"}
                    exit={reduce ? undefined : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.22 }}
                    onClick={goTop}
                    aria-label="Back to top"
                    title="Back to top"
                    // styling: adjust to fit theme (uses tailwind)
                    className="fixed z-50 inline-flex items-center justify-center p-3 rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary bg-accent text-primary-foreground hover:opacity-95"
                    style={{ bottom: `${bottom}px`, right: `${right}px` }}
                >
                    <ArrowUp className="w-4 h-4" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
