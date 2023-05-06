import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Paris", "London", "Tokyo"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
