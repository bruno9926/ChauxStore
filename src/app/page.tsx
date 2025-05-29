import NewArrivals from "@/components/NewArrivals/NewArrivals";
import SectionCarouselSkeleton from "@/components/SectionCarousel/Loading";

import Hero from "@/components/Hero/Hero";

import CollectionCarousel from "@/components/CollectionCarousel/CollectionCarousel";
import CollectionSkeleton from "@/components/CollectionCarousel/Loading";

import Categories from "@/components/Categories/Categories";

import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Suspense fallback={<SectionCarouselSkeleton/>}>
        <NewArrivals />
      </Suspense>
      <Suspense fallback={<CollectionSkeleton/>}>
        <CollectionCarousel />
      </Suspense>
    </div>
  );
}
