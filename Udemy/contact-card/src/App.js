import "./App.css";
import Avatar from "./component/Avatar";

import Card from "./component/Card";
import contacts from "./contact";
import avatar from "./component/Avatar.jpeg"
function createCard(contact) {
  return <Card
   id={contact.id}
   key={contact.id} 
   name= {contact.name} 
   img={contact.imgUrl} 
   tel={contact.tel}
   email={contact.email}
   />
}
function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
       <Avatar 
       img={avatar}
       />
       {contacts.map(createCard)}
    
    </div>
  );
}

export default App;
