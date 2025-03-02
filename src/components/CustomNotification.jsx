import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./Notification.css"; // Import the CSS file

const CustomNotification = () => {
  const [visible, setVisible] = useState(false);

  const showNotification = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000); // Auto-close after 5 seconds
  };

  return (
    <div className="text-center mt-3">
      <button className="btn btn-primary" onClick={showNotification}>
        Show Notification
      </button>

      {visible && (
        <div className="notification alert alert-danger d-flex justify-content-between align-items-center">
          <span className="fw-bold">The file has been Rejected</span>
          <button className="btn-close" onClick={() => setVisible(false)}></button>
        </div>
      )}
    </div>
  );
};

export default CustomNotification;




// without bootstrap

// import React, { useState } from "react";
// import "./Notification.css"; // Import the CSS file

// const CustomNotification = () => {
//   const [visible, setVisible] = useState(false);

//   const showNotification = () => {
//     setVisible(true);
//     setTimeout(() => {
//       setVisible(false);
//     }, 5000); // Auto-close after 5 seconds
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <button onClick={showNotification} style={{ padding: "10px 20px" }}>
//         Show Notification
//       </button>

//       {visible && (
//         <div className="notification">
//           <span>The file has been Rejected</span>
//           <button onClick={() => setVisible(false)} className="close-button">
//             &times;
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomNotification;
