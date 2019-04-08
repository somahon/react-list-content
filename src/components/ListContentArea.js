import React, { Component } from 'react';
import "./ListContentArea.css"

class ListContentArea extends Component {

    constructor(props) {
        super(props);

        //save list of objects with a name and content to state
        let initialState = {
            listItems: [
                {name: 'First List Item', content: <div>1 This is the detail area for the list item</div>},
                {name: 'Second List Item', content: <div>2 This is the detail area for the list item</div>},
                {name: 'Third List Item', content: <div>3 This is the detail area for the list item</div>},
                {name: 'Fourth List Item', content: <div>4 This is the detail area for the list item</div>},
            ],
            test: "Test Name",
            currentlySelected: null,
        }
        this.state = initialState;
    }

    setCurrentlySelected = (item) => {
        this.setState(() => {
            return { currentlySelected: item.content }
        });
    }

    render() {
        return (
            <div className="listContentArea">

                <div className="itemList">
                {this.state.listItems.map( (item, index) => {
                    return <div className="item" key={index} onClick={this.setCurrentlySelected.bind(this, item)}>{item.name} </div>
                })}
                </div>

                <div className="contentArea">
                    {this.state.currentlySelected}
                </div>
            </div>
        )
    }
}

export default ListContentArea;