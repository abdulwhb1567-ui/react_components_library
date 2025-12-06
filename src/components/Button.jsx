import React from 'react';

/**
 * Button Component
 * 
 * A flexible, accessible button component with multiple variants and sizes.
 * 
 * @example
 * ```jsx
 * <Button variant="primary" size="lg">Click me</Button>
 * <Button variant="danger" onClick={() => handleDelete()}>Delete</Button>
 * ```
 */
export const Button = React.forwardRef((
  {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    className = '',
    disabled = false,
    children,
    ...rest
  },
  ref
) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <>
          <span
            style={{
              display: 'inline-block',
              width: '1em',
              height: '1em',
              marginRight: '0.5em',
              border: '2px solid currentColor',
              borderRightColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 0.6s linear infinite',
            }}
          />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = 'Button';
