import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import formHelper from "./formHelper";
import { connect } from "react-redux";
import * as actions from "../actions/employee";
import * as departmentActions from "../actions/department"
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
            border: 1
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    employeeName: '',
    departmentId: ''
}

const EmployeeForm = ({ classes, ...props }) => {

    //toast msg.
    const { addToast } = useToasts()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('employeeName' in fieldValues)
            temp.employeeName = fieldValues.employeeName ? "" : "This field is required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = formHelper(initialFieldValues, validate, props.setCurrentId)

    //material-ui select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
        props.getAllDepartments();
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                props.getAllEmployees()
                addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId == 0)
                props.createEmployee(values, onSuccess)
            else
                props.updateEmployee(props.currentId, values, onSuccess)
        }
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.employeeList.find(x => x.employeeId == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <p><i>Create or update employee information</i></p>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="employeeName"
                        variant="outlined"
                        label="Employee Name"
                        value={values.employeeName}
                        onChange={handleInputChange}
                        {...(errors.employeeName && { error: true, helperText: errors.employeeName })}
                    />
                    <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.departmentId && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Department</InputLabel>
                        <Select
                            name="departmentId"
                            value={values.departmentId}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem key={-1} value="">Select Department</MenuItem>
                            {
                                props.departmentList.map((record, index) => {
                                    return (
                                        <MenuItem key={index} value={record.departmentId}>{record.departmentName}</MenuItem>
                                    );
                                })
                            }
                        </Select>
                        {errors.departmentId && <FormHelperText>{errors.departmentId}</FormHelperText>}
                    </FormControl>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}


const mapStateToProps = state => ({
    employeeList: state.employeeReducer.employeeList,
    departmentList: state.departmentReducer.departmentList

})

const mapActionToProps = {
    createEmployee: actions.create,
    updateEmployee: actions.update,
    getAllEmployees: actions.getAll,
    getAllDepartments: departmentActions.getAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(EmployeeForm));