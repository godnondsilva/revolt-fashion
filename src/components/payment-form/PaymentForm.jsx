import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPES } from '../button/Button';

import { PaymentFormContainer, FormContainer } from './PaymentForm.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = (e) => {
		e.preventDefault();

		if (!stripe || !elements) return;
	};

	return (
		<PaymentFormContainer>
			<FormContainer>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<Button buttonType={BUTTON_TYPES.inverted} onClick={paymentHandler}>
					Pay now
				</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
