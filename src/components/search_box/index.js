import React from "react";

const Index = ({ onSearchChange }) => {
  return (
    <div>
      <input
        className="search-box-please"
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Index;
