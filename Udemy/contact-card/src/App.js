
import './App.css';
import Card from './component/Card';
import contact from "./contact";
console.log(contact);
function App() {

    return (
      <div className="App">
        <h1>My Contacts</h1>
      
            <Card 
            name={contact[0].name}
            img={contact[0].imgUrl}
            tel={contact[0].tel}
            email={contact[0].email}
            />
  
            <Card 
            name={contact[1].name}
            img={contact[1].imgUrl}
            tel={contact[1].tel}
            email={contact[1].email}
            />
      </div>
    );

  
}

export default App;
