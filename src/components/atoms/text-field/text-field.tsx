import classnames from 'classnames';
import type {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ReactElement,
} from 'react';

import './text-field.scss';

interface TextFieldProps {
  password?: boolean;
  className?: string;
  model: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
}

const DEFAULT_TAG = 'input';

/**
 * TextField Component
 */
function TextField({
  password,
  className,
  model,
  onChange,
  prefixIcon,
  suffixIcon,
  ...textFieldProps
}: TextFieldProps &
  Omit<ComponentPropsWithoutRef<typeof DEFAULT_TAG>, keyof TextFieldProps>) {
  const textFieldClassName = classnames(`text-field`, className);

  return (
    <>
      <div className={textFieldClassName}>
        {prefixIcon && (
          <span className="text-field__prefix-icon">{prefixIcon}</span>
        )}
        <input
          className="text-field__input"
          onChange={onChange}
          type={password ? 'password' : 'text'}
          {...textFieldProps}
        />
        {suffixIcon && (
          <span className="text-field__suffix-icon">{suffixIcon}</span>
        )}
      </div>
      <div className="text-field__rules">{/* validation */}</div>
    </>
  );
}

TextField.displayName = 'TextField';

export default TextField;
