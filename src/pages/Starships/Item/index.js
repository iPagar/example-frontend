import { useParams } from "react-router-dom";
import { getStarshipsItem } from "../../../api";
import { useState, useEffect } from "react";
import Image from "../../../components/Image";

function StarshipsItem() {
  const { id } = useParams();
  const [starship, setStarship] = useState();

  useEffect(() => {
    getStarshipsItem(id).then((data) => {
      setStarship(data);
    });
  }, [id]);

  return (
    <div>
      Starships Item: {id}
      {starship && (
        <div>
          <Image id={id} />
          <div>{starship.name}</div>
        </div>
      )}
    </div>
  );
}

export default StarshipsItem;
