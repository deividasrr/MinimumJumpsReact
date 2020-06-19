import React from "react";

const ListCell = (props) => (
  <div className={props.cellClass}>
    <input
      onChange={(e) => props.handleChangeCellRange(e, props.cellIndex)}
      value={props.val}
    />
    <button onClick={() => props.handleRemoveCell(props.cellIndex)}>X</button>
  </div>
);

export default React.memo(ListCell);
