// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["prework-study-guide", "markdown-master", "towmato", "workforce-wiz", "weather", "Color-My-World"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   // each component has individual state
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Projects"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
// src/App.jsx
// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
