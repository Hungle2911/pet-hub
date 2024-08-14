import { useEffect, useState } from "react";
import SearchForm from "../components/Search/SearchForm";
import CatSitterList from "../components/Search/CatSitterList";
import MapView from "../components/Search/MapView";
import { CatSitter, SearchFormInputs } from "../types/types";
import api from "../api/axios.config";
import { useLoadScript } from "@react-google-maps/api";
import Loading from "../components/Loading/Loading";

interface Coordinate {
  latitude: number;
  longitude: number;
}

const SearchSitterPage = () => {
  const [searchResults, setSearchResults] = useState<CatSitter[]>([]);
  const [mapCenter, setMapCenter] = useState<Coordinate>({
    latitude: 43.6426,
    longitude: -79.387054,
  });
  const [radius, setRadius] = useState<number>(5000);
  const googleMapAPI = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapAPI,
    libraries: ["places"],
  });

  useEffect(() => {
    // Get user's location or use a default location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMapCenter({ latitude, longitude });
        fetchNearbySitters({ latitude, longitude });
      },
      () => {
        fetchNearbySitters(mapCenter);
      }
    );
  }, []);

  const fetchNearbySitters = async (center: Coordinate) => {
    try {
      const response = await api.get("/cat-sitters/search", {
        params: {
          latitude: center.latitude,
          longitude: center.longitude,
          maxDistance: 5,
          maxRate: 1000,
        },
      });
      setSearchResults(response.data.catSitters);
      setMapCenter(response.data.userLocation);
    } catch (error) {
      console.error("Error fetching nearby sitters:", error);
    }
  };

  const onSubmit = async (data: SearchFormInputs) => {
    try {
      const response = await api.get("/cat-sitters/search", {
        params: {
          address: data.address,
          startDate: data.startDate.toISOString(),
          endDate: data.endDate.toISOString(),
          maxRate: data.maxRate,
          maxDistance: data.maxDistance,
        },
      });
      console.log(response.data);
      setSearchResults(response.data.catSitters);
      setRadius(data.maxDistance * 1000);
      setMapCenter({
        latitude: response.data.userLocation.latitude,
        longitude: response.data.userLocation.longitude,
      });
    } catch (error) {
      console.error("Error searching for sitters:", error);
    }
  };
  if (!isLoaded) return <Loading />;
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="bg-off-white p-4 rounded-lg shadow-md w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl text-center mb-6">Search for Sitters</h2>
          <SearchForm onSubmit={onSubmit} />
        </div>
        <div className="bg-off-white p-4 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-2xl text-center mb-6">Available Cat Sitters</h2>
          <CatSitterList catSitters={searchResults} />
        </div>
      </div>
      <div className="w-full h-96 mt-6">
        <MapView
          catSitters={searchResults}
          center={{ lat: mapCenter.latitude, lng: mapCenter.longitude }}
          radius={radius}
        />
      </div>
    </div>
  );
};

export default SearchSitterPage;
