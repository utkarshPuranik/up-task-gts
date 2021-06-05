import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/department";

const Department = ({ classes, ...props }) => {
    useEffect(() => {
        props.GetAllDepartments()
    }, [])
    console.log(props.departmentList);
    
    return(
        <div style={{display: 'table', border: '1px Solid black'}}>
            {
                props.departmentList.map((record, index) => {
                        return (<div key={index} style={{display: 'table-row'}}>
                            <div style={{display: 'table-cell', border: '1px Solid black', padding: '3px'}}>
                                { record.departmentId }
                            </div>
                            <div style={{display: 'table-cell', border: '1px Solid black', padding: '3px'}}>
                                { record.departmentName }
                            </div>
                        </div>);
                    }
                )
            }
        </div>
    );
}
const mapStateToProps = state => ({
    departmentList: state.departmentReducer.departmentList
})

const mapActionToProps = {
    GetAllDepartments: actions.getAll,
}

export default connect(mapStateToProps, mapActionToProps)(Department);