import React, { useEffect } from 'react';

/**
 * Modal Component
 * 
 * A dialog/modal component with overlay, smooth animations, and keyboard support.
 * 
 * @example
 * ```jsx
 * const [isOpen, setIsOpen] = useState(false);
 * 
 * return (
 *   <>
 *     <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
 *     <Modal
 *       isOpen={isOpen}
 *       onClose={() => setIsOpen(false)}
 *       title="Confirm Action"
 *     >
 *       Are you sure?
 *     </Modal>
 *   </>
 * );
 * ```
 */
export const Modal = React.forwardRef((
  {
    isOpen,
    onClose,
    title,
    header,
    body,
    footer,
    showCloseButton = true,
    closeOnOverlayClick = true,
    size = 'md',
    children,
    className = '',
    ...rest
  },
  ref
) => {
  const sizeWidth = {
    sm: '400px',
    md: '600px',
    lg: '800px'
  }[size];

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const classes = [
    'modal',
    !isOpen && 'modal--hidden',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      ref={ref}
      className={classes}
      onClick={handleOverlayClick}
      role="presentation"
      {...rest}
    >
      <div
        className="modal__overlay"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      <div
        className="modal__content"
        style={{ width: sizeWidth, maxWidth: '90vw' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {(header || title) && (
          <div className="modal__header">
            <div>
              {header ? (
                header
              ) : (
                <h2 id="modal-title" className="modal__title">{title}</h2>
              )}
            </div>
            {showCloseButton && (
              <button
                className="modal__close-btn"
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {body || children ? (
          <div className="modal__body">
            {body || children}
          </div>
        ) : null}

        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';
