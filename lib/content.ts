export const content = {
    site: {
        name: "Kopina Kura",
        rating: 4.9,
        ratingCount: 1106,
    },

    hero: {
        heading: "Kopina Kura — Your cozy café in Bandung",
        sub: "A warm, aesthetic space for coffee, work, and rooftop sunsets. Open daily — come for the coffee, stay for the vibe.",
    },

    about: {
        short:
            "Kopina Kura blends classic charm with modern comfort. Spacious interiors, a rooftop lookout, vinyl music, and a menu of comfort food and signature drinks.",
        features: [
            { title: "Rooftop view", copy: "Sunset lookout and fresh air" },
            { title: "WFC-friendly", copy: "Fast Wi-Fi and spacious tables" },
            { title: "Vinyl & music", copy: "Curated record selection" },
            { title: "Cozy rooms", copy: "Quiet corners and small stay options" },
        ],
    },

    menu: [
        {
            title: "Single Origin Espresso",
            description: "Daily rotating premium single-origin beans with balanced flavor",
            price: "Rp 35.000",
            image: "/images/menu-espresso.png",
            tag: "Popular"
        },
        {
            title: "The Turtle",
            description: "Refreshing lychee & cold brew fusion — our signature creation",
            price: "Rp 45.000",
            image: "/images/menu-turtle.png",
            tag: "Signature"
        },
        {
            title: "Kura Coco",
            description: "Coconut & coffee specialty crafted for a creamy tropical finish",
            price: "Rp 40.000",
            image: "/images/menu-coco.png",
            tag: null
        }
    ],

    gallery: [
        {
            src: "/images/galleries/gallery-1.jpg",
            alt: "Gallery 1",
        },
        {
            src: "/images/galleries/gallery-2.jpg",
            alt: "Gallery 2",
        },
        {
            src: "/images/galleries/gallery-3.jpg",
            alt: "Gallery 3",
        },
        {
            src: "/images/galleries/gallery-4.jpg",
            alt: "Gallery 4",
        },
        {
            src: "/images/galleries/gallery-5.jpg",
            alt: "Gallery 5",
        },
        {
            src: "/images/galleries/gallery-6.jpg",
            alt: "Gallery 6",
        },
        {
            src: "/images/galleries/gallery-7.jpg",
            alt: "Gallery 7",
        },
        {
            src: "/images/galleries/gallery-8.jpg",
            alt: "Gallery 8",
        },
        {
            src: "/images/galleries/gallery-9.jpg",
            alt: "Gallery 9",
        },
    ],

    reviews: [
        {
            author: "Harry Pujianto (sugarbombs)",
            text: "Awalnya diajakin ngopi sama temenku disini EHHH LAMA LAMA MALAH JADI TEMPAT WFC KU… tempatnya luasss bgtt, nyatu sama penginapan gituu. aku paling suka di rooftop sih… SYAHDU 👍🏻 …OK BGTTTT JUJURRRRR",
        },
        {
            author: "Irna Yulianti",
            text: "Tempatnya super nyaman, bersih, dan suasananya enak banget buat nongkrong atau ngerjain tugas. Semua nya oke bgtttt dari service, vibes, sampai musiknya pas banget. wifi kenceng.",
        },
        {
            author: "Nur Azizah",
            text: "Tempatnya nyaman banget, adem dan spacious gitu dalemnya… ternyata kopina kura ini ada tempat nginepnya di dalemnya dan kayanya sih cozy juga.",
        },
        {
            author: "Nabila Setya Utami",
            text: "Suka banget sama tempat ini. Vibes-nya itu lho, perpaduan klasik dan modern. Buat yang cari tempat buat WFC (work from cafe), ini pas banget. Kopinya juga enak.",
        },
        {
            author: "Teddy Hendra Z",
            text: "Kopina Kura offers a laid-back atmosphere... the overall ambience makes up for it, cozy, comfortable, and thoughtfully arranged.",
        },
    ],

    contact: {
        email: "hello@kopinakura.example",
        phone: "+62 812-3456-7890",
        hours: "Mon–Sun: 08:00 – 22:00",
        whatsapp: "https://wa.me/6281234567890",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7993360783967!2d107.62616247604514!3d-6.914579167676875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e71097df179b%3A0x7689c8d628bc1f70!2sKopina%20Kura!5e0!3m2!1sid!2sid!4v1764786463167!5m2!1sid!2sid",
    },

    news: [
        {
            id: "summer-rooftop-jam-2025",
            type: "event", // "promo" | "event" | "news"
            title: "Summer Rooftop Jam — Live Vinyl Night",
            date: "2025-07-10",
            excerpt: "Nikmati live vinyl & diskon 10% untuk semua signature drinks di rooftop setiap Jumat.",
            image: "/images/events/rooftop-jam.png",
            location: "Kopina Kura — Rooftop",
            cta: { label: "See details", href: "/events/summer-rooftop-jam-2025" }
        },
        {
            id: "iced-latte-promo-june",
            type: "promo",
            title: "Promo Iced Latte — Buy 1 Get 1",
            date: "2025-06-05",
            excerpt: "Minggu ini, beli 1 Iced Latte dapat 1 gratis. Berlaku di semua outlet.",
            image: "/images/promos/iced-latte.png",
            cta: { label: "Order Now", href: "#menu" }
        },
        {
            id: "behind-the-beans",
            type: "news",
            title: "Behind The Beans — New Single Origin Arrival",
            date: "2025-05-20",
            excerpt: "Kami kedatangan single origin dari Takengon — rasanya fruity & chocolatey.",
            image: "/images/news/beans.png",
            cta: { label: "Read more", href: "/news/behind-the-beans" }
        }
    ],
};
