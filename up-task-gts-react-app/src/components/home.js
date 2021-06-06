import {Paper, withStyles} from '@material-ui/core'

const styles = theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})


const Home = ({ classes, ...props }) => {
    return (
        <Paper className={classes.paper} elevation={3}>
            <h2>Home</h2>
            <p>This is a app created for Full stack developer task for IBM as per below requirements.</p>
            
            <strong>Requirements: </strong>
            <i><ul>
                <li>Create a simple .NET Core Web API back-end with SQLServer database.</li>
                <li>Database should contain 2 tables:
                    <ul>
                        <li>“Departments” (DeptId, DeptName)</li>
                        <li>“Employees” (Id, Name, Dept).</li>
                    </ul>
                </li>
                <li>Configure the Web API to be able to perform all CRUD operations (GET, POST, PATCH, etc.) on these 2 tables.</li>
                <li>Create a front-end web app for the API using the front-end Javascript framework of your choice: Angular, React, Vue, etc.</li>
                <li>The front-end should display the data from these 2 tables, as well be able to perform all regular CRUD operations: Add/Update/Delete, etc.</li>
                <li>Please deploy the completed application to Microsoft Azure, or web hosting platform of your choice. Also, please send us a link to the repo of the code.</li>
            </ul></i>

            <strong>Summary</strong>
            <p>Chosen Front End - React with Redux</p>
            <p>Source Code - <a href="https://github.com/utkarshPuranik/up-task-gts">https://github.com/utkarshPuranik/up-task-gts</a></p>
        </Paper>
    );
  }

  
export default (withStyles(styles)(Home));