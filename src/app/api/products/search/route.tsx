import { z } from "zod";
import type { NextRequest } from "next/server";
import data from "../data.json";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = z.string().parse(searchParams.get("q"));
  if (query) {
    const products = data.products.filter((product) => {
      return product.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());
    });
    return Response.json(products);
  } else {
    const products = data.products;
    return Response.json(products);
  }
}
