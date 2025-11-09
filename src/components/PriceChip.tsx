interface PriceChipProps {
  price: number;
  className?: string;
}

export default function PriceChip({ price, className = '' }: PriceChipProps) {
  return (
    <div className={`inline-block px-4 py-2 bg-[#E6C200] text-black font-mono font-bold rounded-lg ${className}`}>
      ${price.toLocaleString()}
    </div>
  );
}
