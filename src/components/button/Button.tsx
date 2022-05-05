import { FC, ButtonHTMLAttributes } from 'react';
import {
	DefaultButton,
	GoogleSignInButton,
	InvertedButton,
	PaymentButton,
} from './Button.styles';

import { ButtonSpinner } from './Button.styles';

export enum BUTTON_TYPES {
	default = 1,
	google = 2,
	inverted = 3,
	payment = 4,
}

const getButtonFromType = (
	buttonType = BUTTON_TYPES.default,
): typeof DefaultButton =>
	({
		[BUTTON_TYPES.default]: DefaultButton,
		[BUTTON_TYPES.google]: GoogleSignInButton,
		[BUTTON_TYPES.inverted]: InvertedButton,
		[BUTTON_TYPES.payment]: PaymentButton,
	}[buttonType]);

export type ButtonProps = {
	buttonType?: BUTTON_TYPES;
	isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
	children,
	buttonType,
	isLoading,
	...otherProps
}) => {
	const CustomButton = getButtonFromType(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};

export default Button;
