import './App.css';
import Footer from './component/Footer';
import Header from "./component/Header"
import Note from './component/Note';
import Notes from "./note"
function App() {
  return (
    <div>
      <Header />

      {Notes.map((note) => (
        <Note 
        key={note.key}
        title={note.title}
        content={note.content}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
