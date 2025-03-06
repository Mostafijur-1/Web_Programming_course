import BookCard from "./BookCard";

const GenreSection = ({ category, books }) => {
  let filteredBooks;
  if (category) {
    filteredBooks = books.filter((book) => book.genre === category);
  } else {
    filteredBooks = books;
  }

  return (
    <div className="flex flex-wrap">
      {filteredBooks.map((book) => (
        <BookCard
          title={book.title}
          author={book.author}
          description={book.description}
          coverImageUrl={book.coverImageUrl}
        />
      ))}
    </div>
  );
};

export default GenreSection;
