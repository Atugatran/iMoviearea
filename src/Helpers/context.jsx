import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

// Search queries
const url = window.location.search;
const urlquery = new URLSearchParams(url);
const urlKey = urlquery.get("Key");

const API = `https://atugatran-projects.github.io/_Apis/Movies/index.json`;

const intialState = {
  Amovies: [],
  Smovies: [],
  Sdownload: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  //  to get the api data
  const getProjects = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_PROJECTS", payload: data });
    } catch (error) {
      // console.log(error);
    }
  };

  const getSingleProjects = async (query) => {
    var Single;
    var Downloads;
    try {
      const res = await fetch(API);
      const data = await res.json();
      data.map((i) => {
        const { Key } = i;
        let ApiId = Key;
        // console.log(ApiId);
        if (ApiId === query) {
          Single = data[ApiId - 1];
          Downloads = data[query - 1].downloads;
          // console.log(Downloads);
        }
      });
      dispatch({ type: "GET_SINGLE_PROJECTS", payload: Single });
      dispatch({ type: "GET_DOWNLOAD_PROJECTS", payload: Downloads });
    } catch (error) {
      // console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getProjects(API);
    // getSingleProjects(API);
  }, [1000]);

  return (
    <AppContext.Provider value={{ ...state, getSingleProjects }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hookz
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
