import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { StripeCardElement } from '@stripe/stripe-js';

import { selectCartTotal } from '../../store/cart/cartSelector';
import { selectCurrentUser } from '../../store/user/userSelector';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPES } from '../button/Button';

import { PaymentFormContainer, FormContainer } from './PaymentForm.styles';

const ifValidCardElement = (
	card: StripeCardElement | null,
): card is StripeCardElement => card != null;

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);

	const paymentHandler = async (e: FormEvent) => {
		e.preventDefault();

		if (!stripe || !elements) return;

		setIsProcessingPayment(true);

		const response = await fetch('/.netlify/functions/createPaymentIntent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((response) => response.json());

		const {
			paymentIntent: { client_secret },
		} = response;

		const cardDetails = elements.getElement(CardElement);

		if (!ifValidCardElement(cardDetails)) return;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: currentUser ? currentUser.displayName : 'Guest',
				},
			},
		});

		setIsProcessingPayment(false);

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
				<Button
					isLoading={isProcessingPayment}
					buttonType={BUTTON_TYPES.payment}
				>
					Pay now
				</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
