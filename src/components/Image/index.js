function Image({ id }) {
  return (
    <img
      src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
      alt={id}
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/600x400?text=No%20Image";
      }}
    />
  );
}

export default Image;
