import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, ButtonGroup, Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { CropLandscapeSharp } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/department";
import DepartmentForm from './departmentForm';
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

const Department = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)
    const { addToast } = useToasts();
    useEffect(() => {
        props.GetAllDepartments()
    }, [])
    
    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            props.deleteDepartment(id,()=> {
                addToast("Deleted successfully", { appearance: 'info' })
                props.GetAllDepartments()
            })
        }
    }

    return(
        <Paper className={classes.paper} elevation={3}>
            <h1>Department</h1>
            <Grid container>
                <Grid item xs={8}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell width={20}>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell width={20}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.departmentList.map((record, index) => {
                                        return (
                                            <TableRow key={index} hover>
                                                <TableCell>{ record.departmentId }</TableCell>
                                                <TableCell>{ record.departmentName }</TableCell>
                                                <TableCell>
                                                    <ButtonGroup variant="text">
                                                        <Button><EditIcon color="primary"
                                                            onClick={() => { setCurrentId(record.departmentId) }} /></Button>
                                                        <Button><DeleteIcon color="secondary"
                                                            onClick={() => onDelete(record.departmentId)} /></Button>
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
                    <DepartmentForm {...({ currentId, setCurrentId })} />
                </Grid>
            </Grid>
        </Paper>
    );
}
const mapStateToProps = state => ({
    departmentList: state.departmentReducer.departmentList
})

const mapActionToProps = {
    GetAllDepartments: actions.getAll,
    deleteDepartment: actions.Delete,
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Department));