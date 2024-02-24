import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import './home.css'
import {userData} from "../../dummydata"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { useEffect, useMemo, useState } from "react";
import axios from 'axios'
export default function Home() {
    const MONTHS = useMemo(
        () => [
    
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
        ); 
    
      const [ userStats, setUserStats] = useState([]);
    
      useEffect(()=>{
        const getStats = async () => {
          try{

            const userDataString = localStorage.getItem('user');
                const userData = JSON.parse(userDataString);

                // Access the access token from user data
                const accessToken = userData?.accessToken;

                if (!accessToken) {
                    console.log("Access token not found in user data");
                    return;
                }
            const res = await axios.get("http://localhost:8800/api/user/stats", {
              headers:{
                token: `Bearer ${accessToken}`
              },
            });
            const statsList = res.data.sort(function (a, b) {
                return a._id - b._id;
            });
            statsList.map((item) => 
              setUserStats((prev)=>[
                ...prev,
                { name: MONTHS[item._id - 1], "New User": item.total },
              ])
              );
          }catch(err){
            console.log(err);
          }
          };
          getStats();
      },[MONTHS]);
      console.log(userStats);
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userStats} 
            title="User Analytics" 
            dataKey="New User" grid/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}


