import Logo from "./components/logo";
import CardList from "./components/cardList";
import { CardData } from "@/lib/api";
import Image from "next/image";

export default async function App(){

  const data = await CardData()

return(
<main>
      <div className="main-logo-wrapper">
        <Image
          src={data.logo}
          alt="Main Logo"
          width={60}
          height={30}
          priority
        />
      </div>

      <CardList features={data.features} />
    </main>
)
}