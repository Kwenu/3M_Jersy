
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { JerseyCatalog } from './components/JerseyCatalog';
import { TshirtCatalog } from './components/TshirtCatalog';
import { CustomDesign } from './components/CustomDesign';
import { WhyUs } from './components/WhyUs';
import { HowToOrder } from './components/HowToOrder';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';

interface AppProps {
  /** Show the masonry work gallery between the ordering steps and the about section. */
  showGallery?: boolean;
  /** Show the two large collection cards above the jersey catalog. */
  showFeaturedCategories?: boolean;
}

export function App({ showGallery = true, showFeaturedCategories = true }: AppProps) {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      <Header />
      <main>
        <Hero />
        {showFeaturedCategories ? <FeaturedCategories /> : null}
        <JerseyCatalog />
        <TshirtCatalog />
        <CustomDesign />
        <WhyUs />
        <HowToOrder />
        {showGallery ? <Gallery /> : null}
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>);

}