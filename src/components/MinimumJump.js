import React from 'react';
import ListCell from './ListCell';

class MinimumJump extends React.Component {
    constructor() {
        super();
        this.state = {
            inputList: [0,0,0,0]
        };
      }

      handleChangeCellRange = (e, index) =>{
          console.log(e.target.value);
          console.log(index);

           // check if integer
          if (/^-{0,1}\d+$/.test(e.target.value)){
          var newList = [...this.state.inputList];
          newList[index] = e.target.value;
          this.setState({
              inputList: newList
          })
        }
      }

      handleAddCell = () => {
        var newList = [...this.state.inputList];
        newList.push(0)
        this.setState({
            inputList: newList
        });
    }

    handleRun = () => {
        console.log("trigger algorithm");
    }
      
  render() {
      return (
        <div className="minimum-jump-wrapper">
            <div className="minimum-jump-body">
                <h1>Minimum Jump Calculation</h1>
                <h3>Please enter a list of cell ranges to calculate the shortest jump distance to the end of the list.</h3>
                    {
                        this.state.inputList.map((el, index) => {
                            return <ListCell cellIndex={index} val={el} handleChangeCellRange={this.handleChangeCellRange}/>
                        }
                        )
                    }
            </div>
            <div className="minimum-jump-footer-menu">
                <button onClick={this.handleAddCell}>Add</button>
                <button onClick={this.handleRun}>Run Algorithm</button>
            </div>
        </div>
      );
  }
}

export default MinimumJump;