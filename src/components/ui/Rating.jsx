import { Star } from "lucide-react";

export default function Rating({ value, large = false }) {
  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`${value} out of 5 stars`}
    >
      <div className="flex text-amber">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={large ? 22 : 15}
            fill={star <= Math.round(value) ? "currentColor" : "none"}
          />
        ))}
      </div>

      <span
        className={`${large ? "text-base" : "text-xs"} font-bold text-ink`}
      >
        {value.toFixed(1)}
      </span>
    </div>
  );
}
