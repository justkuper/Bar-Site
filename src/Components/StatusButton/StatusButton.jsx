import React, { useEffect, useState } from 'react';
import './StatusButton.css';

function StatusButton() {
  const [status, setStatus] = useState("Currently Closed");
  const [isOpen, setIsOpen] = useState(false);

  const updateButtonStatus = () => {
    const now = new Date();
    const hours = now.getHours();

    // Define open and closed time ranges
    const openStatus = (hours >= 12 || hours < 1);

    if (openStatus) {
      setStatus("Currently Open");
      setIsOpen(true);
    } else {
      setStatus("Currently Closed");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    updateButtonStatus();
    const interval = setInterval(updateButtonStatus, 60000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <button id="statusButton" className={`btn-block ${isOpen ? "" : "closed"}`}>
      {status}
    </button>
  );
}

export default StatusButton;
