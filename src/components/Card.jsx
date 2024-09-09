import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";

export default function Card() {
  const matches = useMediaQuery("(min-width: 1024px)");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setError(null);
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <>
          <p className="id">ADVICE #{data?.slip.id}</p>
          <p className="advice">"{data?.slip.advice}"</p>
        </>
      )}

      {!matches ? (
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      ) : (
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      )}

      <div onClick={handleClick} className="btn">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </div>
    </div>
  );
}
