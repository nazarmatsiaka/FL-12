import React, { Component, Fragment } from 'react';
import Employer from "../Employer/Employer";

class Warning extends Component {
    constructor() {
        super();
        this.state = {users: [], performance: 'none', salary: 'none'}

    }

    componentDidMount() {
        fetch('https://roman4ak.github.io/fe-oop-lab/mocks/epms.json')
            .then(data => data.json())
            .then(data => this.setState({users: data}));
    }

    editPerfomance = event => {
        this.setState({performance: event.target.value});
    };
    editSalery = event => {
        this.setState({salary: event.target.value});
    };

    middleSalery = () => {
        let summ = this.state.users.reduce((sum, user) => sum + user.salary, 0);

        return summ/this.state.users.length;
    }

    filterArr = (perf, salary) => {
        let arr = this.state.users;

        if(perf !== 'none') {
            arr = arr.filter(user => user.performance === perf);
        }

        if(salary !== 'none') {
            let middleSalery = this.middleSalery();
            console.log(middleSalery);

            if(salary === 'low'){
                arr = arr.filter(user => user.salary < middleSalery);
            } else if(salary === 'top') {
                arr = arr.filter(user => user.salary > middleSalery);
            }
        }

        return arr;
    }

    render() {
        return (<Fragment>
            <div className="inp_blick">
                <div>
                    Perfomance:
                    <select name="" onChange={this.editPerfomance} value={this.state.performance}>
                        <option value="none">--------</option>
                        <option value="low">low</option>
                        <option value="average">average</option>
                        <option value="top">top</option>
                    </select>
                </div>
                <div>
                    Salery:
                    <select name="" onChange={this.editSalery} value={this.state.salery}>
                        <option value="none">--------</option>
                        <option value="top">more than average</option>
                        <option value="low">less than average</option>
                    </select>
                </div>
            </div>
            <ul>
                {this.filterArr(this.state.performance, this.state.salary).map(user => <Employer key={user.id} empl={user} />)}
            </ul>
        </Fragment>)
    }
}

export default Warning;
