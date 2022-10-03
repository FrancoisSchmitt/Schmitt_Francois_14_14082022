/* eslint-disable array-callback-return */
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { columns } from './Columns';

import './index.css';
import { useSelector } from 'react-redux';

/**
 * 
 * @const DataTableEmployee Table parameter
 */
const DataTableEmployee = () => {
      const options = {
            filter: false,
            download: false,
            selectableRowsHideCheckboxes: true,
            selectableRowsHeader: true,
            print: false,
            viewColumns: false,
            onRowsDelete: false,
      };
    /**
     * recover all data save in redux 
     */

      const employees = useSelector((state) => state?.employee?.data);
      const employeesArray = [];
      employees.map((employee) => {
            const data = [
                  employee?.LastName,
                  employee?.FirstName,
                  employee?.DateOfBirthdate,
                  employee?.Street,
                  employee?.City,
                  employee?.State,
                  employee?.ZipCode,
                  employee?.Departement,
                  employee?.StartDate,
            ];
            employeesArray.push(data);
      });

      const data = employeesArray;

      return (
            <section className="section-table">
                  <MUIDataTable
                        id="MUIDataTable"
                        className="container"
                        data={data}
                        columns={columns}
                        options={options}
                  />
            </section>
      );
};

export default DataTableEmployee;
