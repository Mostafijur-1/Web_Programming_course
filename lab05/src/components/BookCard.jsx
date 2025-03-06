const BookCard = ({ title, author, description, coverImageUrl }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-lg m-4 w-80">
      <img className="" src={coverImageUrl} alt="profile" />
      <hr className="m-2 border-gray-200 " />

      <h1 className="text-green-500 text-lg">{title}</h1>
      <h2 className=" text-gray-600">{author}</h2>
      <p className="my-2 text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default BookCard;
