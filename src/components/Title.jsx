import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Title = ({ children, tag, className }) => {
  const Tag = tag ?? 'h2';

  return (
    <Tag
      className={classNames(
        'font-bold',
        {
          'text-3xl text-indigo-600': tag === 'h1',
          'text-2xl text-blue-800': tag === 'h2',
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
  tag: PropTypes.string,
  className: PropTypes.string,
};
