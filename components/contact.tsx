/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import Link from "next/link";

/*
  Contact (responsive improvements)
  - Responsive grid: 1 column on small, 2 columns on lg
  - Left column becomes sticky on large screens
  - iframe/map height responsive
  - Buttons stack on mobile and become inline on larger screens
  - Fixed gradient classname and some accessibility tweaks
*/

export default function Contact({ info }: any) {
    const reduce = useReducedMotion();

    // reservation form state
    const [form, setForm] = useState({
        name: "",
        date: "",
        time: "",
        party: "2",
        phone: "",
        note: "",
    });

    const update = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

    const openWhatsApp = () => {
        if (!info?.whatsapp) return;
        const base = info.whatsapp; // expected full wa.me link or https://wa.me/..
        const text = encodeURIComponent(
            `Halo Kopina Kura! Saya ingin melakukan reservasi.\nNama: ${form.name || "[nama]"}\nTanggal: ${form.date || "[tanggal]"}\nWaktu: ${form.time || "[waktu]"}\nOrang: ${form.party}\nTelepon: ${form.phone || "[telepon]"}\nCatatan: ${form.note || "-"}`
        );
        const url = base.includes("?") ? `${base}&text=${text}` : `${base}?text=${text}`;
        window.open(url, "_blank");
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Reservasi Meja — Kopina Kura");
        const body = encodeURIComponent(
            `Halo Kopina Kura,\n\nSaya ingin melakukan reservasi:\n\nNama: ${form.name}\nTanggal: ${form.date}\nWaktu: ${form.time}\nJumlah orang: ${form.party}\nTelepon: ${form.phone}\nCatatan: ${form.note}\n\nTerima kasih.`
        );
        const mailto = `mailto:${info?.email ?? "hello@kopinakura.example"}?subject=${subject}&body=${body}`;
        window.location.href = mailto;
    };

    // viewport props for on-scroll animations (disabled when reduced motion requested)
    const viewportProps = reduce ? undefined : { viewport: { once: true, amount: 0.25 } };

    return (
        <section id="contact" aria-labelledby="contact-heading" className="py-16">
            {/* Use padding only; page.tsx wraps with a max-w container */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                        Visit Us
                    </span>
                    <h1 id="contact-heading" className="mt-4 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900">
                        Find Your Way to Kopina Kura
                    </h1>
                    <p className="mt-2 text-muted max-w-2xl mx-auto text-sm">
                        Located in the heart of Bandung, we&rsquo;re ready to welcome you daily
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* LEFT: contact cards + CTA */}
                    <motion.div
                        initial={reduce ? undefined : { opacity: 0, y: 8 }}
                        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: reduce ? 0 : 0.45 }}
                        {...(viewportProps ?? {})}
                        className="space-y-6 lg:pr-4"
                    >
                        <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
                            {/* Contact info card (shadcn Card) */}
                            <Card className="bg-[#EEF6F0]">
                                <CardContent>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#154c38] inline-flex items-center justify-center text-white">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-800">Opening Hours</div>
                                            <div className="text-sm text-muted mt-1">{info?.hours ?? "Mon–Sun: 08:00 – 22:00"}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#154c38] inline-flex items-center justify-center text-white">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-800">Contact</div>
                                            <div className="text-sm text-muted mt-1">
                                                <Link href={`mailto:${info?.email ?? "hello@kopinakura.example"}`} className="underline">
                                                    {info?.email ?? "hello@kopinakura.example"}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#154c38] inline-flex items-center justify-center text-white">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-800">Location</div>
                                            <div className="text-sm text-muted mt-1">{info?.address ?? "Bandung, West Java — Indonesia"}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Reserve CTA (shadcn Card, styled) */}
                            <motion.div
                                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                                transition={{ delay: reduce ? 0 : 0.08, duration: reduce ? 0 : 0.45 }}
                                {...(viewportProps ?? {})}
                            >
                                <Card className="overflow-hidden shadow-lg bg-linear-to-r from-[#0f5132] to-[#123f2b] text-white">
                                    <CardContent>
                                        <div className="font-bold text-lg">Reserve Your Table</div>
                                        <div className="text-sm text-white/80 mt-2">Book your spot for the perfect coffee experience</div>
                                        <div className="mt-4">
                                            <Button
                                                onClick={() => (info?.whatsapp ? openWhatsApp() : document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" }))}
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-[#0f5132] font-medium shadow hover:text-white w-full sm:w-auto justify-center"
                                                aria-label="Book via WhatsApp"
                                            >
                                                <PhoneCall />
                                                Book via WhatsApp
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* small social / address card (shadcn Card) */}
                            <Card className="bg-[#EEF6F0]">
                                <CardContent>
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <div className="font-semibold text-slate-800">Follow & Visit</div>
                                            <div className="text-sm text-muted mt-1">{info?.city ?? "Bandung, Indonesia"}</div>
                                        </div>
                                        <button
                                            onClick={() => window.open(info?.instagram || "https://www.instagram.com/kopinakura", "_blank")}
                                            aria-label="Open Instagram"
                                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#E1306C] text-white"
                                        >
                                            <Instagram size={14} /> Instagram
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* RIGHT: map on top, reservation form below */}
                    <motion.div
                        initial={reduce ? undefined : { opacity: 0, y: 8 }}
                        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                        transition={{ delay: reduce ? 0 : 0.06, duration: reduce ? 0 : 0.45 }}
                        {...(viewportProps ?? {})}
                        className="space-y-6"
                    >
                        {/* Map / embed */}
                        <motion.div
                            initial={reduce ? undefined : { opacity: 0, y: 8 }}
                            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                            transition={{ duration: reduce ? 0 : 0.45 }}
                            {...(viewportProps ?? {})}
                            className="rounded-2xl overflow-hidden bg-secondary shadow-lg"
                        >
                            {info?.mapEmbed ? (
                                <iframe
                                    title="map"
                                    src={info.mapEmbed}
                                    className="w-full h-40 sm:h-56 md:h-72 lg:h-80 border-0"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-full h-40 sm:h-56 md:h-72 lg:h-80 flex items-center justify-center bg-[#F0F5EF] text-muted">
                                    <div className="text-center px-4">
                                        <MapPin className="mx-auto mb-2 text-[#154c38]" />
                                        <div className="font-semibold text-slate-800">Bandung, Indonesia</div>
                                        <div className="text-sm text-muted">Address placeholder — update in content.json</div>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Reservation form (uses shadcn Input/Textarea) */}
                        <motion.form
                            id="contact-form"
                            onSubmit={onSubmit}
                            initial={reduce ? undefined : { opacity: 0, y: 10 }}
                            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                            transition={{ delay: reduce ? 0 : 0.04, duration: reduce ? 0 : 0.45 }}
                            {...(viewportProps ?? {})}
                            className="bg-[#EEF6F0] rounded-2xl p-6 shadow-lg"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <label className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-800">Name</span>
                                    <Input
                                        required
                                        value={form.name}
                                        onChange={(e) => update("name", e.target.value)}
                                        className="mt-1 bg-white/60 w-full"
                                        placeholder="Your name"
                                        aria-label="Name"
                                    />
                                </label>

                                <label className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-800">Phone</span>
                                    <Input
                                        required
                                        value={form.phone}
                                        onChange={(e) => update("phone", e.target.value)}
                                        className="mt-1 bg-white/60 w-full"
                                        placeholder="+62 812 3456 7890"
                                        aria-label="Phone"
                                    />
                                </label>

                                <label className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-800">Date</span>
                                    <Input
                                        required
                                        type="date"
                                        value={form.date}
                                        onChange={(e) => update("date", e.target.value)}
                                        className="mt-1 bg-white/60 w-full"
                                        aria-label="Date"
                                    />
                                </label>

                                <label className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-800">Time</span>
                                    <Input
                                        required
                                        type="time"
                                        value={form.time}
                                        onChange={(e) => update("time", e.target.value)}
                                        className="mt-1 bg-white/60 w-full"
                                        aria-label="Time"
                                    />
                                </label>

                                <label className="flex flex-col sm:col-span-2">
                                    <span className="text-sm font-medium text-slate-800">Party size</span>
                                    <Select value={String(form.party)} onValueChange={(value) => update("party", value)}>
                                        <SelectTrigger className="mt-1 w-full bg-white/60" aria-label="Party size">
                                            <SelectValue placeholder="Select party" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                                <SelectItem key={num} value={String(num)}>
                                                    {num}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </label>

                                <label className="flex flex-col sm:col-span-2">
                                    <span className="text-sm font-medium text-slate-800">Notes (optional)</span>
                                    <Textarea
                                        value={form.note}
                                        onChange={(e) => update("note", e.target.value)}
                                        className="mt-1 bg-white/60 w-full"
                                        placeholder="Allergies, requests, etc."
                                        aria-label="Notes"
                                    />
                                </label>
                            </div>

                            <div className="mt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                                <Button
                                    type="submit"
                                    className="bg-[#154c38] text-white px-4 py-2 w-full sm:w-auto justify-center"
                                >
                                    Request Reservation
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openWhatsApp();
                                    }}
                                    className="w-full sm:w-auto justify-center"
                                >
                                    Message on WhatsApp
                                </Button>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
