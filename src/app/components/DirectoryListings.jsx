"use client";

import FileDisplay from './FileDisplay';
const folderLogo = '../assets/images/folder.jpeg';

const DirectoryListings = ({ list, onHandleFolderClick }) => {
  const handleFolderClick = (itemName) => {
    const selectedItem = list.find((item) => item.name === itemName);

    onHandleFolderClick(selectedItem.files)
  };

  const displayList = (data) => {
    return data.map((item, index) => {
      if (item.type === 'folder') {
        return (
          <div
            key={`file-${item.name}-index-${index}`}
            className="w-full sm:w-1/4 bg-white border border-gray-200 rounded-lg h-48 m-2">
            <img className="object-cover w-full h-28" src={folderLogo} alt={item.name} />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.name}
              </p>
              <a
                className="mb-3 font-normal text-gray-400 cursor-pointer"
                onClick={() => handleFolderClick(item.name)}
              >
                Click to view files
              </a>
            </div>
          </div>
        );
      } else {
        return (
          <FileDisplay file={item} key={`file-${item.name}-index-${index}`}/>
        )
      }
    });
  };

  return (
    <div className="w-full flex flex-row flex-wrap">
      {displayList(list)}
    </div>
  );
};

export default DirectoryListings;