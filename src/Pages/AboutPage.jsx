import { useProductContext } from "../context/FoodContext";

const AboutPage = () => {

  const myName = useProductContext( )

  return <div className="text-5xl">{myName}</div>;
};

export default AboutPage;
