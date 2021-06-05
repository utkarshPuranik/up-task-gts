import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/employee";


const Employee = ({ classes, ...props }) => {
    // const [currentId, setCurrentId] = useState(0)
    useEffect(() => {
        props.GetAllEmployee()
    }, [])//componentDidMount
    console.log(props.employeeList);
    return(
        <div style={{display: 'table', border: '1px Solid black'}}>
            <div key="-1" style={{display: 'table-row'}}>
                <div style={{display: 'table-cell', border: '1px Solid black', padding: '3px'}}>
                    Id
                </div>
                <div style={{display: 'table-cell', border: '1px Solid black', padding: '3px'}}>
                    Name
                </div>
                <div style={{display: 'table-cell', border: '1px Solid black', padding: '3px'}}>
                    Department
                </div>
            </div>
            {
                props.employeeList.map((record, index) => {
                    return (
                        <div key={index} style={{display: 'table-row'}}>
                            <div style={{display: 'table-cell', border: '1px Solid black', padding: '3px'}}>
                                { record.employeeId }
                            </div>
                            <div style={{display: 'table-cell', border: '1px Solid black', padding: '3px'}}>
                                { record.employeeName }
                            </div>
                            <div style={{display: 'table-cell', border: '1px Solid black', padding: '3px'}}>
                                { record.department.departmentName }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = state => ({
    employeeList: state.employeeReducer.employeeList
})

const mapActionToProps = {
    GetAllEmployee: actions.getAll,
    
}
export default connect(mapStateToProps, mapActionToProps)(Employee);