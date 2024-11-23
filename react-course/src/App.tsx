// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  /* const items = ["Hebron", "Nablus", "Jericho", "Jerusalem"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }; */

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {/* <Alert>
        <h1>Hello</h1>
        <p>World</p>
      </Alert> */}

      {showAlert && <Alert onClose={() => setShowAlert(false)}>My Alert</Alert>}
      <Button
        onClick={() => {
          console.log("Clicked");
          setShowAlert(true);
        }}
        color="danger"
      >
        My Button
      </Button>
    </>
  );
};

export default App;
