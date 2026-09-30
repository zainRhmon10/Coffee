import {
  Plus,
  Search,
  ChevronDown,
  Heart,
  MoreHorizontal,
  ArrowRight,
  Star,
} from "lucide-react";


 const Favourite = ({filters ,coffees }) => {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-caramel">
            Your personal collection
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Favorites
          </h1>
          <p className="mt-2 text-muted">
            Your cups worth remembering.
          </p>
        </div>
        <button className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-espresso px-5 text-sm font-bold text-white transition hover:bg-coffee sm:w-auto">
          <Plus size={18} />
          Add Coffee
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 rounded-2xl border border-line bg-white p-4 shadow-card">
        <div className="flex flex-col gap-3 xl:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              placeholder="Search by coffee name or café..."
              className="h-12 w-full rounded-xl border border-line bg-background pl-11 pr-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-caramel focus:ring-4 focus:ring-amber/10"
            />
          </div>

          {/* Sort */}
          <div className="relative min-w-52">
            <select
              className="h-12 w-full appearance-none rounded-xl border border-line bg-background px-4 pr-10 text-sm font-semibold text-ink outline-none focus:border-caramel"
            >
              <option>Recently Added</option>
              <option>Highest Rated</option>
              <option>Oldest</option>
              <option>Favorites</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`min-h-9 shrink-0 rounded-full px-4 text-xs font-bold transition ${
                index === 0
                  ? "bg-espresso text-white"
                  : "border border-line bg-white text-muted hover:border-caramel hover:text-espresso"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Coffee Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {coffees.slice(0,3).map((coffee) => (
          <article
            key={coffee.id}
            className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-cream">
              <img
                src={coffee.image}
                alt={`${coffee.name} at ${coffee.cafe}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <button
                className={`absolute right-3 top-3 grid size-10 place-items-center rounded-full shadow-sm backdrop-blur ${
                  coffee.favorite
                    ? "bg-white text-rose-600"
                    : "bg-white/90 text-muted"
                }`}
              >
                <Heart
                  size={18}
                  fill={coffee.favorite ? "currentColor" : "none"}
                />
              </button>
              {/* Type */}
              <span className="absolute left-3 top-3 rounded-full bg-espresso/85 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                {coffee.type}
              </span>
            </div>
            {/* Content */}
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

                <button className="text-muted transition hover:text-espresso">
                  <MoreHorizontal size={19} />
                </button>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        fill={
                          star <= Math.round(coffee.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-ink">
                    {coffee.rating.toFixed(1)}
                  </span>
                </div>

                <span className="text-xs text-muted">
                  {coffee.date}
                </span>
              </div>
              {/* Details */}
              <button className="mt-4 flex w-full items-center justify-between text-sm font-bold text-coffee transition hover:text-espresso">
                View details
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Favourite;
