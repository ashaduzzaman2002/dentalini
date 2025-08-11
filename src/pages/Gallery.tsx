import Page from "./_Page";
import hero from "@/assets/hero-dentalini.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [hero, hero, hero, hero, hero, hero];

const Gallery = () => (
  <Page title="Gallery | Dentalini" description="Browse our calming, feminine space and smile transformations at Dentalini.">
    <section className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold text-primary">Gallery</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">A glimpse into our modern studio and beautiful results.</p>
      </header>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {images.map((src, i) => (
          <div key={i} className="mb-4 break-inside-avoid rounded-xl border overflow-hidden hover-scale">
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src={src}
                  alt={`Dentalini clinic and smiles ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden animate-enter">
                <img
                  src={src}
                  alt={`Zoomed Dentalini gallery image ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </section>
  </Page>
);

export default Gallery;
