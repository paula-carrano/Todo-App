import { AuthContext } from 'contexts/AuthProvider';
import React, { useContext, useState } from 'react';
import { storage } from "../../../../utils/firebase-config"
//import { Camera } from 'react-bootstrap-icons'

const Avatar = () => {
    const { user } = useContext(AuthContext)

    const [fileName, setFileName] = useState("")
    const [fileObject, setFileObject] = useState(null)


    const handleChangeFileInput = (e) => {
        setFileName(e.target.value);
        setFileObject(e.target.files[0])
    }

    const doUpload = (e) => {
        e.preventDefault()

        const ref = storage.ref(`images/${fileName}`)
        ref.put(fileObject)
        user.updateProfile({ photoURL: `images/${fileName}` }) //si o si url de firebase
        console.log("exito")
    }


    return (
        <div className="profile d-flex justify-content-center">
            <div className="row flex-column">
                <div className="col userName">
                    <h1>{user.displayName} </h1>
                </div>
                <div className="col userPhoto">
                    <img
                        src={user.photoURL}
                        alt="user-avatar"
                        className="rounded-circle"
                    />
                </div>
                <div className="col userChangePhoto mt-3">
                    <p>Agregar nuevas fotos</p>
                    {/* <button className="btn btn-outline-secondary" type="button" onClick=""><Camera /></button> */}
                    <div className="input-group">
                        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={(e) => handleChangeFileInput(e)} />
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={doUpload}>Button</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export { Avatar };
