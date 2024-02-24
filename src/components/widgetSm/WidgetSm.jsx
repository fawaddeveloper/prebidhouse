import { useEffect, useState } from 'react'
import './widgetSm.css'
import {Visibility} from "@mui/icons-material"
import axios from 'axios';
export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try{
                const userDataString = localStorage.getItem('user');
                const userData = JSON.parse(userDataString);

                // Access the access token from user data
                const accessToken = userData?.accessToken;

                if (!accessToken) {
                    console.log("Access token not found in user data");
                    return;
                }

                const res = await axios.get("http://localhost:8800/api/user?new=true", {
                    headers: {
                        token: `Bearer ${accessToken}`
                    },
                });
                setNewUsers(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getNewUsers();
    },[]);
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map(user=>(

                    <li className="widgetSmListItem">
                    <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} 
                    alt="" 
                    className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                    ))}
            </ul>
        </div>
    )
}


