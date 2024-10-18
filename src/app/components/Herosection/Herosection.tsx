import Link from "next/link";

function Herosection() {
  return (
    <section>
        <h1 className="text-indigo-950 font-semibold text-2xl text-center p-14">Elevate your presence with our exquisite range of perfumes.
            <br/> Each scent is a masterpiece, designed to embody sophistication and timeless elegance.
            <br/> Fragrance brings you closer to the essence of the earth.</h1>
        <Link href="/Mostdemanding">
        <button className="bg-red-600 hover:bg-purple-600 text-white p-3 m-2 hover:text-black mb-8 border rounded-md ">CLICK TO LOOK INTO MOST DEMANDING PERFUMES</button>
        
        </Link>
      
    </section>
  );
}

export default Herosection
