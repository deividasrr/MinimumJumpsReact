import React from 'react';
import ListCell from './ListCell';
import handleRun from "./MinimumJumpAlgorithm";

class MinimumJump extends React.Component {
    constructor() {
        super();
        this.state = {
            inputList: [0,0,0,0],
            result: null
        };
      }

      handleChangeCellRange = (e, index) =>{
           if (/^-{0,1}\d+$/.test(e.target.value)){
          if (!e.target.value){
            e.target.value = 0;
            };
          let newList = [...this.state.inputList];
          newList[index] = parseInt(e.target.value) // parse to get rid of possible leading zeroes
          this.setState({
              inputList: newList
          })
        }
      }

      handleAddCell = () => {
        let newList = [...this.state.inputList];
        newList.push(0);
        this.setState({
            inputList: newList
        });
    }

    handleRemoveCell = (index) => {
        var newList = [...this.state.inputList];
        newList.splice(index, 1);
        this.setState({
            inputList: newList
        }); 
    }


    handleRunWrapper = () => {
        this.setState({result: handleRun(this.state.inputList)});
    }
      
  render() {
      return (
        <div className="minimum-jump-wrapper">
            <div className="minimum-jump-body">
                <h1>Minimum Jump Calculation</h1>
                <h3>Please enter a list of cell ranges to calculate the shortest jump distance to the end of the list.</h3>
                    <div className="list-cell-wrapper">
                    {
                        this.state.inputList.map((el, index) => {
                            return <ListCell cellIndex={index} val={el}
                            key={"list-cell-"+index}
                            handleChangeCellRange={this.handleChangeCellRange}
                            handleRemoveCell={this.handleRemoveCell}
                            />
                        })
                    }
                    </div>
            </div>
                <div>{this.state.result ? `RESULT: ${this.state.result}` : null}</div>
            <div className="minimum-jump-footer-menu">
                <button onClick={this.handleAddCell}>Add</button>
                <button onClick={this.handleRunWrapper}>Run Algorithm</button>
            </div>
        </div>
      );
  }
}

export default MinimumJump;