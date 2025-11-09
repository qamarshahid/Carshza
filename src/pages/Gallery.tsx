import { useState } from 'react';
import { X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { galleryImages } from '../data/sampleData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = ['all', 'service', 'inventory'];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Gallery"
            title="Our Work Speaks for Itself"
            subtitle="Browse our portfolio of builds, restorations, and satisfied customers"
            centered
          />
        </div>
      </section>

      <section className="py-12 bg-[#0B0B0B] sticky top-20 z-40 border-b border-[rgba(255,255,255,0.08)]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all min-h-[44px] ${
                  selectedCategory === category
                    ? 'bg-[#00CFFF] text-black'
                    : 'bg-[#1A1A1A] text-[#EAEAEA] border border-[rgba(255,255,255,0.08)] hover:border-[#00CFFF]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-[#EAEAEA] font-semibold">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-[#B8B8B8]">
                No images in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {lightboxImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 p-3 bg-[#1A1A1A] rounded-full hover:bg-[#00CFFF] transition-all min-h-[44px] min-w-[44px] z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 px-6 py-3 bg-[#1A1A1A] rounded-lg hover:bg-[#00CFFF] transition-all font-semibold min-h-[44px]"
          >
            Previous
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 px-6 py-3 bg-[#1A1A1A] rounded-lg hover:bg-[#00CFFF] transition-all font-semibold min-h-[44px]"
          >
            Next
          </button>

          <div
            className="max-w-6xl max-h-[90vh] mx-auto px-24"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxImage].url}
              alt={filteredImages[lightboxImage].caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-[#EAEAEA] mt-4 text-lg">
              {filteredImages[lightboxImage].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
