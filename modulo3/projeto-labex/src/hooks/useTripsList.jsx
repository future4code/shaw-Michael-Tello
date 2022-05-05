import axios from "axios";
import { useEffect, useState } from "react";
import { labexURL } from "../constants/labexAPI";

export const useTripsList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(`${labexURL}/trips`)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

	return trips
};
