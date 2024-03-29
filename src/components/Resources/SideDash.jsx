import React, { useState } from "react";
import "./Dashboard.css";
import AddIcon from "@material-ui/icons/Add";
import CreateResource from "./CreateResource";
const SideDash = (props) => {
  const [show, setShow] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const toggle = () => setShow((prevState) => !prevState);
  const toggleJoin = () => setShowJoin((prevState) => !prevState);
  const resources = [];

  const [filteredList, setFilteredList] = new useState(resources);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...resources];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
    width: "250px",
    maxWidth: "700px",
    margin: "10px",
  };

  const uploadStyle = {
    fontSize: "1.2rem",
    paddingRight: "0.5rem",
    marginBottom: "-0.2rem",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
    width: "250px",
    maxWidth: "700px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
  };

  return (
    <div className="col-3 d-none d-md-block Dashboard_Sidedrawer px-1 ps-4 width-20">
      <div className="row join-links pt-3">
        <div className="col-12 d-flex justify-content-center pb-3">
          <button
            className="join-create-btn"
            onClick={() => setShow(true)}
            style={uploadStyle}
          >
            <AddIcon className="pe-1 mb-1"></AddIcon>
            Upload
          </button>
        </div>
      </div>
      <CreateResource
        // Here we have to call the function!...
        callResources={props.callResources}
        isModalOpen={show}
        toggleModal={toggle}
        setShow={setShow}
      />
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 mb-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <div className="search-header">
            <div className="search-text">Search:</div>
            <input
              id="search-box"
              onChange={filterBySearch}
              style={inputStyle}
            />
          </div>
          <div id="item-list">
            <ol>
              {filteredList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDash;
