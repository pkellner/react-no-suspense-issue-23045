import useSwr from "swr";
import { restBase } from "../constants";
import { fetcher } from "../fetcher";

export default function CityList({ setSelectedCityId }) {
  const { data: cities } = useSwr(`${restBase}/api/city`, fetcher, {
    suspense: false,
    onSuccess: (data) => {
      setSelectedCityId(data[0].id);
    },
  });

  return !cities ? (
    <div className="col-3">Loading Cities...</div>
  ) : (
    <div className="col-3">
      {cities.map((city) => {
        return (
          <div key={city.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedCityId(city.id);
              }}
            >
              {city.city}
            </button>
          </div>
        );
      })}
    </div>
  );
}
