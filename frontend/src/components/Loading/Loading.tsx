import loadingCat from "../../assets/loading.gif";
const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="text-center">
        <img
          src={loadingCat}
          alt="Loading..."
          className="mx-auto size-44 rounded-full"
        />
        <div className="mt-4 text-white text-xl font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
