import { Hero, CustomFilter, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";
export default async function Home() {
  const cars = await fetchCars('dd');
  const isDataEmpty = !Array.isArray(cars) || cars.length<1 || !cars ;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y w-full" id="descover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car cataloue</h1>
          <p>find Best car that fits you</p>
          </div>
          <div className="home__filter-container  " style={{justifyContent:"space-between"}}>
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title={""} />
              <CustomFilter title={""} />
            </div>
          </div>
          {!isDataEmpty?(
<section>
   <div className='home__cars-wrapper'>
              {cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
</section>
          ):("")}
      <div className="">
        </div>        
      </div>
    </main>
  );
}
