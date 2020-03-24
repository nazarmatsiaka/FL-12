import React, { Component } from 'react';

import Employer from "../Employer/Employer";
import { arrayToTree } from '../../utils/getTree';

class AllEmployees extends Component {
    constructor() {
        super();
        this.state = {tree: []}

    }

    componentDidMount() {
        fetch('https://roman4ak.github.io/fe-oop-lab/mocks/epms.json')
            .then(data => data.json())
            .then(data => this.setState({tree: arrayToTree(data)}));
    }

    render() {
        return <ul>
            {this.state.tree.map(item =>
                    <Employer key={item.id} empl={item}/>
                )}
        </ul>
    }
}

export default AllEmployees;
