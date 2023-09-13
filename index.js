const Box = (props) => {
  //  Write your code here.
  const { boxDetails } = props;
  const { className, name } = boxDetails;
  return (
    <div className={className}>
      <p className="paragraph">{name}</p>
    </div>
  );
};

const smallBox = {
  className: "small-box",
  name: "Small",
  uniqueNo: 1,
};
const mediumBox = {
  className: "medium-box",
  name: "Medium",
  uniqueNo: 2,
};
const largeBox = {
  className: "large-box",
  name: "Large",
  uniqueNo: 3,
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="card-container">
      <Box boxDetails={smallBox} />
      <Box boxDetails={mediumBox} />
      <Box boxDetails={largeBox} />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
