import PropTypes from 'prop-types';
import cn from 'classnames';

export const Title = ({ children, tag, className }) => {
  const Tag = tag ?? 'h2';

  return (
    <Tag
      className={cn(
        'font-bold',
        {
          'text-3xl text-slate-600': tag === 'h1',
          'text-2xl text-gray-800': tag === 'h2',
          'text-xl text-gray-500': tag === 'h3',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3']),
  className: PropTypes.string,
};
