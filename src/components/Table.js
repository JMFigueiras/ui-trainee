import React from 'react';
import Table from 'reactstrap/lib/Table';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';

const DynamicTable = ({data, columns, headers, title, onSort}) => {
  return (
    <>
    <h1>{title}</h1>
    <Table dark>
      <thead>
        <tr>
            {map(headers, header => (
                <th onClick={() => onSort(header)}>
                    {header.label}
                </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {map(data, d =>(
        <tr key={d.id}>
            {map(columns, column => <td>{get(d, column)}</td>)}
        </tr>       
        ))}
      </tbody>
    </Table>
    </>
  );
}

DynamicTable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    headers: PropTypes.array,
    title: PropTypes.string,
    onSort: PropTypes.func
};

DynamicTable.defaultProps = {
    data: null,
    columns: null,
    headers: null,
    title: '',
    onSort: null
};

export default DynamicTable;
