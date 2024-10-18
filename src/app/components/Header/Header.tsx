import Link from "next/link";
import Image from "next/image";



function Header() {
  return (
    <header className="bg-black text-white text-xl h-25 flex justify-between align items-center border-4 rounded-md m-0">

      <nav className="flex gap-10">
        <Image src="/Image/perfumelogo.jpg" alt="logo" width={80} height={80} />
        <h1 className="text-yellow-400 text-2xl flex justify-center p-6 pl-1" >Smart Perfumes</h1>


        <ul className="flex justify-between align items-center gap-6 p-6 pr-10">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Newarrivalwomen">New Arrival Women</Link></li>
          <li><Link href="/Newarrivalmen">New Arrival Men</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>

      </nav>
    </header>
  );
}

export default Header

