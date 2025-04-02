import { cardsData } from "@/components/home-page/cards-section/cards-data";
import Card from "@/components/home-page/cards-section/card";

export default function HomeCards() {
  return (
    <ul className="flex flex-col gap-y-6 sm:flex-row sm:flex-wrap sm:gap-x-6 lg:grid lg:grid-cols-5 xl:gap-x-8">
      {cardsData.map(
        ({
          title,
          link,
          textDate,
          imageDesktop,
          imageMobile,
          cardFrameDesktop,
          cardFrameMobile,
        }) => (
          <Card
            key={title}
            link={link}
            textDate={textDate}
            title={title}
            imageDesktop={imageDesktop}
            imageMobile={imageMobile}
            cardFrameDesktop={cardFrameDesktop}
            cardFrameMobile={cardFrameMobile}
          />
        )
      )}
    </ul>
  );
}
