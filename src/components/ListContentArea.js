import React, { Component } from 'react';
import "./ListContentArea.css"

class ListContentArea extends Component {

    constructor(props) {
        super(props);

        //save list of objects with a name and content to state
        let initialState = {
            listItems: [
                {name: 'First List Item', content: <div>This is the detail area for the list item</div>},
                {name: 'First List Item', content: <div>This is the detail area for the list item</div>},
                {name: 'First List Item', content: <div>This is the detail area for the list item</div>},
                {name: 'First List Item', content: <div>This is the detail area for the list item</div>},
            ],
            test: "Test Name"
        }
        this.state = initialState;
    }

    render() {
        return (
            <div className="listContentArea">

                <div className="itemList">
                {this.state.listItems.map( (item, index) => {
                    return <div className="item" key={index}>item</div>
                })}
                </div>

                <div className="contentArea">
                    content area
                </div>
            </div>
        )
    }
}

export default ListContentArea;