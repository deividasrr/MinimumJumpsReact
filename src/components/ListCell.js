import React from 'react';

const ListCell = props => (
  <input  className="list-cell"
   onChange={(e) => props.handleChangeCellRange(e, props.cellIndex)} value={props.val}/>
);

export default ListCell;