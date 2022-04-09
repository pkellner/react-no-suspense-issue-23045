import { useState } from "react";
import CityHeader from "./CityHeader";
import CityList from "./CityList";
import CityDetail from "./CityDetail";

export default function CityListAndDetail() {
  const [selectedCityId, setSelectedCityId] = useState();

  return (
    <>
      <CityHeader />
      <div className="row">
        <CityList setSelectedCityId={setSelectedCityId} />
        <CityDetail selectedCityId={selectedCityId} />
      </div>
    </>
  );
}
