import { ListGroup } from 'react-bootstrap';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import LoadingContainer from './common/LoadingContainer';

const ListGroupStyle = {
  display: 'flex',
  width: 700,
  height: 20,
  marginLeft: 'auto',
  marginRight: 'auto',

};

export default function TakenOrderInfoList() {
  const [takenOrderData, setTakenOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const URL = 'http://127.0.0.1:5000';

  const fetchData = useCallback(async () => {
    // setDataLoading(true);
    const swtakenOrderData = await fetch(`${URL}/delivery/${id}`);
    // const swOrderDataStatus = swtakenOrderData.status;
    const swtakenOrderDataJSON = await swtakenOrderData.json();
    setTakenOrderData(swtakenOrderDataJSON);
    setLoading(false);
    // setDataRequestStatus(swOrderDataStatus);
    // setDataLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // if (dataRequestStatus !== 200) {
  //   return (<p>Something went wrong with your request.</p>);
  // }

  if(loading) {
    return (<LoadingContainer />);
  }
  return (
    <ListGroup style={ListGroupStyle}>
      <ListGroup.Item variant="primary">
        Delivery price:&nbsp;
        {takenOrderData.delivery_price.toFixed(2)}
      </ListGroup.Item>
      <ListGroup.Item variant="success">
        Restaurant address:&nbsp;
        {takenOrderData.restaurant_address}
      </ListGroup.Item>
      <ListGroup.Item variant="danger">
        Client address:&nbsp;
        {takenOrderData.client_address}
      </ListGroup.Item>
      <ListGroup.Item variant="warning">
        Client phone number:&nbsp;
        {takenOrderData.client_phone_number}
      </ListGroup.Item>

    </ListGroup>

  );
}

// TakenOrderInfoList.propTypes = {
//     takenOrderData: PropTypes.array,
// };
