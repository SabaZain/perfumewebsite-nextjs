import Header from "./components/Header/Header";
import Herosection from "./components/Herosection/Herosection";
import Footer from "./components/Footer/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Herosection/>
      <section className="flex justify-between align items-center m-14 p-1">
        <h1 className="text-xl font-bold text-center">Lady</h1>
        
        <div><Image src="/Image/ladiesperfume5.jpg" alt="ladies perfume" width={300} height={300}/>
        <h1 className="text-sm font-semibold text-center m-2">Elegant</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.4500/-</p>
        </div>

        <div><Image src="/Image/ladiesperfume1.jpg" alt="ladies perfume" width={300} height={300}/>
        <h1 className="text-sm font-semibold text-center m-2">Burberry</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.6500/-</p>
        </div>

        <div><Image src="/Image/ladiesperfume3.jpg" alt="ladies perfume" width={300} height={300}/>
        <h1 className="text-sm font-semibold text-center m-2">Bloom</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.3500/-</p>
        </div>
      </section>

      <section className="flex justify-between align items-center m-14 p-1">
        <h1 className="text-xl font-bold text-center">Men</h1>
        
        <div><Image src="/Image/gentsperfume5.jpg" alt="gents perfume" width={300} height={300}/>
        <h1 className="text-sm font-semibold text-center m-2">Coach</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.5500/-</p>
        </div>

        <div><Image src="/Image/gentsperfume2.jpg" alt="gents perfume" width={300} height={300}/>
        <h1 className="text-sm font-semibold text-center m-2">Prada</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.3500/-</p>
        </div>

        <div><Image src="/Image/gentsperfume3.jpg" alt="gents perfume" width={300} height={300}/>
        <h1 className="text-sm font-semibold text-center m-2">Boss</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.7000/-</p>
        </div>
      </section>
      <Footer/>
      
    </div>
  );
}
