import './App.css';
import restaurent from "./restaurent.jpg";

function Header(props){
  console.log(props);
  return(
    <header>
      <h1>{props.name}'s Restaurent</h1>
    </header>
  );
}



function Main(props){  
  return(    
    <section>
      <p>We serve hot and spicy dishes to make your day {props.adjective}.</p>
      <img src={restaurent} height={235} alt="inside the restaurent" />
      <ul style={{textAlign: "left"}}>
        {dishes.map((dishes) => (
        <li key={dishes}>{dishes}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year} </p>
    </footer>
  );
}


const dishes = [
  "French Fries",
  "Maha Veg Burger",
  "Duggal's Butter Chicken",
  "Pandit's Burger",
  "Bombay Bhelpuri",
  "Chole Bhature"
]


function App() {
  return (
    <div className="App">
      <Header name="Milan" dishes={dishes} />
      <Main adjective="awesome" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
