import useSwr from "swr";
import { restBase } from "../constants";
import { fetcher } from "../fetcher";

export default function CityDetail({ selectedCityId }) {
  const { data: city } = useSwr( selectedCityId ?
    `${restBase}/api/city/${selectedCityId}` : 'noSelectedCityId',
    fetcher,
    { suspense: false }
  );

  return !city ? (
    <div className="col-9">City Detail Loading...</div>
  ) : (
    <div className="col-9">
      <div>{JSON.stringify(city)}</div>
    </div>
  );
}
