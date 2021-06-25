import React,{useState,useEffect} from 'react'
import  Back_img  from '../images/images.jpg'

function UserDetail() {
    const [render, setrender] = useState('');

    const [Info, setInfo] = useState([
        {
            name:'Rosie Metts.',
            post:"OS Developer"
        },
        {
            name:'James Scott.',
            post:"Node js Developer"
        },
        {
            name:'Jamie Laurenson.',
            post:"Marketing Manager"
        },
        {
            name:'Elizabeth Hurton.',
            post:"junior UI Designer"
        },
        {
            name:'Danny Watson.',
            post:"OS devaeloper"
        },
        {
            name:'Reha Scarlett.',
            post:"iOS Developer-"
        }
    ]);
    useEffect(() => {
        const userInfo =  Info.map((val,index) =>{
            return (<li key={index}>
                <div className="user_info_icon"><i className="fa fa-fw fa-user-circle-o"></i></div>
                <div className="user_info_det">
                    <p>{val.name} <br/> Applied for <span className="blue_para">{val.post}</span></p>
                </div>
                <div className="user_con_icon">
                    <span>
                        <i className="fa fa-fw fa-commenting"></i>
                    </span>
                    <span>
                        <i className="fa fa-fw fa-phone"></i>
                    </span>
                </div>
                <div className='fa fa-fw fa-arrow-down cus_arr'></div>
            </li>)
        });
        setrender(userInfo);

        }, []);
    return (
        <div className="user_data">
        <i className="fa fa-fw fa-arrow-circle-right"></i>
        Hello John Bayer,<br/>You have 8 New Application Today!
        <div><img src={Back_img} className="user_back_img"/></div>
        <div className="user_data_info">
            New applications <i className="fa fa-fw fa-chevron-circle-right"></i>
            <ul>
               {render}
            </ul>
        </div>

    </div>
    )
}

export default UserDetail
