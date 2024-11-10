import Header from "../components/Header/Header";
import Image from "next/image";

const Mostdemanding = () => {
  return (
    <div>
        <Header/>
        
        <h1 className="text-3xl text-center font-bold font-serif text-blue-950 pt-2 m-5">Most Demanding</h1>
        <main className="flex justify-center align items-center p-1 m-4 gap-6 ">
        <Image src="/Image/gentsperfume1.jpg" alt="gents perfume" width={250} height={250}/>
        <h1 className="text-sm font-semibold text-center m-2">Valentino</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.4000/-</p>
        </main>

        <main className="flex justify-center align items-center p-1 m-4 gap-6 ">
        <Image src="/Image/ladiesperfume6.jpg" alt="gents perfume" width={250} height={250}/>
        <h1 className="text-sm font-semibold text-center m-2">Pinksome</h1>
        <p className="text-sm font-semibold text-center">Price: Rs.4400/-</p>
        </main>
    </div>
  )
}

export default Mostdemanding
