"use client";

import { useState } from "react";
import hero from "@/assets/hero-dentalini.jpg";
import SubHeader from "@/components/layout/SubHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import BeforeAfterSlider from "@/components/ui/before-after-slider";

// Sample gallery data with categories
const galleryData = [
  {
    id: 1,
    src: hero,
    category: "clinic",
    title: "Modern Reception Area",
    description: "Our welcoming reception space",
  },
  {
    id: 3,
    src: hero,
    category: "smiles",
    title: "Beautiful Smile",
    description: "Smile transformation result",
  },
  {
    id: 4,
    src: hero,
    category: "clinic",
    title: "Treatment Room",
    description: "State-of-the-art equipment",
  },
  {
    id: 6,
    src: hero,
    category: "smiles",
    title: "Whitening Results",
    description: "Before and after whitening",
  },
];

// Before/After transformation data
const orthodonticsAfterData = [
  {
    id: 1,
    before: "/Orthodontics/Pt 1/DSC_1795.JPG",
    after: "/Orthodontics/Pt 1/After.JPG",
    title: "Orthodontic Treatment",
  },
  {
    id: 2,
    before: "/Orthodontics/Pt 2/Before.JPG",
    after: "/Orthodontics/Pt 2/After.JPG",
    title: "Orthodontic Treatment",
  },
  {
    id: 3,
    before: "/Orthodontics/Pt 3/Before.JPG",
    after: "/Orthodontics/Pt 3/After.JPG",
    title: "Orthodontic Treatment",
  },
  {
    id: 4,
    before: "/Orthodontics/Pt 4/Before.JPG",
    after: "/Orthodontics/Pt 4/After.JPG",
    title: "Orthodontic Treatment",
  },
  {
    id: 5,
    before: "/Orthodontics/Pt 5/Before.JPG",
    after: "/Orthodontics/Pt 5/After.JPG",
    title: "Orthodontic Treatment",
  },
  {
    id: 6,
    before: "/Orthodontics/Pt 6/Before.JPG",
    after: "/Orthodontics/Pt 6/After.JPG",
    title: "Orthodontic Treatment",
  },
  {
    id: 6,
    before: "/Orthodontics/Pt 7/Before.JPG",
    after: "/Orthodontics/Pt 7/After.JPG",
    title: "Orthodontic Treatment",
  },
];

const cariesAfterData = [
  {
    id: 1,
    before: "/Caries/Pt 2/DSC_1026.JPG",
    after: "/Caries/Pt 2/DSC_1031.JPG",
    title: "Caries",
  },
  {
    id: 2,
    before: "/Caries/Pt 3/DSC_0016.JPG",
    after: "/Caries/Pt 3/DSC_0020.JPG",
    title: "Caries",
  },
];
const crownBridgeAfterData = [
  {
    id: 1,
    before: "/Crown & Bridge/Pt 1/After.JPG",
    after: "/Crown & Bridge/Pt 1/Before.JPG",
    title: "Crown & Bridge",
  },
  {
    id: 2,
    before: "/Crown & Bridge/Pt 2/DSC_1503.JPG",
    after: "/Crown & Bridge/Pt 2/DSC_1510.JPG",
    title: "Crown & Bridge",
  },
];
const hygieneAfterData = [
  {
    id: 1,
    before: "/Hygiene/DSC_1007.JPG",
    after: "/Hygiene/DSC_1014.JPG",
    title: "Hygiene",
  },
];

const categories = [
  { id: "all", label: "All", count: galleryData.length },
  {
    id: "clinic",
    label: "Clinic",
    count: galleryData.filter((item) => item.category === "clinic").length,
  },
  {
    id: "orthodontics",
    label: "Orthodontics",
    count: orthodonticsAfterData.length,
  },
  {
    id: "caries",
    label: "Caries",
    count: cariesAfterData.length,
  },
  {
    id: "crown-bridge",
    label: "Crown & Bridge",
    count: cariesAfterData.length,
  },
  {
    id: "hygiene",
    label: "Hygiene",
    count: cariesAfterData.length,
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredImages =
    activeFilter === "all"
      ? galleryData
      : activeFilter === "before-after"
      ? []
      : galleryData.filter((item) => item.category === activeFilter);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex].id);
  };

  const currentImage = filteredImages.find((img) => img.id === selectedImage);

  return (
    <div>
      <SubHeader
        title="Gallery"
        description="A glimpse into our modern studio and beautiful results."
      />

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

        {/* Before/After Section */}
        {activeFilter === "orthodontics" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {orthodonticsAfterData.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="w-full"
                />
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        )}

        {activeFilter === "caries" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {cariesAfterData.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="w-full"
                />
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        )}
        {activeFilter === "crown-bridge" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {crownBridgeAfterData.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="w-full"
                />
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        )}
        {activeFilter === "hygiene" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {hygieneAfterData.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="w-full"
                />
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredImages.length === 0 &&
          activeFilter !== "orthodontics" &&
          activeFilter !== "crown-bridge" &&
          activeFilter !== "hygiene" &&
          activeFilter !== "caries" && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No images found for this category.
              </p>
            </div>
          )}
      </section>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/0 border-none shadow-none">
          <div className="relative w-full h-full flex items-center justify-center">
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
                  className="max-w-full max-h-[70vh] object-contain"
                />

                {/* Image Info */}
                <div className="text-center mt-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {currentImage.title}
                  </h3>
                  <p className="text-gray-300">{currentImage.description}</p>
                </div>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {filteredImages.findIndex((img) => img.id === selectedImage) + 1}{" "}
              / {filteredImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
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
