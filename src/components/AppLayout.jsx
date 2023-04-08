import PropTypes from 'prop-types';

export const AppLayout = ({ children }) => {
  return (
    <section className="py-10">
      <div className="container grid grid-rows-[200px_1fr] gap-10">
        {children}
      </div>
    </section>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
