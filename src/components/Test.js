import React from "react";

const Test = () => {
  const array = ["táo", "lê", "táo", "dâu", "dừa", "thơm"];
  const find = array.find((item) => item === "táo");
  console.log("find", find);
  const findIndex = array.findIndex((item) => item === "táo");
  console.log("findIndex", findIndex);
  const fillter = array.filter((item) => item === "táo");
  console.log("fillter", fillter); //trả về array tất cả thoả
  const every = array.every((item) => item === "táo");
  console.log("every", every);

  const reverse = array.reverse();
  console.log("reveerse", reverse);

  const sort = array.sort((a, b) => a.localeCompare(b));
  console.log("sort", sort);

  const uniqueArray = [...new Set(sort)];
  console.log("uniqueArray", uniqueArray);

  // Count occurrences
  const counts = sort.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // Get unique elements and sort them
  const uniqueSortedArray = Object.keys(counts).sort((a, b) =>
    a.localeCompare(b)
  );

  // Print results
  console.log("Unique Sorted Array:", uniqueSortedArray);
  console.log("Counts:", counts);

  return (
    <div id="test">
      <div className="testContent">
        <div className="testItem">
          <h2>test</h2>
          {array.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Test;
