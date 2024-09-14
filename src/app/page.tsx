import HotProductCard from "@/components/homepage/HotProducts";

export default function Home() {
  return (
    <>
      <h1 className="my-4 text-center text-3xl font-bold capitalize">
        welcome to shopZilla
      </h1>
      <p className="text-center text-xl font-bold capitalize">
        We have over 100 Products that wait for you. Here you have 4 Products of
        the most loved category.
      </p>
      <section>
        <HotProductCard />
      </section>
    </>
  );
}
