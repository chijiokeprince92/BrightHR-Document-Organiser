"use client";

import React from 'react';

const pdfLogo = '../assets/images/pdf.jpeg';
const csvLogo = '../assets/images/csv.jpeg';
const movieLogo = '../assets/images/movie.jpeg';
const folderLogo = '../assets/images/folder.jpeg';


const FileDisplay = ({ file }) => {

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return pdfLogo;
      case 'doc':
        return folderLogo;
      case 'csv':
        return csvLogo;
      case 'mov':
        return movieLogo;
      default:
        return '';
    }
  };

  return (
    <div
      key={file.name}
      className="w-full sm:w-1/4 bg-white border border-gray-200 rounded-lg h-48 m-2">
      <img className="object-cover w-full h-28" src={getFileIcon(file.type)} alt={file.name} />

      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{file.name}</p>
        <p className="mb-3 font-normal text-gray-700">Date Uploaded: {file.added}</p>
      </div>
    </div>
  );
};

export default FileDisplay;
