import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import PaymentForm from '../../components/payment-form/PaymentForm';
import {
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cartSelector';

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	EmptyMessage,
	Total,
} from './Checkout.styles';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))
			) : (
				<EmptyMessage>Your cart is empty</EmptyMessage>
			)}
			<Total>Total: ${cartTotal}</Total>
			<PaymentForm />
		</CheckoutContainer>
	);
};

export default Checkout;
