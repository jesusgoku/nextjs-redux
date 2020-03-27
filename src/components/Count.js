import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '../store/reducers/count';

function Count({ count, increment, decrement }) {
  return (
    <div className="Count">
      <p>{count}</p>
      <button type="button" onClick={increment}>increment</button>
      <button type="button" onClick={decrement}>decrement</button>
    </div>
  );
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.count,
});

const { increment, decrement } = actions;

const mapActionToProps = {
  increment: () => increment(),
  decrement: () => decrement(),
};

export default connect(mapStateToProps, mapActionToProps)(Count);
