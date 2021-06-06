import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import FormHelper from "./formHelper";
import { connect } from "react-redux";
import * as actions from "../actions/department";
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        padding: theme.spacing(5),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    departmentName: ''
}

const DepartmentForm = ({ classes, ...props }) => {

    const { addToast } = useToasts()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('departmentName' in fieldValues)
            temp.departmentName = fieldValues.departmentName ? "" : "Name is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = FormHelper(initialFieldValues, validate, props.setCurrentId)

    //material-ui select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current. ?? labelWidth);
    // }, []);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                props.getAllDepartments() 
                addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId == 0)
                props.createDepartment(values, onSuccess)
            else {
                console.log(values);
                props.updateDepartment(props.currentId, values, onSuccess)
            }
        }
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.departmentList.find(x => x.departmentId == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <p><i>Create or update department information</i></p>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        name="departmentName"
                        variant="outlined"
                        label="Department Name"
                        value={values.departmentName}
                        onChange={handleInputChange}
                        {...(errors.departmentName && { error: true, helperText: errors.departmentName })}
                    />
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
    departmentList: state.departmentReducer.departmentList
})

const mapActionToProps = {
    createDepartment: actions.create,
    updateDepartment: actions.update,
    getAllDepartments: actions.getAll,
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DepartmentForm));