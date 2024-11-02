import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Tokyo", "Yokohama", "St. Louis"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  // each component has individual state
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
