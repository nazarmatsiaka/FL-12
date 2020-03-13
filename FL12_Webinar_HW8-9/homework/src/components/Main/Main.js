import React, {Component, Fragment} from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Main.css';
import DropDownBtn from '../DropDownBtn/DropDownBtn';

class Main extends Component {
    constructor() {
        super();
        this.state = {searchValue: ''}
    }

    filterArr = arr => {
        if(this.state.searchValue) {
            return arr.filter(item =>
                item.title.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
            );
        }

        return arr;
    };

    formatDate = date => {
        let [day, mon, year] = date.split('.');

        return day + '.' + mon + '.' + year%100;
    }

    editSearchInput = e => {
        this.setState({searchValue: e.target.value});
    };

    render() {
        return (
            <Fragment>
                <div className="main__header">
                    <input className="searchInput" placeholder="Search" onInput={this.editSearchInput}/>
                    <Link className="addBtn" to="/addCourse">Add course</Link>
                </div>
                <div className="coursesBlock">
                    <ul>
                        {this.filterArr(this.props.courses).map(item => (
                            <li key={item.id} className="list__item">
                                <div className="startDate">{this.formatDate(item.startDate)}</div>
                                <div className="title">{item.title}</div>
                                <div className="description">{item.description}</div>
                                <div className="duration">{item.duration}</div>
                                <DropDownBtn courseId={item.id} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        )
    };
}

const mapStateToProps = (state) => ({
    courses: state.courses
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
