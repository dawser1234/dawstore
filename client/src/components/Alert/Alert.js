import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Alert() {
  const err = useSelector((state) => state.userReducer.errors);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    // Set displayError to true when there is an error
    if (err && Object.keys(err).length > 0) {
      setDisplayError(true);

      // Automatically hide the alert after 3 seconds (adjust the duration as needed)
      const timeoutId = setTimeout(() => {
        setDisplayError(false);
      }, 3000);

      // Clear the timeout if the component unmounts or if err changes
      return () => clearTimeout(timeoutId);
    }
  }, [err]);

  // Check if 'err' is undefined or null, and if displayError is true
  if (!err || !displayError) {
    return null; // Return null if there is no error or if not ready to display
  }

  return (
    <div>
      <p id='err_reg'>
        {err.msg ? (
          <p>{err.msg}</p>
        ) : err.errors ? (
          // Check if 'errors' array exists
          err.errors.length > 0 ? (
            // Check if there is at least one error message
            <p>{err.errors[0].msg}</p>
          ) : null
        ) : null}
      </p>
    </div>
  );
}

export default Alert;
