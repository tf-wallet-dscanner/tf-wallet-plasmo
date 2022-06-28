import classnames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import './button.scss';

interface ButtonProps<T extends PropsWithChildren<ElementType>> {
  as?: T;
  className?: string;
  submit?: boolean;
}

const DEFAULT_TAG = 'button';

const Button = <T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  submit = false,
  children,
  ...buttonProps
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Tag = as || DEFAULT_TAG;
  if (submit) {
    (buttonProps as ComponentPropsWithoutRef<typeof DEFAULT_TAG>).type =
      'submit';
  }

  const boxClassName = classnames('button', className);
  return (
    <Tag className={boxClassName} {...buttonProps}>
      {children}
    </Tag>
  );
};

Button.displayName = 'Button';

export default Button;
