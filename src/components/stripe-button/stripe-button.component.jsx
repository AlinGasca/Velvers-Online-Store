import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IeUvbAngJrxROE9kBjyIxmCK4IaBPXaTErUOQMStyM8OmIIcypKaqPMwlkgZKHRWKS8nkipcZJTWsaOm6NPcBHV00ikBZLj5j';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        image='https://alingasca.com/emails/onlineShop/img/pay.png'
        label='Pay Now'
        name='Velvers Ltd'
        shippingAddress
        billingAddress={false}
        description={`Your total is £${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
};

export default StripeCheckoutButton;