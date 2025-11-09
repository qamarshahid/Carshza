import { Fuel, Gauge } from 'lucide-react';
import PriceChip from './PriceChip';
import Badge from './Badge';
import Button from './Button';

interface CarCardProps {
  id: number;
  name: string;
  year: number;
  image: string;
  mileage: number;
  transmission: string;
  price: number;
  badge?: string;
  onViewDetails?: (id: number) => void;
}

export default function CarCard({
  id,
  name,
  year,
  image,
  mileage,
  transmission,
  price,
  badge,
  onViewDetails
}: CarCardProps) {
  return (
    <div className="group bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#00CFFF] hover:shadow-lg hover:shadow-[#00CFFF]/20">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={`${year} ${name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <Badge variant="gold">{badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-display font-bold text-[#EAEAEA] mb-1 group-hover:text-[#00CFFF] transition-colors">
            {name}
          </h3>
          <p className="text-[#B8B8B8] text-sm font-mono">{year}</p>
        </div>

        <div className="flex items-center gap-4 mb-6 text-[#B8B8B8] text-sm">
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4" />
            <span>{mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{transmission}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <PriceChip price={price} />
          <Button
            variant="secondary"
            onClick={() => onViewDetails?.(id)}
            className="text-sm px-4 py-2"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
