import Header from "../components/Header/Header";
import Image from "next/image";

const Newarrivalmen = () => {
  return (
    <div>
        <Header/>
        
        <h1 className="text-3xl text-center font-bold font-serif text-blue-950 pt-2 m-5">New Arrival Collection For Women</h1>
        <main className="flex-col sm:flex flex  justify-center align items-center h-screen ">
        <Image src="/Image/ladiesperfume4.jpg" alt="gents perfume" width={300} height={300}/>
        <h1 className="text-sm font-semibold text-center">Rosemerry Gold</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.4000/-</p>
        
        </main>
    </div>
  )
}

export default Newarrivalmen
