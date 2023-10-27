import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import styles from "../app/page.module.css";

import { GraphProps } from "../app/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ oldestBlock, base, priority }: GraphProps) {
  const median = priority.map((el, i) => el + base[i]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: false,
        text: "Median Gas Prices",
      },
    },
  };

  let labels = base.map((el, i) => oldestBlock + i * 5);
  const data = {
    labels,
    datasets: [
      {
        label: "Base Fee",
        data: base,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
      },
      {
        label: "Median Fee",
        data: median,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: false,
      },
    ],
  };

  return <Line className={styles.graph} options={options} data={data} />;
}
