import About from "@/components/about";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import MenuHighlights from "@/components/menu-highlights";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";
import { content } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Header siteTitle={content.site.name} />
      <Hero />
      <section id="about" className="max-w-6xl mx-auto py-12">
        <About data={content.about} />
      </section>
      <section id="menu" className="bg-white/60 py-12">
        <div className="max-w-6xl mx-auto">
          <MenuHighlights items={content.menu} />
        </div>
      </section>
      <section id="gallery" className="py-12 bg-primary">
        <div className="max-w-6xl mx-auto">
          <Gallery images={content.gallery} />
        </div>
      </section>
      <section id="reviews" className="py-12 bg-[#e8efe8]">
        <div className="max-w-6xl mx-auto">
          <Reviews reviews={content.reviews} rating={content.site} />
        </div>
      </section>
      <section id="contact" className="py-12">
        <div className="max-w-6xl mx-auto">
          <Contact info={content.contact} />
        </div>
      </section>
      <Footer />
    </main>
  )
}