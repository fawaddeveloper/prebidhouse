import { LineStyle, List, PlayCircleOutline, Timeline, TrendingUp } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link'>
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to='/users' className='link'>
                        <li className="sidebarListItem">
                            <LineStyle className='sidebarIcon'/>
                            Users
                        </li>
                        </Link>
                        <Link to='/movies' className='link'>
                        <li className="sidebarListItem">
                            <PlayCircleOutline className='sidebarIcon'/>
                            Movies
                        </li>
                        </Link>
                        <Link to='/lists' className='link'>
                        <li className="sidebarListItem">
                            <List className='sidebarIcon'/>
                            Lists
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                    <Link to='/bulk-mailer' className='link'>
                        <li className="sidebarListItem">
                            <LineStyle/>
                            Mail
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


