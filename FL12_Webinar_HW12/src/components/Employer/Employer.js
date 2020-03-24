import React from "react";

const Employer = ({empl}) => {
    return (<li>
        <p>Name: {empl.name}</p>
        <p>Performance: {empl.performance}</p>
        <p>Date: {empl.last_vacation_date}</p>
        <p>Salary: {empl.salary}</p>
        {empl.children && <ul>
            {empl.children.map(item => <Employer key={item.id} empl={item} />)}
        </ul>}
    </li>)
};

export default Employer;
