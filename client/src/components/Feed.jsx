import React, { useState } from 'react'
import './feed.css'
// import paw from './paw.JPG'
import {Avatar} from '@material-ui/core'
import Poll from './Poll'
function Feed() {
    const [userName, setUsername] = useState('lawal')
    const [polls, setPolls] = useState([
        {
            displayName: 'lawal',
            question:'what animal should i get as a first timer',
            options: {
                optionA:'dog',
                optionB:'cat',
                optionC:'goat',
                optionD:'hen',
            }
        }
    ])
    return (
        <div className='feed'>
            <header className="feed__header">
                <div className="feed__header__userinfo ">
                <Avatar alt='l'/>
                <h3 className='feed__header__username'>{userName||`anoymous`}</h3>
                </div>
                <div className="feed__header__createpoll ">
                    <button className="btn btn__poll">
                    create a poll
                    </button>
                </div>
                
            </header>
            <div className="polls">
                {
                    polls.map((poll) => (
                        
                        <Poll displayName={poll.displayName} question={poll.question}  options = {poll.options}/>
                    ))
                }
            </div>

        </div>
    )
}

export default Feed
