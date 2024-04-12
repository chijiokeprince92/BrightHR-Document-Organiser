"use client"

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DirectoryListings from './components/DirectoryListings';
import initialData from './Uploaded_folders.json';


const Home = () => {
  const sortItemsCategories = [
    { name: 'Name (A - Z)', field: 'name', sortOrder: 'asc', id: 1 },
    { name: 'Name (Z - A)', field: 'name', sortOrder: 'desc', id: 2 },
    { name: 'Date Added (Old to New)', field: 'added', sortOrder: 'asc', id: 3 },
    { name: 'Date Added (New to Old)', field: 'added', sortOrder: 'desc', id: 4 },
    { name: 'Size (Small to Big)', field: 'size', sortOrder: 'asc', id: 5 },
    { name: 'Size (Big to Small)', field: 'size', sortOrder: 'desc', id: 6 }
  ];

  const [stack, setStack] = useState([initialData]);
  const [currentList, setCurrentList] = useState(initialData);
  const [filteredList, setFilteredList] = useState([]);
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterText, setFilterText] = useState('');
  const [sortOptions, setSortOptions] = useState(sortItemsCategories[0]);

  useEffect(() => {
    const lastStackItem = stack[stack.length - 1];
    if (lastStackItem) {
      setSortField('name');
      setSortOrder('asc');
      setFilterText('');
      setSortOptions(sortItemsCategories[0]);
      setCurrentList(lastStackItem);
    }
  }, [stack]);

  useEffect(() => {
    const sortedList = [...currentList];
    const modifier = sortOrder === 'asc' ? 1 : -1;

    const filteredFiles = sortedList.filter((item) => {
      if (!filterText) return true;

      return item.name.toLowerCase().includes(filterText);
    });


    filteredFiles.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return -1 * modifier;
      }
      if (a[sortField] > b[sortField]) {
        return 1 * modifier;
      }
      return 0;
    });

    setFilteredList(filteredFiles);

  }, [filterText, sortField, sortOrder, currentList]); 

  const handleBackClick = () => {
    if (stack.length === 1) return;
    stack.pop();
    setStack([...stack]);
  };

  const handleFolderClick = (newCurrentList) => {
    const currentStack = [...stack, newCurrentList];
    setStack(currentStack);
  };

  const handleTextSearch = (event) => {
    const { target: { value } } = event;
    setFilterText(value.toLowerCase());
  };

  const handleSortChange = (event) => {
    const { target: { value } } = event;
    const selectedSortItem = sortItemsCategories.find((item) => item.id === Number(value));
    setSortOptions(selectedSortItem);
    setSortField(selectedSortItem.field);
    setSortOrder(selectedSortItem.sortOrder);
  };

  return (
    <div className="h-full">
      <Navbar />
      <section className="body-font p-4">
        <h1 className="mb-4 text-4xl text-center m-5 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Welcome to Bright HR
        </h1>
        <h5>This is a place where all your folders and files are organized and you can easily search for a specific items.</h5>
        <h5 className="mb-4"> You can also sort them by name, date uploaded and file type.</h5>

        <div className="w-full flex flex-col sm:flex-row mb-8 ">
          <button
            type="button"
            className={"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" +  (stack.length === 1 ? ' cursor-not-allowed hover:bg-white' : '') }
            onClick={handleBackClick}
            disabled={stack.length === 1}
          >
            Go Back
          </button>

          <div className="w-96 mx-1 flex flex-row items-center px-1">
            <label htmlFor="search" className="mr-2">Search: </label>
            <input
              id="search"
              value={filterText}
              onInput={handleTextSearch}
              className="
                focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              placeholder="Filter files/Folders..." />
          </div>
          <div className="w-96 ml-1 flex flex-row items-center px-1">
            <label htmlFor="search" className="mr-2">Sort By: </label>
            <select
              onChange={handleSortChange}
              id="sort-options"
              value={sortOptions.id}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              {sortItemsCategories.map((item, index) => (
                <option
                  key={`${item.field}-${index}`}
                  value={item.id} >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      
        <DirectoryListings
          list={filteredList}
          onHandleFolderClick={handleFolderClick}
        />
      </section>
      <Footer />
    </div>
  )
}

export default Home;
