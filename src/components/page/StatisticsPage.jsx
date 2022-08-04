import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


export default function StatisticsPage() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['x-access-tokens']);

  const [statistics, setStatisticsData] = useState({});
  const [loading, setLoading] = useState(true);

  const url = 'http://127.0.0.1:5000';

  const fetchData = useCallback(async () => {
    setLoading(true);
    const statisticsData = await fetch(`${url}/courier/stats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-tokens': cookies['x-access-tokens'],
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    const statisticsDataJSON = await statisticsData.json();
    setStatisticsData(statisticsDataJSON);
    setLoading(false);
  }, [cookies]);

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
