import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState("john");
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) { // Check for response status
            throw Error("could not fetch the data from that resource");
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setPending(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => {
      abortCont.abort(); // Cleanup function to abort fetch
    };
  }, [url]);

  return { blogs, pending, error };
};

export default useFetch;
