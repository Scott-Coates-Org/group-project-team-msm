import Head from 'next/head';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ProtectedRoute } from '../../components/protectedPage';

//TO-DO: should only be reachable when customer is redirected here from backend, so need some sort of global state/parameter to confirm that
//WATCH: this is set up using the ProtectedRoute component, if method of showing a user is logged in changes this will need to be re-worked
//WATCH: as far as we can tell there is no reason for the failure returned by stripe, if one is found later have backend pass and add that message customization here
//TO-DO: once we know the Layout that will be used on all pages, get this to vertically center
    //(need to make parent container a flex and then use it to center this)

// inputs: none
// returns: JSX component with an error message and a button to redirect to home
// This page/route can be used if the backend needs to redirect to an error page for a failed payment or any other checkout errors
function CheckoutError(){
    return (
        <ProtectedRoute>
            <Head>
                <title>Checkout Error</title>
            </Head>
            <Card className='mx-auto text-center w-25'>
                <Card.Body>
                    <Card.Title className='mb-4'>A checkout error occured, please return to the dashboard and try again.</Card.Title>
                    <Link href='/'>
                        <Button variant="danger">
                            Return to Dashboard
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </ProtectedRoute>
    );
}

export default CheckoutError;
