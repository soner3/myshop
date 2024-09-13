import HotProductCard from "@/components/homepage/HotProducts";
import PageLoadingSpinner from "@/ui/PageLoadingSpinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1 className="my-4 text-center text-3xl font-bold">
        Welcome To ShopZilla
      </h1>
      <p className="text-center text-xl font-bold">
        Here are the most popular products
      </p>
      <section>
        <Suspense fallback={<PageLoadingSpinner />}>
          <HotProductCard />
        </Suspense>
      </section>
    </>
  );
}
