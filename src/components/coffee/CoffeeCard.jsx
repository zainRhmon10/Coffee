import { Heart, MoreHorizontal, ArrowRight } from "lucide-react";
import Rating from "../ui/Rating";

export default function CoffeeCard({ coffee, onFavorite, onView }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={coffee.image}
          alt={`${coffee.name} at ${coffee.cafe}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          aria-label={
            coffee.favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          onClick={() => onFavorite(coffee.id)}
          className={`absolute right-3 top-3 grid size-10 place-items-center rounded-full shadow-sm backdrop-blur transition ${
            coffee.favorite
              ? "bg-white text-rose-600"
              : "bg-white/90 text-muted hover:text-rose-600"
          }`}
        >
          <Heart
            size={18}
            fill={coffee.favorite ? "currentColor" : "none"}
          />
        </button>

        <span className="absolute left-3 top-3 rounded-full bg-espresso/85 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
          {coffee.type}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-extrabold tracking-tight text-ink">
              {coffee.name}
            </h3>

            <p className="mt-1 text-sm text-muted">
              {coffee.cafe}
            </p>
          </div>

          <button
            aria-label="More options"
            className="text-muted hover:text-espresso"
          >
            <MoreHorizontal size={19} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <Rating value={coffee.rating} />

          <span className="text-xs text-muted">
            {coffee.date}
          </span>
        </div>

        <button
          onClick={() => onView(coffee)}
          className="mt-4 flex w-full items-center justify-between text-sm font-bold text-coffee transition hover:text-espresso"
        >
          View details
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}
