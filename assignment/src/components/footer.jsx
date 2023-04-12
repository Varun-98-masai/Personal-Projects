
  import "../styles/footer.css";
  import logo from "../Cipher_logo.png"
  const Footer = () => {
    return (
     <div className="footer">
         <div className="left">
          <img src={logo} alt="" />
          <p>
           Cipherschools is a bootstrapped educational video streaming platform in India that is
           connecting passionate unskilled students to skilled Industry experts to fulfill their career dreams.
          </p>
          <p>Address</p>

         </div>
         <div className="right">
          <div>
            <h5>Popular Instructors</h5>
            <ul>
              <li>
                <a href="/">Cipher Schools</a>
              </li>
              <li>
                <a href="/">Coders Troops</a>
              </li>
              <li>
                <a href="/">Ayushi Sharma</a>
              </li>
              <li>
                <a href="/">Danish Shaikh</a>
              </li>
              <li>
                <a href="/">Shruti Codes</a>
              </li>
            </ul>
          </div>
          <div>
          <h5>Popular Courses</h5>
            <ul>
              <li>
                <a href="/">Data Science</a>
              </li>
              <li>
                <a href="/">Programming</a>
              </li>
              <li>
                <a href="/">Data Structures</a>
              </li>
              <li>
                <a href="/">Machine Learning</a>
              </li>
              <li>
                <a href="/">Game Development</a>
              </li>
            </ul>
          </div>
          <div>
          <h5>Company Info</h5>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Why we?</a>
              </li>
              <li>
                <a href="/">Sitemap</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
            </ul>
          </div>
         </div>
     </div>
    )
  };
  
  export default Footer;

