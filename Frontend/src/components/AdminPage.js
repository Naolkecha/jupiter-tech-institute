import React, { useEffect, useState } from 'react';

const AdminPage = ({ token }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the protected admin route
    const fetchData = async () => {
      const response = await fetch('/api/admin', {
        headers: {
          'Authorization': token,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h2>Admin Page</h2>
      <p>{message}</p>
    </div>
  );
};

export default AdminPage;
