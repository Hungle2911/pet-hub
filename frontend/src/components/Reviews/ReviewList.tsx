const ReviewsList = () => {
  // Dummy data for reviews
  const reviews = [
    { id: 1, text: "Great sitter!", rating: 5 },
    { id: 2, text: "Very reliable.", rating: 4 },
    { id: 3, text: "Friendly and professional.", rating: 5 },
    { id: 4, text: "Would hire again.", rating: 4 },
    { id: 5, text: "My cat loved them!", rating: 5 },
  ];

  return (
    <div className="space-y-4">
      {reviews.length > 0 ? (
        <ul className="space-y-2">
          {reviews.map((review) => (
            <li key={review.id} className="p-4 bg-white rounded shadow">
              <p className="text-gray-800">{review.text}</p>
              <p className="text-sm text-gray-500">
                Rating: {review.rating} stars
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewsList;
