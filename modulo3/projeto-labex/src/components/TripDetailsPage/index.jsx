import React from "react";
import PageTitle from "../PageTitle";
import CandidatesList from "./CandidatesList";
import TripInfo from "./TripInfoCard";

function TripDetailsPage() {
  return (
    <div>
      <PageTitle title={"Detalhes da viagem"} />
      <div
        className="ContentContainer"
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
      >
        <TripInfo />
        <CandidatesList />
      </div>
    </div>
  );
}

// 59:57

export default TripDetailsPage;
