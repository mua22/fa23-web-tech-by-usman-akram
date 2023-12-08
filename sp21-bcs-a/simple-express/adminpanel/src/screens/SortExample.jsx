import { useState } from "react";

const SortExample = () => {
  // let names = ["Zahid", "Momin", "Ali"];
  const [names, setNames] = useState(["Zahid", "Momin", "Ali"]);
  const hanldeSort = () => {
    // alert("Sort Clicked");
    let dummyNames = [...names];
    dummyNames.sort();
    setNames(dummyNames);
  };
  return (
    <div>
      <h2>Sort Example</h2>
      <button onClick={hanldeSort}>Sort</button>
      <div>There are {names.length} students</div>
      <div
        style={{
          border: "3px solid",
          borderColor: names.length < 3 ? "red" : "green",
        }}
      >
        {names.length < 3 ? (
          <div>Too Few Students</div>
        ) : (
          <p>Too Many Students</p>
        )}
      </div>
      <button
        onClick={() => {
          let dNames = [...names];
          dNames.push("Asad");
          setNames(dNames);
        }}
      >
        Add Name
      </button>
      <ul>
        {names.map((n, index) => (
          <li>
            {n}{" "}
            <button
              onClick={() => {
                let dNames = [...names];
                dNames.splice(index, 1);
                setNames(dNames);
              }}
            >
              Del
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortExample;
