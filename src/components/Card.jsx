import React from 'react';

/**
 * Card Component
 * 
 * A flexible container component for displaying content with optional header, footer, and image.
 * 
 * @example
 * ```jsx
 * <Card 
 *   title="My Card"
 *   image="/image.jpg"
 * >
 *   Card content goes here
 * </Card>
 * ```
 */
export const Card = React.forwardRef((
  {
    elevated = false,
    header,
    body,
    footer,
    image,
    imageAlt = '',
    title,
    subtitle,
    children,
    className = '',
    ...rest
  },
  ref
) => {
  const classes = [
    'card',
    elevated && 'card--elevated',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} {...rest}>
      {image && (
        <img src={image} alt={imageAlt} className="card__image" />
      )}

      {header ? (
        <div className="card__header">{header}</div>
      ) : (title || subtitle) ? (
        <div className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      ) : null}

      <div className="card__body">
        {body || children}
      </div>

      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
});

Card.displayName = 'Card';
