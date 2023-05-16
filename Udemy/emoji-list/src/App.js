import './App.css';
import Entry from './component/Entry';
import emojidata from './emojidata';
console.log(emojidata);
const newEmojiPedia = emojidata.map(function(emojiEntry){
  return emojiEntry.detail.substring(0, 50)
})
console.log(newEmojiPedia);
function createEntry(emoji) {
 return <Entry
  key={emoji.id}
  img={emoji.emoji}
  title={emoji.title}
  detail={emoji.detail}
/>
}
function App() {
  return (
    <div className="App">
     <h1>
      <span className='heading'>emojipedia</span>
     </h1>

     <div className='dictionary'>
      {emojidata.map(createEntry) }
      
     </div>
    </div>
  );
}

export default App;
