import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPES } from '../button/Button';

import { PaymentFormContainer, FormContainer } from './PaymentForm.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) return;

		const response = await fetch('/.netlify/functions/createPaymentIntent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: 100 }),
		}).then((response) => response.json());

		const {
			paymentIntent: { client_secret },
		} = response;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: 'Godnon Dsilva',
				},
			},
		});

		console.log(paymentResult);

		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful!');
			}
		}
	};

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<Button buttonType={BUTTON_TYPES.inverted}>Pay now</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
