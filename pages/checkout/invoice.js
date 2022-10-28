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
  // get values from invoice object & add necessary ones to the checkoutData object we will pass the API
  const checkoutData = {};
  checkoutData.name = 'Project Charges';
  checkoutData.amount = 20.00;
  checkoutData.quantity = 40;
  checkoutData.appFee = checkoutData.amount * checkoutData.quantity * 0.10;
  checkoutData.serviceProvider = 'provider object here';

  //TO-DO: get values from invoice instead, dummy values for now
      // const {values needed here} = invoice;
  // get additional values from invoice object to show on view
  const projectName = 'Test Project';
  const customerName = 'Test Customer';
  const spName = 'Test Service Provider';

  // create an international number formatter to show numbers as currency
  const dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

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
      <Card className="mx-auto text-center" style={{width: '30%', minWidth: 400}}>
        <Card.Body>
            <Card.Title className="mb-4">
              <h2 className='text-decoration-underline'>Invoice Details</h2>
            </Card.Title>
            <ListGroup className="mb-4" variant="flush">
                <ListGroup.Item className='d-flex justify-content-between text-start'>
                  <div className='text-start fw-bold me-1'>{`Project Name: `}</div>
                  <div className='text-end'>{`${projectName}`}</div>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between text-start'>
                  <div className='text-start fw-bold me-1'>{`Cutomer: `}</div>
                  <div className='text-end'>{`${customerName}`}</div>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between text-start'>
                  <div className='text-start fw-bold me-1'>{`Service Provider: `}</div>
                  <div className='text-end'>{`${spName}`}</div>
                </ListGroup.Item>
                <ListGroup.Item >
                  <br />
                </ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between'>
                  <div className='text-start fw-bold'>{`Estimated Number of Hours: `}</div>
                  <div className='text-end'>{`${checkoutData.quantity}`}</div>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between'>
                  <div className='text-start fw-bold'>{`Hourly Rate: `}</div>
                  <div className='text-end'>{`${dollarUS.format(checkoutData.amount)}`}</div>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex justify-content-between'>
                  <div className='text-start fw-bold'>{`Total: `}</div>
                  <div className='text-end'>{`${dollarUS.format(checkoutData.amount * checkoutData.quantity)}`}</div>
                </ListGroup.Item>
            </ListGroup>
            <Button variant="primary" className='w-25' onClick={handleClick}>Pay Now</Button>
        </Card.Body>
      </Card>
    </ProtectedRoute>
  );
}

export default Invoice;
