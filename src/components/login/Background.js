import React from 'react'
import './Background.css'

function Background() {

    return (
        <div class="containerBackground">
        {
               [...new Array(43)].map(()=>(
                <div class="row">
                {
                     [...new Array(43)].map(()=>(
                        <div class="hexagon"></div>
                    ))
                }
            </div>
            ))
        }
    
    
        
      </div>
    )
}

export default Background
