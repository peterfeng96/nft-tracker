import styles from "../page.module.css";

type CardProps = {
  title: string;
  keys: string[];
  values: (string | number)[];
};

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
