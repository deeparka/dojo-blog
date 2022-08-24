import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Couldn't fetch the data");
                    }
                    return res.json();
                })
                .then((data) => {
                    // console.log(data);
                    setData(data);
                    console.log(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("Fetch aborted");
                    } else {
                        // console.log(err.message);
                        setError(err.message);
                        setIsPending(false);
                    }
                });
        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
