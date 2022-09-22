/* eslint-disable array-callback-return */
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { columns } from './Columns';

import './index.css';
import { useSelector } from 'react-redux';

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
      const dataFromLocalStorage = () => {
            const dataLS = localStorage.getItem('reduxState');
            if (dataLS) {
                  return JSON.parse(dataLS);
            } else {
                  return [];
            }
      };

      const employees = useSelector((state) => state?.employee?.data);
      console.log(employees);
      const employeesArray = [];
      const newData = dataFromLocalStorage();
      console.log(newData);

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
