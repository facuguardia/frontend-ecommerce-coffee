"use client";

import { useRouter } from "next/navigation";
import { dataCarouselText } from "./CarouselText.data";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function CarouselText() {
  const router = useRouter();
  const data = dataCarouselText;

  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {data?.map(({ id, title, description, link }) => (
            <CarouselItem
              key={id}
              className="cursor-pointer"
              onClick={() => router.push(link)}
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <h3 className="md:text-lg text-wrap dark:text-secondary font-semibold">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
