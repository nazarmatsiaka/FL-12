import React, { Component } from 'react';
import {treeByPerfomance} from "../../utils/getTree";
import Employer from "../Employer/Employer";

class AllUnits extends Component {
    constructor() {
        super();
        this.state = {tree: []}

    }

    componentDidMount() {
        fetch('https://roman4ak.github.io/fe-oop-lab/mocks/epms.json')
            .then(data => data.json())
            .then(data => this.setState({tree: treeByPerfomance(this.filterArr(data))}));
    }

    filterArr(arr) {
        return arr.filter(item => item.performance === 'average');
    }

    render() {
        return (<ul>
            {this.state.tree.map(item =>
                <Employer key={item.id} empl={item}/>
            )}
        </ul>)
    }
}

export default AllUnits;
// this.setState({tree: arrayToTree(this.filterArr(data))})
