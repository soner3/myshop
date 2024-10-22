import HotProductCard from "@/components/homepage/HotProducts";
import Link from "next/link";

/**
 * - Homepage
 * Das Link-tag ist von Next.js und funktioniert wie ein a-tag
 * der unterschied ist, dass hier die nächste seite prefetcht wird und
 * die nächste seite an den Pfad angehängt wird und nicht die URL ersetzt.
 * Daas ist besser für die performence
 */

export default function Home() {
  return (
    <>
      <h1 className="my-4 text-center text-3xl font-bold text-sky-500">
        Welcome to MyShop!
      </h1>
      <p className="p-2 text-center text-xl font-bold">
        {/*Generiert von ChatGPT */}
        Discover a world of endless possibilities with products from over 20
        diverse categories, all in one place. Whether you&apos;re looking for
        electronics, fashion, home essentials, or something unique, we&apos;ve
        got it all. To give you a taste of what we offer, here are four
        handpicked items from our vast collection. Explore now and find the
        perfect product for you!
      </p>
      <section>
        <HotProductCard />
      </section>
      <div className="my-4 flex w-full items-center justify-center">
        <Link
          href={"/products/search/all/"}
          className="w-1/2 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 py-2 text-center text-2xl font-semibold text-white duration-200 hover:scale-105 active:scale-95 dark:from-violet-600 dark:to-rose-600"
        >
          All Products
        </Link>
      </div>
    </>
  );
}
