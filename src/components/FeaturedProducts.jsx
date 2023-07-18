import { useProductContext } from "../context/FoodContext";
import Product from "./Product";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts)

  if (isLoading) {
    return <div>.....Loading</div>;
  }

  return (
    <>
      <section className=" container mx-auto">
        <div className="my-8">
          <p className=" text-gray-400 uppercase">Check Now!</p>
          <h1 className=" text-gray-600 text-xl sm:text-2xl md:text-2xl font-bold">
            Our Most Selling Foods
          </h1>
        </div>
      </section>

      <section>
        <div className="grid sm:grid-cols-3 container mx-auto gap-8">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
