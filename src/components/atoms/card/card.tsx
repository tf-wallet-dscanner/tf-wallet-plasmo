import classnames from 'classnames';
import type { ComponentPropsWithoutRef, ReactElement } from 'react';

import Typography from '../typography';
import './card.scss';

interface CardProps {
  className?: string;
  outlined?: boolean;
  title?: string | ReactElement;
  content?: string | ReactElement;
}

const DEFAULT_TAG = 'div';

function Card({
  className,
  outlined,
  title,
  content,
  children,
  ...cardProps
}: CardProps &
  Omit<ComponentPropsWithoutRef<typeof DEFAULT_TAG>, keyof CardProps>) {
  const cardClassName = classnames(
    'card',
    {
      card__outlined: Boolean(outlined),
    },
    className,
  );

  return (
    <div className={cardClassName} {...cardProps}>
      <CardHeader title={title} />
      <CardContent content={content} />
      {children}
    </div>
  );
}

function CardHeader({ title }: { title?: string | ReactElement }) {
  if (!title) return;

  const isTitleString = typeof title === 'string';

  return (
    <div className="card__title">
      {isTitleString ? <Typography>{title}</Typography> : <>{title}</>}
    </div>
  );
}

function CardContent({ content }: { content?: string | ReactElement }) {
  if (!content) return;

  const isContentString = typeof content === 'string';

  return (
    <div className="card__content">
      {isContentString ? <Typography>{content}</Typography> : <>{content}</>}
    </div>
  );
}

Card.displayName = 'Card';

export default Card;
