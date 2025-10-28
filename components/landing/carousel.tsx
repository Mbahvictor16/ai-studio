import { Card, Carousel } from "../ui/apple-cards-carousel";
import { cardContent } from "./card";

export function CarouselSlide() {
 const cards = cardContent.map((card, index) => (
    <Card key={index} card={card} index={index}/>
  ))

  return (
    <Carousel items={cards}/>
  )
}