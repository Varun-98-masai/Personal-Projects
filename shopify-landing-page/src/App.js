
import './App.css';
import logo from "./shopify.png";
import image from "./heroImage.webp";
import custom from "./customize.png";
import addPro from "./addProduct.png";
import sell from "./sell.jpg";
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
      <p className='p'>By entering your email, you agree to receive marketing emails from Shopify.</p>
      <img src={image} alt="heroImage" className='image' />
      </div>
     <div className='flex'>
      <div>
        <img src={custom} alt="" />
        <h3>Choose & customise a theme</h3>
        <p>Customize the design of your shop from over thousands of themes. No design experience or programming skills required.</p>
      </div>
      <div>
        <img src={addPro} alt="" />
        <h3>Add products</h3>
        <p>Add your products to the shop. List your eye-catching products with the best photos, price and descriptions.</p>
      </div>
      <div>
        <img src={sell} alt="" />
        <h3> Start selling</h3>
        <p>Set up payments and shipping, and start selling.</p>
      </div>
     </div>


     <section className='section section--tight section--border'>
        <ul className='logo-soup'>
          <li>
          <img data-sizes='100vh' src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/bajaao-small-6ca0459c2a2fc6a57654d85cd1f053828d7fee97ecf7ff6dd8a1c460d0a5d344.png" alt="" />
          </li>
          <li>
          <img data-sizes='100vh' src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/johnjacobs-small-79aa379de8a1c0d6df1c33af8c63a677871164315ccbc495423aeaead650d53a.png" alt="" />
          </li>
          <li>
          <img data-sizes='100vh' src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/kylie-small-4e25b192755f809e9795d9f3722f3fa6b46da1fdc2a48b3ec8b6311f50f83ac7.png" alt="" />
          </li>
          <li>
          <img data-sizes='100vh' src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/nush-small-04d75ec8d5b3e20b6e227006c23759c8b65efd482808aff0fc17140c5efb36cc.png" alt="" />
          </li>
          <li>
          <img data-sizes='100vh' src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/yogabar-small-a41c8bbe605289256552b537eb1bbf993845442c3af43ff4f8f1ed932a7b3609.png" alt="" />
          </li>
          <li>
          <img data-sizes='100vh' src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/starstruck-small-6d49ff528f3ef3217015f906a1ece473e2559688669d00e2b88e7be4f65ce3bf.png" alt="" />
          </li>
          {/* <li>
          <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/mcaffeine-small-0c55170838a60e6a490dac7732d44f988f754de89d790de26b0d8e50a01029b4.png" alt="" />
          </li> */}
        </ul>
     </section>

     <div className='heading'>
      <h1>“Shopify is the perfect solution for my ecommerce website, <br /> which both easy to build and easy to maintain.”</h1>
      <p>RIMJHIM HADA, FOUNDER OF AACHHO</p>

      <button className='trial-btn'> 14-day free trial</button>
     </div>
    </div>
  );
}

export default App;
