import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle";
import TripInfo from "./TripInfoCard";
import CandidatesList from "./CandidatesList";
import axios from "axios";
import { labexURL } from "../../constants/labexAPI";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

function TripDetailsPage() {
  const [trip, setTrip] = useState();
  const params = useParams();

  useProtectedPage()


  const getTriDetail = () => {
    axios
      .get(`${labexURL}/trip/${params.tripId}`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setTrip(response.data.trip);
      })
      .catch((error) => {
        alert("Erro no Get Trip Details");
      });
  };

  // ANCHOR  GET TRIP DETAIL
  useEffect(() => {
    getTriDetail();
  }, []);

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve,
    };
    axios
      .put(
        `${labexURL}/trips${params.tripId}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        getTriDetail();
      })
      .catch((error) => {
        alert("Erro no PUT");
      });
  };

  return (
    <div>
      <PageTitle title={"Detalhes da viagem"} />
      {trip ? (
        <div
          className="ContentContainer"
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
        >
          <TripInfo info={trip} />
          <CandidatesList
            // candidates={trip.candidates}
            decideCandidate={decideCandidate}
          />
        </div>
      ) : (
        <div>...Carregando</div>
      )}
    </div>
  );
}

export default TripDetailsPage;
