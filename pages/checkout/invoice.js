import Head from 'next/head';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { ProtectedRoute } from '../../components/protectedPage';

//TO-DO: once we know the Layout that will be used on all pages, get this to vertically center
    //(need to make parent container a flex and then use it to center this)

// inputs - takes in an invoice object
// returns - a JSX element rendering invoice information and a pay now button that begins the stripe checkout process
// displays invoice data to customer, then allows them to start the stripe checkout process
function Invoice({ invoice }) {
  //TO-DO: get values from invoice instead, dummy values for now
      // const {values needed here} = invoice;
  const checkoutData = {};
  checkoutData.name = 'Project Charges';
  checkoutData.amount = 20.00;
  checkoutData.quantity = 40;
  checkoutData.appFee = checkoutData.amount * checkoutData.quantity * 0.10;
  checkoutData.serviceProvider = 'provider object here';

  //TO-DO - check data all there before sending & error handling as needed
  // on button click send checkoutData to endpoint
  const handleClick = () => {
    fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkoutData)
    })
  }

  return (
    <ProtectedRoute>
      <Head>
        <title>Invoice Details</title>
      </Head>
      <Card className="mx-auto text-center w-25">
        <Card.Body>
            <Card.Title className="mb-4">Invoice Details</Card.Title>
            <ListGroup className="mb-4 text-start" variant="flush">
                <ListGroup.Item>{`Estimated Number of Hours: ${checkoutData.quantity}`}</ListGroup.Item>
                <ListGroup.Item>{`Hourly Rate: $ ${checkoutData.amount}`}</ListGroup.Item>
                <ListGroup.Item>{`Total: $ ${checkoutData.amount * checkoutData.quantity}`}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" onClick={handleClick}>Pay Now</Button>
        </Card.Body>
      </Card>
    </ProtectedRoute>
  );
}

export default Invoice;
