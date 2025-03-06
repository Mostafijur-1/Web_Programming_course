import { useState } from "react";
import BookCard from "./BookCard";
import GenreSection from "./GenreSection";

const GenreFilter = ({ genres, books }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <div>
      <h1 className="text-3xl ml-2"> Filter By Genre</h1>
      <button
        className="bg-gray-500 m-2 p-4 cursor-pointer hover:bg-green-500"
        onClick={() => setSelectedGenre("")}
      >
        All
      </button>

      {genres.map((genre) => (
        <button
          className="bg-gray-500 m-2 p-4 cursor-pointer hover:bg-green-500"
          key={genre}
          value={genre}
          onClick={() => setSelectedGenre(genre)}
        >
          {genre}
        </button>
      ))}

      <GenreSection category={selectedGenre} books={books} />
    </div>
  );
};

export default GenreFilter;
