"use client";

import image from "../img/logo.jpg";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";

import React, { useState } from "react";
import Image from "next/image";
import { CloseCircleTwoTone, SearchOutlined } from "@ant-design/icons";
import productList from "@/UserData/user";
import Carousel from "@/Components/carousel_Dash";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchHistory, setSearchHistory] = useState([]); // Track search history
  const [showHistory, setShowHistory] = useState(false);
  const [productList2, setProductList2] = useState(productList);

  const navItems = [
    "Products",
    "Categories",
    "Offers",
    "Contact Us",
    "About Us",
  ];

  const handleSearch = (query) => {
    // Handle your search logic here...
    // Update the search history as needed.
    searchHistory.push(query);
    let uniqueHisory = searchHistory.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    // let lowercase= query.toLowerCase();
    // console.log(lowercase)
    // let list=productList.map((item, i) =>{
    //     return item.replaceAll(lowercase, <i> {lowercase} </i>);
    // })

    // setProductList2(list);
    setSearchHistory(uniqueHisory);

      //setSearchHistory((prevHistory) => [query, ...prevHistory.slice(0, 4)]); // Store up to 5 recent searches.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowHistory(false); // Close the search history dropdown.
    handleSearch(searchItem);
    // Implement your search logic here...
  };

  const handleDelete = (e) => {
    //alert(e.currentTarget.title);
    let curIndex = parseInt(e.currentTarget.title);
    let result = searchHistory.filter((x, index) => curIndex != index);
    setSearchHistory(result);
  };

  return (
    <>
      <div className="w-full h-16 flex shadow-xl items-center">
        <div className="flex w-1/6 m-2 ml-8">
          {/* for logo */}
          <Image src={image} width={45} height={40} />
        </div>
        <div className="w-1/3">
          <ul className="flex">
            {navItems.map((item, key) => (
              <li
                className="p-1 px-4 m-2 border rounded-xl bg-green-200 shadow-xl transform hover:scale-110 transition duration-300 cursor-pointer"
                id={key}
                key={key}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/4" >
          {/* for search bar */}
          <form className="p-2 m-2" onSubmit={handleSubmit}  >
            <input
              placeholder="Search"
              className="border bg-slate-200 p-1 rounded-xl transform focus:scale-110 transition duration-300"
              value={searchItem}
              onChange={(e) => {
                setSearchItem(e.target.value);
                setShowHistory(true); // Show search history dropdown when typing.
              }}
              onClick={(e) => {
                setShowHistory(true);
              }}
            />  
            <button className="ml-5 transform transition duration-300 hover:scale-125">
              <SearchOutlined className="text-xl" />
            </button>
          </form>
          {showHistory && (
            <div className="search-history absolute border rounded-xl bg-slate-100 shadow-xl z-10" >
              <ul>
                {searchHistory.map((item, index) => (
                  <button className="flex text-left">
                    <li
                      key={index}
                      onClick={() => {
                        setSearchItem(item); // Fill search input with clicked history item.
                        setShowHistory(false); // Hide the dropdown.
                      }}
                      className="border-b-2 transition duration-200 m-1  px-2 hover:border-green-500 w-60 text-ellipsis overflow-hidden "
                      
                    >
                      {item}
                    </li>
                    <span className="pr-2">
                      <button title={index} onClick={handleDelete} >
                        {<CloseCircleTwoTone />}
                      </button>
                    </span>
                  </button>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex content-center">
          {/* For language toggle */}
          <select className="border rounded-xl outline-none h-10 m-0 shadow-xl">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Punjabi">Punjabi</option>
          </select>
        </div>
      </div>
      {/* <div>
        {productList2.map((product) => (
          <ul>
              <li>{product}</li>
          </ul>
        ))}
      </div> */}
      <div className="w-100  h-fit  my-8 border border-black ">

        <Carousel/>


        <div className="w-11/12 flex flex-wrap h-fit mx-auto border border-red-900">
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
          <div className="w-1/5 h-80 m-8 border border-green-500"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
