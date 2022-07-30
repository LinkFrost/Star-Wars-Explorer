import { useAPI } from "../utils";
import { useEffect } from "react";

export default function People(data: any) {
  // const { fetchStatus: speciesFetchStatus, data: speciesData } = useAPI("", data.data.species[0]);

  const peopleData = () => {
    // if (speciesFetchStatus === "loading") return <>Loading...</>;

    // if (speciesFetchStatus == "loaded") {
    return (
      <>
        <h2>Name: {data.data.name}</h2>
        <h2>Height: {data.data.height}in</h2>
        <h2>Eye Color: {data.data.eye_color}</h2>
        <h2>Gender: {data.data.gender}</h2>
        <h2>Weight: {data.data.mass}kg (change to america units later)</h2>
      </>
    );
    // }
  };

  return <div className="flex flex-col">{peopleData()}</div>;
}
