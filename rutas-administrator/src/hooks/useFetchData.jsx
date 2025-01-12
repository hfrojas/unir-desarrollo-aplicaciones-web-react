import { useState, useEffect } from 'react';

const useFetchData = (url, shouldReload) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error fetching data');
        }        
        setStatus(response.status);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    if (shouldReload) {
      fetchData();
    }

    fetchData();
  }, [url, shouldReload]);

  return { data, loading, error, status };
};

export default useFetchData;
