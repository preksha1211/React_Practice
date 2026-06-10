import Products from './components/Products.jsx';

function App() {
const skills = ["HTML", "CSS", "JavaScript", "React"];


  return (
     <>
    <Products skills={skills}/>
    </>
    
  );
}

export default App;