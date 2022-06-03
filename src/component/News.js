import {FaArrowRight} from 'react-icons/fa'
import React from 'react'

const News = () => {
  return (
    <div className='section2' style={{marginTop:'70px'}}>
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
  )
}

export default News