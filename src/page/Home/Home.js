import { Button, Grid, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Home.css";
import getallAsset from "../../apis/getData/getData";

function Home() {
  // api data
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const apiData = await getallAsset();
      setData(apiData);
      console.log(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //order alphabetically list
  const sortData = (order) => {
    const sortedData = [...data].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (order === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setData(sortedData);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="button-container">
            <Button
              variant="outlined"
              className="button"
              onClick={() => sortData("asc")}
            >
              A-Z
            </Button>
            <Button variant="outlined" onClick={() => sortData("desc")}>
              Z-A
            </Button>
          </div>
          <div>
            {data?.map((person, index) => (
              <ol key={index}>
                <li>name: {person.name}</li>
                <li>age: {person.email}</li>
              </ol>
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
