import React, { useState, useEffect } from "react";
import StreamerForm from "./components/StreamerForm/StreamerForm";
import StreamerList from "./components/StreamerList/StreamerList";
import StreamerDetails from "./components/StreamerDetails/StreamerDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

const App = () => {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    fetchStreamers();
  }, []);

  const fetchStreamers = async () => {
    try {
      const response = await fetch("http://localhost:8080/streamers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setStreamers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <StreamerForm streamers={streamers} setStreamers={setStreamers} />
                <StreamerList streamers={streamers} setStreamers={setStreamers} />
              </>
            }
          />

          <Route path="/:streamerId" element={<StreamerDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
