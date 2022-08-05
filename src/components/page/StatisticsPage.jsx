import React, { useState, useEffect, useCallback } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import MoneyFlying from '../../static/MoneyFlying.gif';

const MoneyLogoStyle = {
  display: 'flex',
  position: 'relative',
  top: -10,
  width: 200,
  height: 150,
  marginLeft: 'auto',
  marginRight: 'auto',
};

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
      <h1
        className="stat"
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '60px',
          textAlign: 'center',
          lineHeight:'2.2',
        }}
      >
        Statistics
      </h1>

      <Container>
        <img style={MoneyLogoStyle} src={MoneyFlying} alt="" />
      </Container>
      <p
        className="lead1"
        style={{
          textAlign: 'center',
          fontSize: '40px',
          //position: 'relative',
          left: '3cm',
        }}
      >
        Amount of deliveries:&nbsp;
        {statistics.deliveriesAmount}
      </p>

      <p
        className="lead2"
        style={{
          textAlign: 'center',
          fontSize: '40px',
          //position: 'relative',
          left: '3cm',
        }}
      >
        Earned money:&nbsp; BGN&nbsp;
        {statistics.earnedMoneyFromDeliveryPrice.toFixed(2)}
      </p>

    </>
  );
}
