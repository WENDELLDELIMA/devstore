import { Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex ite gap-5">
        <Link href={"/"} className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form
          className="flex w-[320px] items-center gap-3
         rounded-full bg-zinc-700 px-5 py-3 ring-zinc-700"
        >
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            placeholder="Buscar Produtos"
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </form>
      </div>
      <div className="flex ite gap-4"></div>
    </div>
  );
}
