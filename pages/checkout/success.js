import Head from 'next/head';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ProtectedRoute } from '../../components/protectedPage';

//TO-DO: should only be reachable when customer is redirected here from backend, so need some sort of global state/parameter to confirm that
//WATCH: this is set up using the ProtectedRoute component, if method of showing a user is logged in changes this will need to be re-worked
//TO-DO: once we know the Layout that will be used on all pages, get this to vertically center
    //(need to make parent container a flex and then use it to center this)

// inputs: none
// returns: JSX component with a thank you message and a return to home button
// This page/route will be redirected to by the backend after a successful payment event
function CheckoutSuccess(){
    return (
        <ProtectedRoute>
            <Head>
                <title>Success</title>
            </Head>
            <Card className='mx-auto text-center w-25'>
                <Card.Body>
                    <Card.Title className='mb-4'>Thank you for your payment!</Card.Title>
                    <Link href='/'>
                        <Button variant="success">
                            Return to Dashboard
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </ProtectedRoute>
    );
}

export default CheckoutSuccess;
