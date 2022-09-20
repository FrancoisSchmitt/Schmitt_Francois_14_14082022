/* eslint-disable array-callback-return */
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { columns } from './Columns';
import './index.css'

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
      const employeesArray = [];
      const newData = dataFromLocalStorage();
      console.log(newData);

      newData.map((employee) => {
            const data = [
                  employee?.LastName?.payload,
                  employee?.FirstName?.payload,
                  employee?.DateOfBirthdate?.payload,
                  employee?.Street?.payload,
                  employee?.City?.payload,
                  employee?.State?.payload,
                  employee?.ZipCode?.payload,
                  employee?.Departement?.payload,
                  employee?.StartDate?.payload,
            ];
            employeesArray.push(data);
      });

      const data = employeesArray;

      return (
            <section className='section-table'>
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
