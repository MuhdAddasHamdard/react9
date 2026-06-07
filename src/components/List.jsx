import React from "react";
import languages from "./mock";

const List = () => {
  return (
    <div>
      <h1>different computer languages</h1>
      {languages.map((lang) => {
        return (
          <ul key={lang.id}>
            <li>id: {lang.id}</li>
            <li>name: {lang.name}</li>
            <li>creator: {lang.creator}</li>
            <li>year: {lang.year}</li>
            <li>type: {lang.type}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default List;
