import React, {Component} from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getNewId from "../../utils/getNewId";
import './CourseForm.css';

import { addNewCourse, editCourse } from '../../actions/actions';

class CourseForm extends Component{
    constructor() {
        super();
        this.state = {course: {
                id: NaN,
                title: '',
                description: '',
                authors: '',
                duration: '',
                startDate: ''
            }, page: ''};
    }

    componentDidMount() {
        let page = this.props.match.url.match(/\/(\w*)/)[1];
        if(page === 'edit') {
            this.setState({
                course: this.props.courses.filter(item => item.id === Number(this.props.match.params.courseId))[0],
                page
            });
        } else if(page === 'addCourse') {
            this.setState({
                course: {...this.state.course, id: getNewId(this.props.courses)},
                page
            });
        }
    }

    submit = e => {
        e.preventDefault();
        if(this.state.page === 'edit') {
            this.props.editCourse(this.state.course);
        } else if( this.state.page === 'addCourse') {
            this.props.addNewCourse(this.state.course);
        }

        this.props.history.push('/');
    };

    changeTitle = e => {
        this.setState({course: {...this.state.course, title: e.target.value}})
    };
    changeDescription = e => {
        this.setState({course: {...this.state.course, description: e.target.value}})
    };
    changeDuration = e => {
        this.setState({course: {...this.state.course, duration: e.target.value}})
    };
    changeAuthor = e => {
        this.setState({course: {...this.state.course, authors: e.target.value}})
    };
    changeDate = e => {
        this.setState({course: {
            ...this.state.course,
            startDate: e.target.value.split('-').reverse().join('.')
        }});
    };

    render() {
        let date = this.state.course.startDate.split('.').reverse().join('-');
        return (
            <div className="pageContainer">
                {this.state.page === 'addCourse' && <h1>New Course</h1>}
                {this.state.page === 'edit' && <h1>Edit</h1>}
                <form onSubmit={this.submit}>
                    <div>
                        <label htmlFor="titleInput">Title*</label>
                        <input type="text"
                               id="titleInput"
                               value={this.state.course.title}
                               onChange={ this.changeTitle }
                               required />
                    </div>
                    <div>
                        <label htmlFor="titleInput">Descroption*</label>
                        <textarea value={this.state.course.description}
                                  onChange={ this.changeDescription }
                                  rows="5"
                                  id="titleInput"
                                  required></textarea>
                    </div>
                    <div>
                        <label htmlFor="durationInput">Duration*</label>
                        <input type="text"
                               id="durationInput"
                               value={this.state.course.duration}
                               onChange={ this.changeDuration }
                               required/>
                    </div>
                    <div>
                        <label htmlFor="authorInput">Author*</label>
                        <input type="text"
                               id="authorInput"
                               value={this.state.course.authors}
                               onChange={ this.changeAuthor }
                               required/>
                    </div>
                    <div>
                        <label htmlFor="dateInput">Date*</label>
                        <input type="date"
                               value={date}
                               id="dateInput"
                               onChange={this.changeDate}
                               required/>
                    </div>

                    <div className="btnGroup">
                        <button type="submit" className="btn btn_submit">Save</button>
                        <Link className="btn btn_cancel" to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    courses: state.courses
});
const mapDispatchToProps = dispatch => ({
    editCourse: (courseObj) => dispatch(editCourse(courseObj)),
    addNewCourse: (courseObj) => dispatch(addNewCourse(courseObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm);
