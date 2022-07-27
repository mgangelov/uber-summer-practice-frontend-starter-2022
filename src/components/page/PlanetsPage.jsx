import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import LoadingContainer from '../common/LoadingContainer';
import PlanetsTable from '../PlanetsTable';

const SWAPI_URL = 'https://swapi.dev/api';

export default function PlanetsPage() {
  const [planetsData, setPlanetsData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = async () => {
    setDataLoading(true);
    const swPlanetsData = await fetch(`${SWAPI_URL}/planets`);
    const swPlanetsDataStatus = swPlanetsData.status;
    const swPlanetsDataJSON = await swPlanetsData.json();
    setPlanetsData(swPlanetsDataJSON.results);
    setDataRequestStatus(swPlanetsDataStatus);
    setDataLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (dataRequestStatus !== 200) {
    return (<p>Something went wrong with your request.</p>);
  }

  return (
    <Container style={{
      paddingTop: '30px',
      paddingBottom: '10px',
    }}
    >
      {dataLoading ? (
        <LoadingContainer />
      ) : (<PlanetsTable planetsData={planetsData} />)}
    </Container>
  );
}
