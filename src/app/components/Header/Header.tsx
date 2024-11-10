import Link from "next/link";

function Header() {
  return (
    <header className="bg-black text-white flex sm:flex-row items-center justify-between h-auto sm:h-22 border-4 rounded-md m-0 px-3 sm:px-80">

      <nav className="flex gap-10">
        
        <h1 className="text-yellow-400 text-2xl flex justify-center p-6 pl-1" >Smart Perfumes</h1>


        <ul className="flex  flex-col sm:flex-row sm:p-15 p-2 gap-2 sm:gap-12">
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


     
