import Banner from "./Component/Home/Banner";
import Causes from "./Component/Home/Causes";
import Team from "./Component/Home/Team";
import Whatwedo from "./Component/Home/Whatwedo";


export default function Home() {
  return (
   <div> 
      <Banner />
      <Whatwedo />
      <Causes />
      <Team />
   </div>
  );
}
