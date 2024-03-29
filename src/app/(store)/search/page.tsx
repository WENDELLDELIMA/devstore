import { api } from "@/data/api";
import { Product } from "@/data/types/products";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    cache: "no-cache",
  });
  console.log(response);
  const products = await response.json();

  return products;
}
export default async function Search({ searchParams }: SearchProps) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const { q: query } = searchParams;
  console.log(query);
  const products = await searchProducts(query);
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para:{" "}
        <span className="font-semibold">
          {query ? query : "O que for encontrado"}
        </span>
      </p>

      <div className="grid grid-cols-4 gap-6">
        {products.map((products) => {
          return (
            <Link
              //key={product.id}
              href={`/product/${products.slug}`}
              className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-start items-end"
            >
              <Image
                src={products.image}
                alt=""
                className="group-hover:scale-105 transition-transform duration-500"
                width={480}
                height={480}
                quality={100}
              />
              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{products.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {products.price}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
