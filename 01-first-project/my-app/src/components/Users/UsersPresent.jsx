import React from 'react';
import styles from './Users.module.css'
import preloader from '../../img/Spinner@1x-0.3s-88px-88px.svg'
import {NavLink} from "react-router-dom";

function UsersPresent(props) {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = [...Array(pagesCount).keys()].map(i => i + 1)

  return (

    <>

      {props.isFetching ? <img src={preloader} alt="preloader"/> : null}

      <div>
        {!props.isFetching && (
          pages.map(p => {
            return <span key={p} className={p === props.currentPage ? styles.selectedPage : styles.Page}
                         onClick={() => props.onPageChange(p)}>{p}</span>
          }) // 1 2 3 4
        )}

        {
          props.users.map(u => <div key={u.id}>

                    <span>
                        <NavLink to={'/profile/' + u.id}>{u.name}</NavLink>
                    </span>
            <span>
                        {u.status}
                    </span>
            <span>
                         {/*<img alt='' src={u.photos.small !== null ? u.photos.small : ''} />*/}
                    </span>
            <span>
                        {

                          u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                              props.unfollowUserThunkCreator(u.id)
                            }
                            }>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                              props.followUserThunkCreator(u.id)
                            }
                            }>Follow</button>
                        }
                    </span>

          </div>)
        }
      </div>
    </>
  )

}

export default UsersPresent;