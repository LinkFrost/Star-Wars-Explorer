import People from "./People";
import { useSWAPI } from "../utils";

interface ExplorerProps {
  attribute: String;
  searchQuery: String;
}

export default function Explorer({ attribute, searchQuery }: ExplorerProps) {
  const { fetchStatus, data } = useSWAPI(attribute, searchQuery);

  const attributeComponent = () => {
    if (!searchQuery) return;
    if (fetchStatus === "loading") return <>Loading...</>;

    if (fetchStatus === "loaded") {
      switch (attribute) {
        case "people":
          return <People peopleData={data}></People>;
      }
    }
  };

  return <div>{attributeComponent()}</div>;
}
