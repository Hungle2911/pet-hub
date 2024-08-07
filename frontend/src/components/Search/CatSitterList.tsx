interface CatSitter {
  id: number;
  user: {
    name: string;
  };
  rate: number;
  averageRating: number | null;
}

interface CatSitterListProps {
  catSitters: CatSitter[];
}
const CatSitterList = ({ catSitters }: CatSitterListProps) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-h-[calc(100vh-20rem)] overflow-y-auto">
      <h3 className="text-xl mb-2"></h3>
      <ul>
        {catSitters.map((sitter) => (
          <li key={sitter.id} className="mb-2 p-2 border rounded">
            <h4 className="font-bold">{sitter.user.name}</h4>
            <p>Rate: ${sitter.rate}/day</p>
            <p>Rating: {sitter.averageRating?.toFixed(1) || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatSitterList;
