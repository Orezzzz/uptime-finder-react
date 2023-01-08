import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser, searchUrl, yourUrls, deletedUrlsList} =useContext(AuthContext)
    
  return (
    <div>
        {
          user &&(
            <header className="header">
              <h1 className="username"><a>Hello, {user}</a></h1>
                <ul className="main-nav">
                    <li><a onClick={searchUrl}>Search url</a></li>
                    <li><a onClick={yourUrls}>Your urls</a></li>
                    <li><a onClick={deletedUrlsList}>deleted urls</a></li>
                    <li><a onClick={logoutUser}>Logout</a></li>
                </ul>
            </header> 
          )
        }
       
    </div>
  )
}

export default Header