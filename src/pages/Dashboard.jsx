// import CoffeeCard from "../components/coffee/CoffeeCard";
import CoffeeCard from "../components/coffee/CoffeeCard";
import { StatCard } from "../components/coffee/StatCard";
import Rating from "../components/ui/Rating";
import SectionHeader from "../components/ui/SectionHeader";
import { images } from "../data/coffees";
import { Plus,Coffee, Star, Heart, ChartNoAxesColumn , ArrowRight } from "lucide-react"

const Dashboard = ({ coffees , onFavorite, onView })=>{
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-espresso px-6 py-8 text-white md:px-10 md:py-10">
        <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full border-[40px] border-white/5" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-tan">
              Tuesday, May 27
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Good morning, Zayn <span aria-hidden="true">☕</span>
            </h1>
            <p className="mt-3 max-w-xl text-base text-white/70 md:text-lg">
              Keep track of every cup worth remembering.
            </p>
          </div>
          <button  className="!bg-white flex flex-row items-center justify-center gap-2 w-35 h-11 rounded-xl text-[14px] font-semibold !text-espresso hover:!bg-cream">
            <Plus size={18} /> Add Coffee
          </button>
        </div>
      </section>

     <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">
       <StatCard icon={Coffee} value="42" label="Coffees tried"  detail="+6 this month" />
       <StatCard icon={Star} value="4.7" label="Average rating" detail="+0.2"/>
       <StatCard icon={Heart}  value="12"  label="Favorites" detail="Top 28%"/>
       <StatCard  icon={ChartNoAxesColumn} value="4.9"  label="Best rated coffee"  detail="Cold Brew"/>
     </section>

      <section>
        <SectionHeader
          title="Recent Coffees"
          subtitle="Your latest cups, all in one place."
          action={
            <button >
              View all <ArrowRight size={16} />
            </button>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coffees.slice(0, 3).map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onFavorite={onFavorite}
              onView={onView}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Coffee of the Day" subtitle="A favorite worth revisiting." />
        <article className="grid overflow-hidden mb-20 rounded-3xl bg-[#dac2a0] md:grid-cols-[1.05fr_1fr]">
          <div className="min-h-72 overflow-hidden">
            <img
              src={images.coldBrew}
              alt="Ethiopian cold brew"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <span className="mb-4 w-fit rounded-full bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-widest text-coffee">
              Editor's pick
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-espresso">
              Ethiopian Cold Brew
            </h2>
            <p className="mt-2 font-semibold text-coffee">Daybreak Roasters</p>
            <div className="mt-4">
              <Rating value={4.9} large />
            </div>
            <p className="mt-5 max-w-lg leading-relaxed text-coffee">
              Bright citrus, delicate florals, and a silky finish make this a cup
              you'll want to remember.
            </p>
            <button className="mt-6 w-fit flex felx-row items-center justify-center gap-2 rounded-xl bg-espresso px-5 py-3 text-sm font-semibold text-white hover:bg-espresso/90">
              View Coffee <ArrowRight size={16} />
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Dashboard ; 