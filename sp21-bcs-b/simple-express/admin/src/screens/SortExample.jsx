import React, { useState } from "react";
const SortExample = () => {
  //   const names = ["Zahid", "Momin", "Ali"];
  const [names, setNames] = useState(["Zahid", "Momin", "Ali"]);
  const sortBtnClicked = () => {
    // alert("clickd handled");
    // names.sort();
    let dummyNames = [...names];
    dummyNames.sort();
    setNames(dummyNames);
    // console.log(names);
  };
  return (
    <div>
      <h2>Sor Example</h2>
      <button onClick={sortBtnClicked}>Sort</button>
      <button
        onClick={() => {
          let dummyNames = [...names];
          dummyNames.push("Soleman");
          setNames(dummyNames);
        }}
      >
        Add New Name
      </button>
      <ul>
        {names.map((n, index) => (
          <li>
            {n}{" "}
            <button
              onClick={(e) => {
                let dummyNames = [...names];
                dummyNames.splice(index, 1);
                setNames(dummyNames);
              }}
            >
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortExample;
