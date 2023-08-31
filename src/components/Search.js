import React from "react";

function Search({searchName, onUpdateSearchName}) {
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value={searchName} 
          onChange={e => onUpdateSearchName(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
