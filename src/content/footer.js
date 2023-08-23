import { Divider } from '@mui/material'
import '../styles/footer.css'

const Footer = () =>{
   return(
     <>
      <div className="footer">
         <div className='footer-title'>
           <a href='#' style={{color:"gray"}}><span>Questions? Contact us.</span></a>
         </div>
          <div className='first-footer'>
            <div>
               <ul>
                 <a href='#' style={{color:'gray'}}><li>FAQ</li></a>
                 <a href='#' style={{color:'gray'}}><li>Account</li></a>
                 <a href='#' style={{color:'gray'}}><li>Jobs</li></a>
                 <a href='#' style={{color:'gray'}}><li>Privacy</li></a>
                 <a href='#' style={{color:'gray'}}><li>Contact Us</li></a>
                 <a href='#' style={{color:'gray'}}><li>Only on Netflix</li></a>
               </ul>
            </div>

            <div>
              <ul>
                <a href='#' style={{color:'gray'}}><li>Gift Card Terms</li></a>
                <a href='#' style={{color:'gray'}}><li>Media Center</li></a>
                <a href='#' style={{color:'gray'}}><li>Ways to Watch</li></a>
                <a href='#' style={{color:'gray'}}><li>Cookie Preference</li></a>
                <a href='#' style={{color:'gray'}}><li>Speed Test</li></a>
              </ul>
            </div>

            <div>
              <ul>
                <a href='#' style={{color:'gray'}}><li>Help Center</li></a>
                <a href='#' style={{color:'gray'}}><li>Investor Relations</li></a>
                <a href='#' style={{color:'gray'}}><li>Terms of Use</li></a>
                <a href='#' style={{color:'gray'}}><li>Corporate Information</li></a>
                <a href='#' style={{color:'gray'}}><li>Legal Notices</li></a>
              </ul>
            </div>
          </div>  
          
          <div className='last-footer'>
            <div>
               <select id="language">
                 <option value="volvo">English</option>
                 <option value="saab">Hrvatski</option>
               </select>
            
               <div style={{marginTop:"20px"}}>
                 <span>Netflix Serbia</span>
               </div>
            </div>

          </div> 
      </div> 
     </>
   )
}


export default Footer