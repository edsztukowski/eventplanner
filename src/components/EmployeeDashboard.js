import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { connect } from 'react-redux';

export const EmployeeDashboard = (props) => (
    <div>
   <h2>Employee Management Portal</h2>
    <Table className="testTable">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Hourly Rate</TableCell>
            <TableCell>Remaining PTO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.employees.map((employee) => (
            <TableRow>
                <TableCell component="th" scope="row">
                    {employee.firstName}
                </TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.age}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.hourlyWage}</TableCell>
                <TableCell>{employee.remainingPTO}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>


     
    </div>
)

const mapStateToProps = (state) => {
    return {
      employees: state.employees
    };
  };


export default connect(mapStateToProps)(EmployeeDashboard);