import classnames from 'classnames';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import './box.scss';

/**
 * 다형성 컴포넌트 만들기
 * @desc PropsWithChildren - 암묵적인 children 선언 제거
 */
interface BoxProps<T extends PropsWithChildren<ElementType>> {
  as?: T;
  className?: string;
}

// props에 as 안썼을때 기본으로 사용될 태그
const DEFAULT_TAG = 'div';

/**
 * @desc ComponentPropsWithoutRef - React 컴포넌트의 기본 props 세트를 포함하고 있는 React 라이브러리에서 가져다 사용할 수 있는 타입
 * @desc ComponentPropsWithoutRef에서 제공되는 props와 수동으로 넘어오는 props 사이에 이름 충돌을 피하기 위해 Omit을 사용하여 props 최종 타입 조정
 */
const Box = <T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  children,
  ...boxProps
}: BoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps<T>>) => {
  const Tag = as || DEFAULT_TAG;
  const boxClassName = classnames('box', className);
  return (
    <Tag className={boxClassName} {...boxProps}>
      {children}
    </Tag>
  );
};

Box.displayName = 'Box';

export default Box;
