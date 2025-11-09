import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Printer, ZoomIn } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';
import PriceChip from '../components/PriceChip';
import CarCard from '../components/CarCard';
import { sampleCars } from '../data/sampleData';

interface CarDetailProps {
  carId: number;
  onNavigate: (page: string, carId?: number) => void;
}

export default function CarDetail({ carId, onNavigate }: CarDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const car = sampleCars.find(c => c.id === carId) || sampleCars[0];

  const images = [
    car.image,
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const highlights = [
    'Full service history available',
    'No accidents or damage reported',
    'Clean Carfax report',
    'All original factory specifications',
    'Recently detailed and inspected',
    'Ready for immediate delivery'
  ];

  const specifications = [
    { label: 'Year', value: car.year },
    { label: 'Mileage', value: `${car.mileage.toLocaleString()} miles` },
    { label: 'Transmission', value: car.transmission },
    { label: 'Drivetrain', value: car.drivetrain },
    { label: 'Fuel Type', value: car.fuelType },
    { label: 'Body Type', value: car.bodyType },
    { label: 'Exterior Color', value: car.color },
    { label: 'Trim', value: car.trim }
  ];

  const features = [
    'Premium Audio System',
    'Adaptive Cruise Control',
    'Lane Keeping Assist',
    'Blind Spot Monitoring',
    'Heated & Ventilated Seats',
    'Panoramic Sunroof',
    'Apple CarPlay & Android Auto',
    'Wireless Charging',
    'Premium Leather Interior',
    'Sport Exhaust System',
    'Carbon Fiber Accents',
    'LED Headlights'
  ];

  const relatedCars = sampleCars.filter(c => c.id !== carId).slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'delivery', label: 'Delivery & Financing' }
  ];

  return (
    <div>
      <section className="py-12">
        <div className="container-custom">
          <button
            onClick={() => onNavigate('Inventory')}
            className="flex items-center gap-2 text-[#00CFFF] hover:text-[#E6C200] transition-colors mb-8 min-h-[44px]"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Inventory
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 group">
                <img
                  src={images[currentImageIndex]}
                  alt={`${car.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-[#00CFFF] transition-all opacity-0 group-hover:opacity-100 min-h-[44px] min-w-[44px]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-[#00CFFF] transition-all opacity-0 group-hover:opacity-100 min-h-[44px] min-w-[44px]"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute top-4 right-4">
                  <button className="bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-[#00CFFF] transition-all min-h-[44px] min-w-[44px]" aria-label="Zoom image">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all min-h-[44px] ${
                      currentImageIndex === index
                        ? 'border-[#00CFFF]'
                        : 'border-[rgba(255,255,255,0.08)] hover:border-[#00CFFF]/50'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                {car.badge && <Badge variant="gold" className="mb-4">{car.badge}</Badge>}
                <h1 className="text-4xl font-display font-bold text-[#EAEAEA] mb-2">
                  {car.name}
                </h1>
                <p className="text-xl text-[#B8B8B8] font-mono">
                  {car.year} • {car.trim}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-[rgba(255,255,255,0.08)]">
                <div>
                  <p className="text-sm text-[#B8B8B8] mb-1">Mileage</p>
                  <p className="text-lg font-mono text-[#EAEAEA]">{car.mileage.toLocaleString()} mi</p>
                </div>
                <div>
                  <p className="text-sm text-[#B8B8B8] mb-1">Transmission</p>
                  <p className="text-lg font-mono text-[#EAEAEA]">{car.transmission}</p>
                </div>
                <div>
                  <p className="text-sm text-[#B8B8B8] mb-1">Drivetrain</p>
                  <p className="text-lg font-mono text-[#EAEAEA]">{car.drivetrain}</p>
                </div>
                <div>
                  <p className="text-sm text-[#B8B8B8] mb-1">Fuel Type</p>
                  <p className="text-lg font-mono text-[#EAEAEA]">{car.fuelType}</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm text-[#B8B8B8] mb-3">Key Highlights</p>
                <div className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#00CFFF]/10 rounded flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-[#00CFFF]" />
                      </div>
                      <span className="text-[#EAEAEA]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0B0B0B] rounded-xl p-6 mb-6">
                <div className="mb-4">
                  <p className="text-sm text-[#B8B8B8] mb-2">Price</p>
                  <PriceChip price={car.price} className="text-2xl px-6 py-3" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="primary" onClick={() => onNavigate('Contact')}>
                  Schedule a Test Drive
                </Button>
                <Button variant="secondary" onClick={() => onNavigate('Contact')}>
                  Request Quote
                </Button>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-3 text-[#00CFFF] hover:text-[#E6C200] transition-colors min-h-[44px]"
                  onClick={() => window.print()}
                >
                  <Printer className="w-5 h-5" />
                  Print Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom">
          <div className="border-b border-[rgba(255,255,255,0.08)] mb-8">
            <div className="flex gap-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 font-semibold transition-colors whitespace-nowrap min-h-[44px] relative ${
                    activeTab === tab.id ? 'text-[#00CFFF]' : 'text-[#B8B8B8] hover:text-[#EAEAEA]'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00CFFF]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            {activeTab === 'overview' && (
              <div className="prose prose-invert max-w-none">
                <p className="text-[#EAEAEA] leading-relaxed mb-6">
                  This exceptional {car.year} {car.name} represents the pinnacle of automotive engineering and design. With only {car.mileage.toLocaleString()} miles, this vehicle has been meticulously maintained and is in pristine condition throughout.
                </p>
                <p className="text-[#EAEAEA] leading-relaxed mb-6">
                  The {car.color} exterior finish is complemented by a luxurious interior featuring premium materials and cutting-edge technology. Every aspect of this vehicle has been designed to deliver an exceptional driving experience.
                </p>
                <p className="text-[#EAEAEA] leading-relaxed">
                  This vehicle comes with complete service history, a clean Carfax report, and our comprehensive inspection. It's ready for its next passionate owner who appreciates automotive excellence.
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 border-b border-[rgba(255,255,255,0.08)]"
                  >
                    <span className="text-[#B8B8B8]">{spec.label}</span>
                    <span className="font-mono text-[#EAEAEA]">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#00CFFF]/10 rounded flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#00CFFF]" />
                    </div>
                    <span className="text-[#EAEAEA]">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-[#00CFFF] mb-4">
                    Delivery Options
                  </h3>
                  <p className="text-[#EAEAEA] leading-relaxed mb-4">
                    We offer flexible delivery options to make your purchase convenient. Choose from local pickup at our facility, white-glove enclosed transport anywhere in the continental US, or we can arrange airport delivery for fly-and-drive purchases.
                  </p>
                  <p className="text-[#B8B8B8] text-sm">
                    Delivery fees vary based on distance. Contact us for a detailed quote.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-[#00CFFF] mb-4">
                    Financing Information
                  </h3>
                  <p className="text-[#EAEAEA] leading-relaxed mb-4">
                    We work with a network of premium automotive lenders to secure competitive financing rates. Pre-approval is available within 24 hours for qualified buyers.
                  </p>
                  <p className="text-[#B8B8B8] text-sm">
                    Trade-ins are welcome and can be used as down payment. Contact our sales team to discuss financing options tailored to your needs.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-[#00CFFF] mb-12">
            You Might Also Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCars.map((relatedCar) => (
              <CarCard
                key={relatedCar.id}
                {...relatedCar}
                onViewDetails={(id) => onNavigate('CarDetail', id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
