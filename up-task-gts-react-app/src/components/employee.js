import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, ButtonGroup, Button } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/employee";
import EmployeeForm from './employeeForm';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Employee = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)
    const { addToast } = useToasts();
    useEffect(() => {
        props.GetAllEmployees()
    }, [])
    
    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            props.deleteEmployee(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
            props.GetAllEmployees()
        }
    }

    return(
        <Paper className={classes.paper}>
            <h1>Employees</h1>
            <Grid container>
                <Grid item xs={8}>
                    <TableContainer>
                        <Table>
                            <TableHead  className={classes.root}>
                                <TableRow>
                                    <TableCell width={20}>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell width={200}>Department</TableCell>
                                    <TableCell width={20}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.employeeList.map((record, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>{record.employeeId}</TableCell>
                                                <TableCell>{record.employeeName}</TableCell>
                                                <TableCell>{record.department.departmentName}</TableCell>
                                                <TableCell>
                                                    <ButtonGroup variant="text">
                                                        <Button><EditIcon color="primary"
                                                            onClick={() => { setCurrentId(record.employeeId) }} /></Button>
                                                        <Button><DeleteIcon color="secondary"
                                                            onClick={() => onDelete(record.employeeId)} /></Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <EmployeeForm {...({ currentId, setCurrentId })} />                    
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
    employeeList: state.employeeReducer.employeeList
})

const mapActionToProps = {
    GetAllEmployees: actions.getAll,
    deleteEmployee: actions.Delete,    
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Employee));