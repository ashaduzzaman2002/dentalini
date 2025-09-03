'use client';

import { useState } from "react";
import hero from "@/assets/hero-dentalini.jpg";
import SubHeader from "@/components/layout/SubHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

// Sample gallery data with categories
const galleryData = [
  { id: 1, src: hero, category: "clinic", title: "Modern Reception Area", description: "Our welcoming reception space" },
  { id: 2, src: hero, category: "treatments", title: "Dental Cleaning", description: "Professional cleaning procedure" },
  { id: 3, src: hero, category: "smiles", title: "Beautiful Smile", description: "Smile transformation result" },
  { id: 4, src: hero, category: "clinic", title: "Treatment Room", description: "State-of-the-art equipment" },
  { id: 5, src: hero, category: "treatments", title: "Orthodontic Care", description: "Braces consultation" },
  { id: 6, src: hero, category: "smiles", title: "Whitening Results", description: "Before and after whitening" },
  { id: 7, src: hero, category: "clinic", title: "Waiting Area", description: "Comfortable patient lounge" },
  { id: 8, src: hero, category: "treatments", title: "Dental Implant", description: "Implant procedure" },
  { id: 9, src: hero, category: "smiles", title: "Perfect Alignment", description: "Orthodontic success story" },
  { id: 10, src: hero, category: "clinic", title: "Sterilization Room", description: "Hygiene and safety first" },
  { id: 11, src: hero, category: "treatments", title: "Root Canal", description: "Endodontic treatment" },
  { id: 12, src: hero, category: "smiles", title: "Confident Smile", description: "Complete smile makeover" },
];

const categories = [
  { id: "all", label: "All", count: galleryData.length },
  { id: "clinic", label: "Clinic", count: galleryData.filter(item => item.category === "clinic").length },
  { id: "treatments", label: "Treatments", count: galleryData.filter(item => item.category === "treatments").length },
  { id: "smiles", label: "Smiles", count: galleryData.filter(item => item.category === "smiles").length },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredImages = activeFilter === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const currentImage = filteredImages.find(img => img.id === selectedImage);

  return (
    <div
    >
      <SubHeader title='Gallery' description='A glimpse into our modern studio and beautiful results.' />
      
      <section className="container mx-auto py-20">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`transition-all duration-300 hover:scale-105 ${
                activeFilter === category.id 
                  ? "bg-primary text-white shadow-lg transform scale-105" 
                  : "hover:bg-primary/10"
              }`}
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl border bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No images found for this category.</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/0 border-none shadow-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            {/* <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button> */}

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Main Image */}
            {currentImage && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <Image
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="max-w-full max-h-[70vh] object-contain "
                />
                
                {/* Image Info */}
                <div className="text-center mt-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">{currentImage.title}</h3>
                  <p className="text-gray-300">{currentImage.description}</p>
                 
                </div>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
