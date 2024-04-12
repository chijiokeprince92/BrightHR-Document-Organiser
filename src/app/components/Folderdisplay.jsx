import React, { useState, useEffect } from 'react';

import Filedisplay from "./Filedisplay.jsx";
const folderLogo = '../assets/images/folder.jpeg';


const FolderDisplay = ({ folder }) => {
  const [viewFiles, setViewFiles] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles([folder.files])
  }, [])

  
  return (
    <div key={folder.name} onClick={() => setViewFiles(!viewFiles)} class="p-5">
      <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={folderLogo} alt="image" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{folder.name}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Click to view files</p>
        </div>
      </div>
      {viewFiles && (
          <div>
            {files.map((item) => (
              <Filedisplay file={item}/>
            ))}
          </div>
      )}
    </div>
  );
};

export default FolderDisplay;