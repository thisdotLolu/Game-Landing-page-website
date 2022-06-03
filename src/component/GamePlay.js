import React from 'react'

const GamePlay = () => {
  return (
    <div className='section4' style={{marginTop:'70px'}}>
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
  )
}

export default GamePlay