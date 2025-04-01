import { cardsData } from "@/components/home-page/cards-section/cards-data";
import styles from "./styles.module.css";

export default function Cards() {
  return (
    <ul className="flex flex-col gap-y-6 md:flex-row md:flex-wrap md:gap-x-8 lg:grid lg:grid-cols-5">
      {cardsData.map((card) => (
        <li key={card.title} className={styles.card}>
          <a href={card.link}>{card.title}</a>
        </li>
      ))}
    </ul>
  );
}
