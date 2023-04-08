import PropTypes from 'prop-types';
import cn from 'classnames';

export const Button = ({
  children,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      className={cn(
        'text-md w-full max-w-[260px] rounded-md bg-indigo-600 px-3 py-2.5 font-bold text-white shadow-md transition-colors hover:bg-indigo-400',
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
};
