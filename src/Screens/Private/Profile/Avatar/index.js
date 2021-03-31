import { AuthContext } from 'contexts/AuthProvider';
import React, { useContext } from 'react';


const Avatar = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="profile d-flex justify-content-center">
            <div className="row flex-column">
                <div className="col userName bg bg-light">
                    <h1>{user.displayName} </h1>
                    <p>{`Email: ${user.email}`}</p>
                </div>
                <div className="col-md-5 userPhoto ms-5">
                    <img
                        src={user.photoURL}
                        alt="user-avatar"
                        className="rounded-circle"
                    />
                </div>
            </div>
        </div>
    );
}

export { Avatar };
