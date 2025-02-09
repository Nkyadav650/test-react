import React, { useState } from "react";

import MUIDataTable from "mui-datatables";
import Checkbox from "@mui/material/Checkbox";

const Table = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const data = [
    ["","Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const handleCheckboxChange = (row) => {
    setSelectedRows(prevSelectedRows => {
      const isSelected = prevSelectedRows.some(selectedRow => JSON.stringify(selectedRow) === JSON.stringify(row));
      return isSelected ? prevSelectedRows.filter(selectedRow => JSON.stringify(selectedRow) !== JSON.stringify(row)) : [...prevSelectedRows, row];
    });
  };

  const columns = [
    {
      name: "Select",
      options: {
        customBodyRender: (value, tableMeta) => {
          const rowData = data[tableMeta.rowIndex];
          return (
            <Checkbox
              checked={selectedRows.some(selectedRow => JSON.stringify(selectedRow) === JSON.stringify(rowData))}
              onChange={() => handleCheckboxChange(rowData)}
            />
          );
        },
      },
    },
    "Name", "Company", "City", "State"
  ];

  const options = {
    filter: true,
    selectableRows: "none", // Disable default row selection
  };

  return (
    <div className="App wrapper">
      <h4>React MUI Datatable - FreakyJolly.com</h4>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />

      <h4>Selected Rows:</h4>
      <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
    </div>
  );
};

export default Table;
