import classnames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import { THEME_COLOR } from '~constants/colors';

import './button.scss';

interface ButtonProps<T extends PropsWithChildren<ElementType>> {
  as?: T;
  className?: string;
  variant?: string;
  color?: THEME_COLOR;
  submit?: boolean;
}

const DEFAULT_TAG = 'button';

const Button = <T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  color = THEME_COLOR.DEFAULT,
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

  const CLASSNAME_BUTTON_COLOR = `button__${color}`;
  const buttonClassName = classnames(
    'button',
    CLASSNAME_BUTTON_COLOR,
    className,
  );
  return (
    <Tag className={buttonClassName} {...buttonProps}>
      {children}
    </Tag>
  );
};

Button.displayName = 'Button';

export default Button;
