import useSwr from "swr";
import { restBase } from "../constants";
import { fetcher } from "../fetcher";

export default function CityDetail({ selectedCityId }) {
  const url = selectedCityId
    ? `${restBase}/api/city/${selectedCityId}`
    : "noSelectedCityId";

  const { data: city } = useSwr(url, fetcher, { suspense: false });

  return !city ? (
    <div className="col-9">City Detail Loading...</div>
  ) : (
    <div className="col-9">
      <div>{JSON.stringify(city)}</div>
    </div>
  );
}
