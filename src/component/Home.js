import React from 'react'
import {FaInstagram,FaTwitter,FaFacebook,FaDiscord,FaYoutube} from 'react-icons/fa' 
import {FaPhone,FaMailBulk} from 'react-icons/fa'
import {FaAward,FaFlag,FaGamepad} from 'react-icons/fa'
import '../styles/home_styles.css'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
    
  return (
    <div className='home' style={{marginTop:'170px'}}>
        <div className='section1'>
            <div className="container">
                {/* <img src='images/reyna.png' alt="splashImage" className="splash_image" /> */}
                <img src='images/val-logo.png' alt="logo" className="splash_logo" />
                <div className='sign_up'>
                    <a href="https://www.playvalorant.com">Sign up</a>
                </div>
            </div>
            <div className="gallery">

            </div>
        </div>
        
        <div className='section2'>
        <div style={{width:'3px',height:'10px',backgroundColor:'#ff4655',marginRight:'0px',marginBottom:'0px'}}></div>    
            <div style={{width:'10px',height:'10px',backgroundColor:'#ff4655',marginRight:'130px',marginBottom:'30px'}}></div>
            <div className="section2_container">
            <div style={{width:'3px',height:'20px',backgroundColor:'#ff4655',marginRight:'0px',marginBottom:'0px'}}></div>
                <div className='outlined_text'>
                <h1>WE ARE </h1>
                <h1 className='valorant'style={{top:'300px',left:'-350px'}}>VALORANT</h1>
                </div>
            </div>
            <div className='section2_text'>
                <h1 style={{color:'#ff4655'}}>LATEST NEWS</h1>
                
                <p>GO TO NEWS PAGE <FaArrowRight/></p>
                
            </div>
            {/* <img src='/images/phoenix.png' alt='phoenix'/> */}
            <div className='section2_news'>
                <div className='section2_image'>
                <img src='https://images.firstpost.com/wp-content/uploads/2020/06/riot-games.jpg' alt='phoenix'/>
                <p>VALORANT SYSTEMS HEALTH SERIES..</p>
                </div>
                <div style={{width:'3px',height:'20px',backgroundColor:'#ff4655',marginRight:'0px',marginBottom:'0px'}}></div>
                <div className='section2_image'>
                <img src='https://i.pinimg.com/originals/df/44/63/df4463406a94dcf0d1eff9b9ee128941.jpg' alt='phoenix'/>
                <p>VALORANT PATCHES NOTE 2.0</p>
                </div>
                <div style={{width:'3px',height:'20px',backgroundColor:'#ff4655',marginRight:'0px',marginBottom:'0px'}}></div>
                <div className='section2_image'>
                <img src='https://i.redd.it/1uorh9dwa7h51.png' alt='phoenix'/>
                <p>VALORANT GAMEPLAY CONSISTENCY UPDATE</p>
                </div>
                <div style={{width:'3px',height:'20px',backgroundColor:'#ff4655',marginRight:'0px',marginBottom:'0px'}}></div>
            </div>
            <div style={{width:'130px',height:'20px',backgroundColor:'#ff4655',marginRight:'0px',marginBottom:'0px'}}></div>
        </div>
        
        <div className='section3'>
            <div className="accolades_container">
            <p>E P I S O D E _ 4 / / A C T  I I I / / Y R  2</p>
            <h1>DISRUPTION</h1>
            <div className='btn_s3'><button>ACT III OVERVIEW</button></div>
            
            </div>
        </div>

        <div className='section4'>
        <h1>WE ARE VALORANT</h1>
            <div className="section4_container">
            <div className='section4_img'>
                    <img src='/images/boygirl.gif' alt='snippet'/>
            </div>
                <div className='section4_text'>
                    <h3>DEFY THE LIMITS</h3>
                    <p>Blend your style and experience on a global, competitive stage.</p>
                    <p>You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities </p>
                    <p>And, with one life per-round, you'll need to think faster than your opponent if you want to survive</p>
                    <p>Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>
                    <div style={{borderColor: 'black'}}className='btn_s3'>
                    <button>LEARN THE GAME</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='section5'>
            <div className="section5_container">
                <h1>YOUR AGENTS</h1>
                <div className='section5_text'>
                    <h3>CREATIVITY IS YOUR GREATEST WEAPON</h3>
                    <p>More than guns and bullets, you'll choose an Agent armed with</p>
                    <p>adaptive,swift, and lethal abilities that create opportunities to </p>
                    <p>to let your gun play shine. No two agents play alike,just as no two</p>
                    <p>highlights reel will look the same</p>
                </div>
                <div className='section5_img'>
                <img src='/images/reyna.png' alt='reyna'/>
                </div>
                <button>VIEW ALL AGENTS</button>
            </div>
        </div>
        <div className='section6'>
            <div className="msection">
                <hr />
            <h1>YOUR MAPS</h1>
                <div className='msection-text'>
                <h3>FIGHT AROUND THE WORLD</h3>
                <p>Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.</p>
                </div>
                <div className='btn_s3' style={{paddingLeft:'12px',marginLeft:'30px',marginRight:"-30px", display:'flex'}}>
                <button style={{marginRight:"30px"}}>VIEW ALL MAPS</button>
                </div>
                
            </div>
        </div>
        <div className='section7'>
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
    </div>
  )
}

export default Home