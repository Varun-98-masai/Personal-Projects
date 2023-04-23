
import './App.css';
import logo from "./shopify.png";
import image from "./heroImage.webp"
function App() {
  return (
    <div className="App">
      <div className='container1'>
      <img src={logo} alt="logo.png" className='logo' />
      <h1>
      Easily Build and Run Your <br /> Ecommerce Website
      </h1>
      <p className='freetrial'>Try Shopify free for 14 days, and explore all the <br /> features you need to start a business fast.</p>
      <div className='input_div'>
      <input type="text" placeholder='Enter Your Email Address' />
      <button> Start free trial</button>
      </div>
      <p>By entering your email, you agree to receive marketing emails from Shopify.</p>
      <img src={image} alt="heroImage" className='image' />
      </div>
     <div>
      <div></div>
      <div></div>
      <div></div>
     </div>
    </div>
  );
}

export default App;
