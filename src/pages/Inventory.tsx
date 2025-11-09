import { useState } from 'react';
import { X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import CarCard from '../components/CarCard';
import Button from '../components/Button';
import { sampleCars } from '../data/sampleData';

interface InventoryProps {
  onNavigate: (page: string, carId?: number) => void;
}

export default function Inventory({ onNavigate }: InventoryProps) {
  const [filters, setFilters] = useState({
    bodyType: '',
    priceRange: '',
    yearRange: '',
    mileageRange: ''
  });
  const [sortBy, setSortBy] = useState('newest');

  const bodyTypes = ['All', 'Sedan', 'SUV'];
  const priceRanges = ['All', 'Under $17k', '$17k-$22k', 'Over $22k'];
  const yearRanges = ['All', '2020', '2019', '2018'];
  const mileageRanges = ['All', 'Under 35k', '35k-50k', 'Over 50k'];

  const clearFilters = () => {
    setFilters({
      bodyType: '',
      priceRange: '',
      yearRange: '',
      mileageRange: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(val => val && val !== 'All');

  let filteredCars = [...sampleCars];

  if (filters.bodyType && filters.bodyType !== 'All') {
    filteredCars = filteredCars.filter(car => car.bodyType === filters.bodyType);
  }

  if (filters.priceRange && filters.priceRange !== 'All') {
    if (filters.priceRange === 'Under $17k') {
      filteredCars = filteredCars.filter(car => car.price < 17000);
    } else if (filters.priceRange === '$17k-$22k') {
      filteredCars = filteredCars.filter(car => car.price >= 17000 && car.price <= 22000);
    } else if (filters.priceRange === 'Over $22k') {
      filteredCars = filteredCars.filter(car => car.price > 22000);
    }
  }

  if (filters.yearRange && filters.yearRange !== 'All') {
    filteredCars = filteredCars.filter(car => car.year.toString() === filters.yearRange);
  }

  if (filters.mileageRange && filters.mileageRange !== 'All') {
    if (filters.mileageRange === 'Under 35k') {
      filteredCars = filteredCars.filter(car => car.mileage < 35000);
    } else if (filters.mileageRange === '35k-50k') {
      filteredCars = filteredCars.filter(car => car.mileage >= 35000 && car.mileage <= 50000);
    } else if (filters.mileageRange === 'Over 50k') {
      filteredCars = filteredCars.filter(car => car.mileage > 50000);
    }
  }

  if (sortBy === 'price-low') {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredCars.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'mileage-low') {
    filteredCars.sort((a, b) => a.mileage - b.mileage);
  }

  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Inventory"
            title="Premium Performance Vehicles"
            subtitle="Browse our curated collection of exceptional cars"
            centered
          />
        </div>
      </section>

      <section className="py-12 bg-[#0B0B0B] sticky top-20 z-40 border-b border-[rgba(255,255,255,0.08)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                Body Type
              </label>
              <select
                value={filters.bodyType}
                onChange={(e) => setFilters({ ...filters, bodyType: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] transition-colors min-h-[44px]"
              >
                <option value="">All Types</option>
                {bodyTypes.slice(1).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                Price Range
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] transition-colors min-h-[44px]"
              >
                <option value="">All Prices</option>
                {priceRanges.slice(1).map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                Year
              </label>
              <select
                value={filters.yearRange}
                onChange={(e) => setFilters({ ...filters, yearRange: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] transition-colors min-h-[44px]"
              >
                <option value="">All Years</option>
                {yearRanges.slice(1).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                Mileage
              </label>
              <select
                value={filters.mileageRange}
                onChange={(e) => setFilters({ ...filters, mileageRange: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] transition-colors min-h-[44px]"
              >
                <option value="">All Mileage</option>
                {mileageRanges.slice(1).map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <label className="text-sm text-[#B8B8B8]">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] text-sm focus:outline-none focus:border-[#00CFFF] transition-colors min-h-[44px]"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="mileage-low">Mileage: Low to High</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-sm text-[#00CFFF] hover:text-[#E6C200] transition-colors min-h-[44px]"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="mb-8">
            <p className="text-[#B8B8B8]">
              Showing <span className="text-[#00CFFF] font-bold">{filteredCars.length}</span> vehicles
            </p>
          </div>

          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  {...car}
                  onViewDetails={(id) => onNavigate('CarDetail', id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-xl text-[#B8B8B8] mb-8">
                No vehicles match your filters. Try adjusting your search criteria.
              </p>
              <Button variant="secondary" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#00CFFF] mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-[#B8B8B8] mb-12 max-w-2xl mx-auto">
            We have access to an extensive network of dealers and private sellers nationwide. Let us help you find your dream car.
          </p>
          <Button variant="primary" onClick={() => onNavigate('Contact')}>
            Request a Vehicle Search
          </Button>
        </div>
      </section>
    </div>
  );
}
