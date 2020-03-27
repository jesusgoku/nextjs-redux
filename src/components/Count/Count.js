import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '@app/store/reducers/count';

import styles from './Count.module.css';

function Count({ count, increment, decrement }) {
  return (
    <div className={styles.Count}>
      <p className={styles.Count__Label}>{count}</p>
      <button type="button" onClick={increment} className={styles.Count__Button}>
        increment
      </button>
      <button type="button" onClick={decrement} className={styles.Count__Button}>
        decrement
      </button>
    </div>
  );
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const { increment, decrement } = actions;

const mapActionToProps = {
  increment: () => increment(),
  decrement: () => decrement(),
};

export default connect(mapStateToProps, mapActionToProps)(Count);
