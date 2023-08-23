import '../styles/navbar.css'
import logo from '../images/Netflix-logo.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Navbar = () =>{
   

   return(
    <div className="section1">
       <div className="nav-netflix">
          <img src={logo} className="netflix-logo"/>
           <div className="nav-second">
             <div className="options">
                <select id="language">
                  <option value="volvo">English</option>
                  <option value="saab">Hrvatski</option>
                </select>
             </div>

             <div className="sign-in">
             <button className="btn">Sign In</button>
            </div>
          </div>
       </div>

       <div className="subscription">
          <h1 style={{fontFamily:'sans-serif'}}>Unlimited movies, TV shows, and more.</h1>
          <br/>
          <span style={{fontSize:'25px', fontFamily:'sans-serif',}}>Plans now start at EUR4.99/month.</span>
          <br/>
          <span style={{fontFamily:'sans-serif', fontSize:'18px', marginTop:'25px', textAlign:'center', marginLeft:'10px'}}>Ready to watch? Enter your email to create or restart your membership.</span>
          <br/>
          <div className="subscription-2">
             <input type={'email'} placeholder="Email address" className="input" required autoFocus/>
             <span className='under-input'></span>
             <button className="submitbtn">Get Started <ChevronRightIcon className='rightbtn'/></button>
          </div>
       </div>
    </div>
   )
}


export default Navbar