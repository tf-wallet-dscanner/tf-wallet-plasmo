import classnames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import './container.scss';

interface ContainerProps<T extends PropsWithChildren<ElementType>> {
  as?: T;
  className?: string;
}

const DEFAULT_TAG = 'div';

function Container<T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  children,
  ...containerProps
}: ContainerProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Tag = as || DEFAULT_TAG;
  const containerClassName = classnames('atoms__container', className);

  return (
    <Tag className={containerClassName} {...containerProps}>
      <div className="atoms__container-wrapper">{children}</div>
    </Tag>
  );
}

Container.displayName = 'Container';

export default Container;
