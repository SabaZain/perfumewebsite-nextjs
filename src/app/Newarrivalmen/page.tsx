import Header from "../components/Header/Header";
import Image from "next/image";

const Newarrivalmen = () => {
  return (
    <div>
        <Header/>
        
        <h1 className="text-3xl text-center font-bold font-serif text-blue-950 pt-2 m-5">New Arrival Collection For Men</h1>
        <main className="flex justify-center align items-center p-1 m-4 gap-6 ">
        <Image src="/Image/gentsperfume8.jpg" alt="gents perfume" width={350} height={350}/>
        <h1 className="text-xl font-semibold text-center m-2">Eternity</h1>
        <p className="text-xl font-semibold text-center">Price: Rs.4300/-</p>
        
        </main>
    </div>
  )
}

export default Newarrivalmen