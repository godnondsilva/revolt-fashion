import { FC, InputHTMLAttributes } from 'react';

import { Group, FormInputStyles, FormInputLabel } from './FormInput.styles';

export type FormInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
	return (
		<Group>
			<FormInputStyles {...otherProps} />
			{label && (
				<FormInputLabel
					shrink={Boolean(
						otherProps &&
							typeof otherProps.value === 'string' &&
							otherProps.value.length,
					)}
				>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
