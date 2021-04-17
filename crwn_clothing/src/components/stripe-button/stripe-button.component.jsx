import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

/*
Stripe en USD trabaja en centavos

Además, este crea un objeto con la información de pago que se utiliza para enviar al backend
y que el backend lo maneje
*/

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IguYVGHIPL4f3RSo0sWeNNPqJxxjvKEDoytZ3bgSe1ZHUJljVfd49yFfy3CfPAgWfhDGgsNWeA73dy6GRtVRGml00sXetYART'
    
    const onToken= token => {
        console.log(token);
        alert('Payment Succesful');
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;