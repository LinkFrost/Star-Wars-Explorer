import { useAPI } from "../utils";
import { useEffect } from "react";

export default function People({ peopleData }: any) {
  let species = "Human";
  let homeworld = "Unknown";

  const { fetchStatus: speciesFetchStatus, data: speciesData } = useAPI("", peopleData.species[0]);

  const { fetchStatus: homeworldFetchStatus, data: homeworldData } = useAPI("", peopleData.homeworld);

  if (speciesData) species = speciesData.name;
  if (homeworldData) homeworld = homeworldData.name;

  const renderData = () => {
    if (speciesFetchStatus !== "loading" && homeworldFetchStatus !== "loading") {
      return (
        <>
          <h2>Name: {peopleData.name}</h2>
          <h2>Height: {peopleData.height}cm</h2>
          <h2>Eye Color: {peopleData.eye_color}</h2>
          <h2>Gender: {peopleData.gender}</h2>
          <h2>Weight: {peopleData.mass}kg</h2>
          <h2>Species: {species}</h2>
          <h2>Homeworld: {homeworld}</h2>
        </>
      );
    } else {
      return <>Loading...</>;
    }
  };

  return <div className="flex flex-col">{renderData()}</div>;
}
