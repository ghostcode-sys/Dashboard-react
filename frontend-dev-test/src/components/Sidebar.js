import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className="sidebar">
               <Link to="#home"><i className="fa fa-fw fa-gg-circle"></i> </Link>
               <Link to="/" className="icon-middle"><i className="fa fa-fw fa-home"></i> </Link>
               <Link to="/services"><i className="fa fa-fw fa-briefcase "></i> </Link>
               <Link to="/services"><i className="fa fa-fw fa-bar-chart "></i> </Link>
               <Link to="/services"><i className="fa fa-fw fa-folder "></i> </Link>
               <Link to="/services"><i className="fa fa-fw fa-calendar-check-o "></i> </Link>
               <Link to="/services"><i className="fa fa-fw fa-user "></i></Link>
               <Link to="/services"><i className="fa fa-fw fa-newspaper-o "></i></Link>
               <Link to="/services"><i className="fa fa-fw fa-sign-out "></i></Link>
               <Link to="/sevices" className="icon-bottom"><i className="fa fa-fw fa-cog "></i></Link>
            </div>
        </>
    )
}

export default Sidebar

