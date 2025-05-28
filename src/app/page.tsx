import SectionCarousel from "@/components/SectionCarousel/SectionCarousel";
import Hero from "@/components/Hero/Hero";
import products from "@/data/products.json";

import CollectionCarousel from "@/components/CollectionCarousel/CollectionCarousel";
import CollectionSkeleton from "@/components/CollectionCarousel/Loading";

import Categories from "@/components/Categories/Categories";

import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <div className="padded-container">
        <SectionCarousel title="New Arrivals" products={products} />
      </div>
      <Suspense fallback={<CollectionSkeleton/>}>
        <CollectionCarousel />
      </Suspense>
    </div>
  );
}
