import React, {Component} from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {deleteItem} from "../../actions/actions";

import './DropDowpBtn.css';

import editLogo from '../../edit.svg'
import deleteLogo from '../../delete.svg'

class DropDownBtn extends Component {
     render() {
         return (
             <div className="dropDown">
                 <p className="dropDown_txt">&#183;&#183;&#183;</p>
                 <div className="dropdown_content">
                     <Link className="dropDown_link" to={`/edit/${this.props.courseId}`}>
                         <img src={editLogo} alt=""/>
                         Edit
                     </Link>
                     <span className="dropDown_link" onClick={this.props.deleteItem(this.props.courseId)}>
                         <img src={deleteLogo} alt=""/>
                         Delete
                     </span>
                 </div>
             </div>
         )
     }
}

const mapDispatchToProps = dispath => ({
    deleteItem:(id) => () =>  dispath(deleteItem(id))
});

export default connect(null, mapDispatchToProps)(DropDownBtn);
