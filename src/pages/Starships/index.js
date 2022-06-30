import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStarships } from "../../api";
import styles from "./styles.module.css";
import Image from "../../components/Image";

function Starships() {
  const [starships, setStarships] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStarships().then((data) => {
      setStarships(data);
    });
  }, []);

  return (
    <div className={styles.starships}>
      Starships
      {starships.map((starship) => {
        const id = starship.url.split("/").slice(-2)[0];

        return (
          <div
            key={id}
            className={styles.card}
            onClick={() => {
              navigate(`/starships/${id}`);
            }}
          >
            <Image id={id} />
            <div>{starship.cost_in_credits}</div>
            <div>{starship.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Starships;
