import styles from "../app/page.module.css";

import { CardProps } from "../app/types";

export default function Card({ title, keys, values }: CardProps) {
  const info = keys.map((el, i) => (
    <div key={el + values[i]}>
      {el}: {values[i]}
    </div>
  ));
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <br></br>
      {info}
    </div>
  );
}
