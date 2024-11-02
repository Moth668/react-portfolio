import ListGroup from "./components/ListGroup";

function App() {
  let items = ["prework-study-guide", "markdown-master", "towmato", "workforce-wiz", "weather", "Color-My-World"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  // each component has individual state
  return (
    <div>
      <ListGroup
        items={items}
        heading="Projects"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
