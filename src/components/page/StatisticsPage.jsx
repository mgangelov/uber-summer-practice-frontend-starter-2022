import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

// function App() {
//   const [data, setData] = useState([{}]);

//   useEffect(() => {
//     fetch('http://localhost:5000/courier/1/stats').then(
//       (res) => res.json(),
//     ).then(
//       (data) => {
//         setData(data);
//         console.log(data);
//       },
//     );
//   }, []);

//   return (
//     <div>
//       {(typeof data.members === 'undefined') ? (
//         <p>
//           Loading...
//         </p>
//       ) : (
//         data.members.map((member, i) => (
//           <p key={i}>{member}</p>
//         ))
//       )}
//     </div>
//   );
// }

export default function StatisticsPage() {
  const navigate = useNavigate();

  const [statistics, setStatisticsData] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const url = 'http://127.0.0.1:5000';

  const fetchData = useCallback(async () => {
    const statisticsData = await fetch(`${url}/courier/${id}/stats`);
    const statisticsDataJSON = await statisticsData.json();
    setStatisticsData(statisticsDataJSON);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log(typeof statistics.earnedMoneyFromDeliveryPrice);
  }, [statistics]);

  if (loading) {
    return (<div>Loading</div>);
  }

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
        Amount of deliveries:&nbsp;
        {statistics.deliveriesAmount}
      </p>

      <p
        className="lead2"
        style={{
          fontSize: '40px',
          position: 'relative',
          left: '3cm',
        }}
      >
        Earned money:&nbsp;
        {statistics.earnedMoneyFromDeliveryPrice.toFixed(2)}
      </p>

    </>
  );
}
