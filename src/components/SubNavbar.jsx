import './subnav.css';
import React, {  useRef } from "react";

const SubNavbar = () => {

  return (
    <div className="table-container">
      <div className="table-wrapper" >
        <table className="custom-table">
          <thead>
            <tr>
              <th className="fixed-col left-first">Asset Name</th>
              <th className="fixed-col left-second">Submitted By</th>
              <th className="scrollable-col">Type</th>
              <th className="scrollable-col">Tool</th>
              <th className="scrollable-col">Category</th>
              <th className="scrollable-col">Department</th>
              <th className="scrollable-col">Location</th>
              <th className="scrollable-col">Owner</th>
              <th className="fixed-col right-second-last">Approval Status</th>
              <th className="fixed-col right-last">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td className="fixed-col left-first">raw/abcd/finance</td>
                <td className="fixed-col left-second">Balasubramanian Sayee</td>
                <td className="scrollable-col">Classifier {index + 1}</td>
                <td className="scrollable-col">DAM</td>
                <td className="scrollable-col">Finance</td>
                <td className="scrollable-col">Accounts</td>
                <td className="scrollable-col">NYC</td>
                <td className="scrollable-col">John Doe</td>
                <td className="fixed-col right-second-last">
                  {index % 2 === 0 ? (
                    <span className="status approved">Approved</span>
                  ) : (
                    <span className="status rejected">Rejected</span>
                  )}
                </td>
                <td className="fixed-col right-last">Checked by Manager</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubNavbar;
