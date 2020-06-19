import React from "react";
import ListCell from "./ListCell";
import handleRun from "./MinimumJumpAlgorithm";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class MinimumJump extends React.Component {
  constructor() {
    super();
    this.state = {
      inputList: [0, 0, 0, 0],
      result: null,
      currentCellIndex: null,
      checkedCellIndex: null,
      inProgress: false,
      jumpIndices: [],
      jumpRange: [],
    };
  }

  handleChangeCellRange = (e, index) => {
    if (!e.target.value) {
      e.target.value = 0;
    }
    if (/[+\-0-9]+/.test(e.target.value)) {
      let newList = [...this.state.inputList];
      newList[index] = parseInt(e.target.value); // parse to get rid of possible leading zeroes
      this.setState({
        inputList: newList,
      });
    }
  };

  handleAddCell = () => {
    let newList = [...this.state.inputList];
    newList.push(0);
    this.setState({
      inputList: newList,
      currentCellIndex: null,
      checkedCellIndex: null,
      jumpIndices: [],
      result: null,
    });
  };

  handleRemoveCell = (index) => {
    var newList = [...this.state.inputList];
    newList.splice(index, 1);
    this.setState({
      inputList: newList,
      currentCellIndex: null,
      checkedCellIndex: null,
      jumpIndices: [],
      result: null,
    });
  };

  handleRunWrapper = () => {
    this.setState({ result: handleRun(this.state.inputList) });
  };

  handleFinishRun = (result) => {
    this.setState({
      currentCellIndex: null,
      checkedCellIndex: null,
      inProgress: false,
      result: result,
    });
  };

  handleRun = () => {
    let nums = this.state.inputList;
    let outerScope = this;
    this.setState(
      {
        currentCellIndex: null,
        checkedCellIndex: null,
        inProgress: true,
      },
      () => {
        let globalMax = 0;
        let localMax = 0;
        let jumps = 0;
        let jumpIndices = [];
        let z = 1;
        for (let i = 0; i < nums.length - 1; i++) {
          setTimeout(function timer() {
            // if last cell is reachable, return jump count
            if (localMax > nums.length - 1) {
              return;
            }
            // if next cell is out of bounds, return -1
            else if (localMax < i) {
              jumps = -1;
              return;
            }
            const jumpRange = i + nums[i];
            jumpIndices.push(i);
            globalMax = Math.max(globalMax, jumpRange);
            if (localMax === i) {
              localMax = globalMax;
              jumps++;
            }

            // globalMax = Math.max(globalMax, i + nums[i]);
            // if (i == localMax) {
            //   jumps++;
            //   localMax = globalMax;

            //   if (localMax >= nums.length - 1) {
            //     return;
            //   }
            // }

            outerScope.setState({ jumpIndices: jumpIndices });
          }, (z + i) * 50);
        }

        setTimeout(
          () => outerScope.setState({ result: jumps, jumpIndices: [] }),
          nums.length * 50 + 1
        );
      }
    );
  };

  handleReset = () => {
    this.setState({
      inputList: [0, 0, 0, 0],
      result: null,
      currentCellIndex: null,
      checkedCellIndex: null,
      inProgress: false,
      jumpIndices: [],
    });
  };

  render() {
    return (
      <div className="minimum-jump-wrapper">
        <div className="minimum-jump-body">
          <h1>Minimum Jump Calculation</h1>
          <h3>
            Please enter a list of cell ranges to calculate the shortest jump
            distance to the end of the list. <br></br>Each jump will be
            highlighted in black.
          </h3>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={100}
            transitionLeaveTimeout={100}
            className="list-cell-wrapper"
          >
            {this.state.inputList.map((el, index) => {
              let cellClass = "list-cell";
              if (this.state.currentCellIndex === index) {
                cellClass = "list-cell current-cell";
              } else if (this.state.checkedCellIndex === index) {
                cellClass = "list-cell checked-cell";
              } else if (this.state.jumpIndices.includes(index)) {
                cellClass = "list-cell jumped-cell";
              } else if (this.state.jumpRange.includes(index)) {
                cellClass = "list-cell jumprange-cell";
              }
              return (
                <ListCell
                  cellIndex={index}
                  val={el}
                  key={"list-cell-" + index}
                  cellClass={cellClass}
                  handleChangeCellRange={this.handleChangeCellRange}
                  handleRemoveCell={this.handleRemoveCell}
                />
              );
            })}
          </ReactCSSTransitionGroup>
        </div>
        <div>
          <div className="minimum-jump-footer-result">
            {this.state.result ? `RESULT: ${this.state.result}` : null}
          </div>
          <div className="minimum-jump-footer-menu">
            <button onClick={this.handleReset}>Reset</button>
            <button onClick={this.handleAddCell}>Add Cell</button>
            <button onClick={this.handleRun}>Solve</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MinimumJump;
