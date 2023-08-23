import '../styles/main.css'
import Device from '../images/tv.png'
import First_video from '../videos/video-tv.mp4'
import Girl from '../images/girl.png'
import Stranger from '../images/stranger.png'
import GetAppIcon from '@mui/icons-material/GetApp';
import Second_video from '../videos/video-devices.mp4'
import Kids from '../images/kids.png'
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useState } from 'react'

const Main  = () =>{
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const toggleShow = (setter) => {
    setter((prevState) => !prevState);
  };

  return(
    <>
    <div className='main-page'>
      <div className='text'>
        <h1 style={{fontSize:'50px'}}>Enjoy on your TV.</h1>
        <p style={{fontSize:'30px'}}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>

      <div className='player'>
        <img src={Device} style={{width:'400px'}}/>
        <video className='tv-video' src={First_video} autoPlay loop />
      </div>
    </div>

    <div className='main-2'>
        <div className='player-2'>
            <img src={Girl} style={{width:'500px'}}/>
              <div className='card-player'>
                <img src={Stranger} style={{height:'70px', marginLeft:'15px', marginTop:'10px'}}/>
                <div className='card-text'>
                   <span>Stranger Thinks </span>
                   <span style={{color: 'lightBlue'}}>Downloading...</span>
                </div>
                <div className='download'>
                  <GetAppIcon/>
                </div>
              </div>
        </div>

        <div className='text-2'>
            <h1 style={{fontSize:'50px'}}>Download your shows to watch offline.</h1>
            <p style={{fontSize:'30px'}}>Save your favorites easily and always have something to watch.</p>
        </div>
    </div>

    <div className='main-3'>
        <div className='text-3'>
          <h1 style={{fontSize:'50px', fontFamily:'sans-serif'}}>Watch everywhere.</h1>
          <p style={{fontSize:'30px', fontFamily:'sans-serif'}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
        </div>

        <div className='player-4'>
            <video className='device-video' src={Second_video} autoPlay loop/>
        </div>
    </div>

    <div className='main-4'>
       <div className='image-5'>
           <img src={Kids} style={{width:"500px"}} />
       </div>
       <div className='text-5'>
           <h1 style={{fontFamily:"sans-serif", fontSize:"50px"}}>Create profiles for kids.</h1>
           <p style={{fontFamily:"sans-serif", fontSize:"30px", width:"600px"}}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
       </div>
    </div> 

    <div className='main-5'>
       <h1 style={{textAlign:"center", fontFamily:"sans-serif", fontSize:"50px"}}>Frequently Asked Questions</h1>

       <div className='accordions'>
        {/* Accordion 1 */}
        <div className='acc-1'>
          <div className='title'>
            <h1 style={{ fontFamily: 'sans-serif', fontWeight: '500' }}>What is Netflix?</h1>
            <button onClick={() => toggleShow(setShow)}>
              <AddIcon />
            </button>
          </div>
          <div className='acc-text-1'>
            <p style={{ display: show ? 'block' : 'none', fontFamily: 'sans-serif', fontSize: '20px' }}>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
              <br/><br/>
              You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
            </p>
          </div>
        </div>

        <div className='acc-2'>
          <div className='title'>
            <h1 style={{ fontFamily: 'sans-serif', fontWeight: '500' }}>How much does Netflix cost?</h1>
            <button onClick={() => toggleShow(setShow2)}>
              <AddIcon />
            </button>
          </div>
          <div className='acc-text-2'>
            <p style={{ display: show2 ? 'block' : 'none', fontFamily: 'sans-serif', fontSize: '20px' }}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR4.99 to EUR9.99 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>

      <div className='acc-3'>
              <div className='title'>
                <h1 style={{fontFamily:"sans-serif", fontWeight:"500"}}>Where can I watch?</h1>
                <button onClick={() => toggleShow(setShow3)}><AddIcon/></button>
              </div>

              <div className='acc-text-3'>
                <p style={{display:show3 ? 'block' : 'none', fontFamily:"sans-serif", fontSize:"20px"}}>
                  Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.                  <br/>
                  <br/>
                  You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.                </p>
              </div> 
      </div>

      <div className='acc-4'>
              <div className='title'>
                <h1 style={{fontFamily:"sans-serif", fontWeight:"500"}}>How do I cancel?</h1>
                <button onClick={() => toggleShow(setShow4)}><AddIcon/></button>
              </div>

              <div className='acc-text-4'>
                <p style={{display:show4 ? 'block' : 'none', fontFamily:"sans-serif", fontSize:"20px"}}>
                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees start or stop your account anytime.
                </p>
              </div> 
      </div>

      <div className='acc-5'>
              <div className='title'>
                <h1 style={{ fontFamily:"sans-serif", fontWeight:"500"}}>What can I watch on Netflix?</h1>
                <button onClick={() => toggleShow(setShow5)}><AddIcon/></button>
              </div>

              <div className='acc-text-5'>
                <p style={{display:show5 ? 'block' : 'none',fontFamily:"sans-serif", fontSize:"20px"}}>
                  Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </p>
              </div> 
      </div>

      <div className='acc-6'>
              <div className='title'>
                <h1 style={{fontFamily:"sans-serif", fontWeight:"500"}}>Is Netflix good for kids?</h1>
                <button onClick={() => toggleShow(setShow6)}><AddIcon/></button>
              </div>

              <div className='acc-text-6'>
                <p style={{display:show6 ? 'block' : 'none', fontFamily:"sans-serif", fontSize:"20px"}}>
                  The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                  <br/>
                  <br/>
                  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </p>
              </div> 
           </div>
      </div>

      <div className='main-6'>
          <span>Ready to watch? Enter your email to create or restart your membership.</span>
          <div className='last-main'>
             <input type={'email'} placeholder="Email address"/>
             <button>Get Started  <ChevronRightIcon className='last-btn'/></button>
          </div> 
       </div>
    </div>
    </>
 
  )
}


export default Main