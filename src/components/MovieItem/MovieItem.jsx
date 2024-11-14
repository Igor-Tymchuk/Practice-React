import place from "../../assets/placeholder.png";

const MovieItem = ({
  movie: { title, description, year, genre, rating },
  img = `https://via.placeholder.com/200`,
}) => {
  return (
    <>
      <img src={place} alt={description} />
      <h2>{title}</h2>
      <span>{year}</span>
      <p>{description}</p>
      <span>{genre}</span>
      <span>{rating}</span>
    </>
  );
};

export default MovieItem;
