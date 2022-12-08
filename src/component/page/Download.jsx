import React from "react";
import { useGlobalContext } from "../../Helpers/context";

const Download = () => {
  const { Sdownload } = useGlobalContext();
  return (
    <>
      <div className="center-subheading" id="Downloads_container">
        {Sdownload.map((curElem) => {
          const { Download, Download_title, Key } = curElem;
          return (
            <>
              <h3 Key={Key} class="center-subheading">
                {Download_title}
              </h3>
              <a href={Download} class="download-btn">
                Download
              </a>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Download;
