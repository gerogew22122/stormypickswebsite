import { Card } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Geoffrey Dufty",
    text: "1 month in, I went up 70+ units. Currently up 37 units this month. Stormy Picks are legit!",
    date: "September 17, 2025",
    timeSince: "2 months after purchase"
  },
  {
    name: "Beau Papuni",
    text: "It's been a blessing bumping into stormy picks and a roller-coaster of a ride it has been so far sharing tips and gaining knowledge on punting on different sports LET'S BANG🔥🔥 2025kings🤴 #STORMY🐐",
    date: "September 16, 2025",
    timeSince: "1 month after purchase"
  },
  {
    name: "Jason Tunbridge",
    text: "Stormy's tips is the best tipping service that I have come across. Great wins and good profits with a good community. Highly recommended",
    date: "September 11, 2025",
    timeSince: "1 month after purchase"
  },
  {
    name: "Kaison Williams",
    text: "Very happy that I joined stormys group. I've made a decent amount of profit and more than I could have done punting on my own. Members are always having a chat and helping everyone navigate around if they're stuck. Very good group!!",
    date: "September 10, 2025",
    timeSince: "1 month after purchase"
  },
  {
    name: "Alex Caruana-Brown",
    text: "Great for all levels of punter. Consistent profits with full transparency, as well as detailed explanations of reasoning",
    date: "September 10, 2025",
    timeSince: "2 months after purchase"
  },
  {
    name: "wookie82",
    text: "Have been with stormy for just under a month now & have seen more wins in this month than the last 15 years of betting. Nothing better than seeing that green win tick next to my bets. Excellent chat and positive support/knowledge from stormy and other members. Seriously get on and join the ride",
    date: "September 10, 2025",
    timeSince: "23 days after purchase"
  },
  {
    name: "Rukkis_13",
    text: "Have joined for just over a month now and haven't looked back since well worth it guys get amongst it cheers",
    date: "September 9, 2025",
    timeSince: "1 month after purchase"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-heading">
            What Our Members Say
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-testimonials-description">
            Real results from real bettors
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  data-testid={`testimonial-slide-${index}`}
                >
                  <Card className="p-6 h-full hover-elevate">
                    <Quote className="w-10 h-10 text-primary mb-4" />
                    <p className="text-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-${index}`}>
                      {testimonial.text}
                    </p>
                    <div className="mt-auto">
                      <div className="font-bold mb-1" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div data-testid={`text-testimonial-date-${index}`}>{testimonial.date}</div>
                        <div className="text-xs" data-testid={`text-testimonial-time-${index}`}>
                          {testimonial.timeSince}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
