import { Link } from "react-router-dom";

interface CatSitter {
  id: number;
  user: {
    first_name: string;
    last_name: string;
    description: string;
  };
  rate: number;
  // averageRating: number | null;
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
            <h4 className="font-bold">
              {sitter.user.first_name} {sitter.user.last_name}
            </h4>
            <p>Rate: ${sitter.rate}/night</p>
            <p>Description: {sitter.user.description}</p>
            {/* <p>Rating: {sitter.averageRating?.toFixed(1) || "N/A"}</p> */}
            <Link to={`/sitter-profile/${sitter.id}`}>
              <button className="w-full bg-dark-orange text-white p-2 rounded hover:bg-blue-600">
                Book now
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatSitterList;
