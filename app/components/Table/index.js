/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import SelectTableItem from './SelectTableItem';

import styles from './index.css';

const Table = ({ headers, onCheck, data }) => {
  const isCheckboxNeeded = !!onCheck;

  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr className={styles.tableRow}>
          {isCheckboxNeeded && (
            <td
              className={cx(
                styles.tableCell,
                styles.tableHeader,
                styles.tableCheckbox
              )}
            />
          )}
          {headers.map(header => (
            <td
              key={header}
              className={cx(styles.tableCell, styles.tableHeader)}
            >
              {header}
            </td>
          ))}
        </tr>
        <Fragment>
          {data.map(item => (
            <SelectTableItem key={item.id} item={item} onCheck={onCheck} />
          ))}
        </Fragment>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array,
  onCheck: PropTypes.func
};

Table.defaultProps = {
  data: [],
  headers: [],
  onCheck: () => {}
};

export default Table;
