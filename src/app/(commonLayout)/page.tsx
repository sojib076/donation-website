import Banner from "./Component/Home/Banner";
import Betterworld from "./Component/Home/Betterworld";
import Causes from "./Component/Home/Causes";
import Team from "./Component/Home/Team";
import Testimonials from "./Component/Home/Testimonials";
import Whatwedo from "./Component/Home/Whatwedo";


export default function Home() {
  return (
   <div> 
      <Banner />
      <Whatwedo />
      <Causes />
      <Team />
      <Testimonials />
      <Betterworld  />
   </div>
  );
}
