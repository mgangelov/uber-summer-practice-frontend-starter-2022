import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:5000/courier/1/stats').then(
      (res) => res.json(),
    ).then(
      (data) => {
        setData(data);
        console.log(data);
      },
    );
  }, []);

  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>
          Loading...
        </p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  );
}

export default function StatisticsPage() {
  const navigate = useNavigate();

  // const [statistics, setStatisticsData] = useState([]);
  // const [dataLoading, setDataLoading] = useState([false]);
  // const [dataRequestStatus, setDataRequestStatus] = useState(200);

  // const fetchData = async () => {
  //   setDataLoading(true);
  //   const statistics = await fetch(`${url}/courier/<int:courier_id>`);
  //   const statisticsStatus = statistics.status;
  //   const statisticsDataJSON = await statistics.json();
  //   console.log(statisticsDataJSON);
  //   setOrdersData(statisticsDataJSON);
  //   setDataRequestStatus(statisticsStatus);
  //   setDataLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (dataRequestStatus !== 200) {
  //   return (<p>Something went wrong with your request.</p>);
  // }

  return (
    <>
      <div id="button1">
        <Button
          variant="outline-primary"
          style={{
            position: 'relative',
            top: '20px',
            flex: 1,
            width: '100px',
            left: '92%',
          }}
        >
          {' '}
          Log out

        </Button>

        <Button
          variant="outline-primary"
          onClick={() => navigate('/edit-profile')}
          style={{
            position: 'relative',
            top: '20px',
            flex: 1,
            width: '120px',
            left: '-7.5%',
          }}
        >
          {' '}
          Edit profile

        </Button>
      </div>

      <h1
        className="stat"
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '60px',
          textAlign: 'center',
        }}
      >
        Statistics

      </h1>

      <p
        className="lead1"
        style={{
          fontSize: '40px',
          position: 'relative',
          left: '3cm',
        }}
      >
        Amount of deliveries:
      </p>

      <p
        className="lead2"
        style={{
          fontSize: '40px',
          position: 'relative',
          left: '3cm',
        }}
      >
        Earned money:
      </p>

    </>
  );
}
