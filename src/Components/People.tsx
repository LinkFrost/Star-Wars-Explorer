import { useSWAPI, useImageAPI } from "../utils";

export default function People({ peopleData }: any) {
  let species = "Human";
  let homeworld = "Unknown";
  let img = "";

  const { fetchStatus: speciesFetchStatus, data: speciesData } = useSWAPI("", peopleData.species[0]);

  const { fetchStatus: homeworldFetchStatus, data: homeworldData } = useSWAPI("", peopleData.homeworld);

  const { fetchStatus: imageFetchStatus, data: imageData } = useImageAPI(peopleData.name);

  if (speciesData) species = speciesData.name;
  if (homeworldData) homeworld = homeworldData.name;
  if (imageData) img = imageData.value[0].contentUrl;

  const renderData = () => {
    if (speciesFetchStatus !== "loading" && homeworldFetchStatus !== "loading" && imageFetchStatus !== "loading") {
      return (
        <div className="flex flex-row sm:flex-col space-x-2 justify-center items-center mb-1">
          <img className="mb-3 h-auto w-36 sm:h-60 sm:w-auto" alt={peopleData.name} src={img}></img>
          <div className="grid grid-cols-1 w-full text-sm sm:text-base sm:grid-cols-3">
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Name:</h2>
              <h2>{peopleData.name}</h2>
            </div>
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Species:</h2>
              <h2>{species}</h2>
            </div>
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Homeworld:</h2>
              <h2>{homeworld}</h2>
            </div>
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Birth Year:</h2>
              <h2>{peopleData.birth_year}</h2>
            </div>
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Gender:</h2>
              <h2>{peopleData.gender}</h2>
            </div>
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Height:</h2>
              <h2>{peopleData.height}cm</h2>
            </div>
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Eye Color:</h2>
              <h2>{peopleData.eye_color}</h2>
            </div>
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Skin Color:</h2>
              <h2>{peopleData.skin_color}</h2>
            </div>
            <div className="flex flex-row space-x-1">
              <h2 className="font-bold">Weight:</h2>
              <h2>{peopleData.mass}kg</h2>
            </div>
          </div>
        </div>
      );
    } else {
      return <>Loading...</>;
    }
  };

  return <>{renderData()}</>;
}
