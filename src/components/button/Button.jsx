import {
	DefaultButton,
	GoogleSignInButton,
	InvertedButton,
} from './Button.styles';

export const BUTTON_TYPES = {
	default: 1,
	google: 2,
	inverted: 3,
};

const getButtonFromType = (buttonType = BUTTON_TYPES.default) =>
	({
		[BUTTON_TYPES.default]: DefaultButton,
		[BUTTON_TYPES.google]: GoogleSignInButton,
		[BUTTON_TYPES.inverted]: InvertedButton,
	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButtonFromType(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
