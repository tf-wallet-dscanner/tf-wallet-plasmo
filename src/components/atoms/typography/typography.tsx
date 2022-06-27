import classnames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import './typography.scss';

interface TypographyProps<T extends PropsWithChildren<ElementType>> {
  as?: T;
  className?: string;
}

const DEFAULT_TAG = 'span';

function Typography<T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  children,
  ...typographyProps
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) {
  let Tag = as || DEFAULT_TAG;
  const typographyClassName = classnames('typography', className);

  return (
    <Tag className={typographyClassName} {...typographyProps}>
      {children}
    </Tag>
  );
}

Typography.displayName = 'Typography';

export default Typography;
