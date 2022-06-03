import React from 'react';
import {FaInstagram,FaFacebook,FaTwitter,FaYoutube,FaDiscord} from 'react-icons/fa';


const Info = () => {
  return (
    <div className='section7' style={{marginTop:'70px'}}>
            <div className="contacts_container">
                <div className='fsection-1'>
                <h3>DOWNLOAD GAME CLIENT</h3>
                <h3>DOWNLOAD RIOT MOBILE COMPANION APP</h3>
                </div>
                
                <div className='contacts_icons'>
                <FaInstagram className='each_icon'/>
                <FaTwitter className='each_icon'/>
                <FaFacebook className='each_icon'/>
                <FaYoutube className='each_icon'/>
                <FaDiscord className='each_icon'/>
                </div>
                
                <div className='fsection_2'>
                &copy; Valorant
                <p>PRIVACY NOTICE</p> 
               <p>TERMS OF SERVICE</p> 
               <p>COPMANY INFORMATION</p> 
               <p>COOKIE PREFERENCES</p>
                </div>
                
            </div>
            <div className='footer_logos'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PEGI_15.svg/1200px-PEGI_15.svg.png' alt='pg 15'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PEGI_Violence.svg/1200px-PEGI_Violence.svg.png' alt='violence logo'/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/PEGI_In-Game_Purchases_hell.svg/1200px-PEGI_In-Game_Purchases_hell.svg.png" alt="in-game purchases" />
            </div>
        </div>
  )
}

export default Info