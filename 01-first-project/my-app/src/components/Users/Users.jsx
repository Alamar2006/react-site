import React from "react";
import styles from './Users.module.css'
import * as axios from 'axios'
import not from '../../../../assets/images/not.jpeg'

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            props.setUsers(res.data.items)
        })
    }

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                    <span>
                        {u.name}
                    </span>
                    <span>
                        {u.status}
                    </span>
                    <span>
                        <img src={u.photos.small !== null ? u.photos.small : not} />
                    </span>
                    <span>
                        {
                            u.followed 
                            ? <button onClick={() => {props.unfollow(u.id)}} >Follow</button>
                            : <button onClick={() => {props.follow(u.id)}} >Unfollow</button>
                        }
                    </span>
                
                </div>)
        }
    </div>
}
        
    


export default Users;