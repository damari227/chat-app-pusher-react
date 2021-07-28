import queryString from "query-string";
import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import PusherJs from "pusher-js";
import { v4 } from "uuid";

// Components
import Messages from "./../Messages/Messages.js";

const Chat = ({ location }) => {

    const [message, setMessage] = useState('')
    const [messageArr, setMessageArr] = useState([]);
    const [uid, setUid] = useState('')
    const { name, room } = queryString.parse(location.search);


    // Handle action send message
    const sendMessage = (e) => {

        document.getElementById('text').value = null;
        if (message) {
            axios.post('/', {
                user: {
                    id: uid,
                    name, room
                },
                message
            });
        }
    }

    // useEffect(() => {

    //     axios.post('/join', {
    //         user: {
    //             id: uid,
    //             name, room
    //         }
    //     });

    // }), [location.search];

    useEffect(() => {

        setUid(v4());

        const pusher = new PusherJs('9d6d76d7125a54e6b368', {
            cluster: 'ap1'
        });
        const channel = pusher.subscribe(room);
        channel.bind('test', (data) => {

            setMessageArr(messageArr => [
                ...messageArr, data]);
        });
    }, []);
      
    return (
        <div className="row justify-content-center w-100 mt-4">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="">
                        <h5 className="text-primary pt-3 px-3">{room}</h5>
                        <hr />
                        <div className="py-3" style={{height: 300 + 'px', overflowY: 'auto'}} id="message">
                            <Messages messages={messageArr} user={uid}/>
                        </div>
                        <hr />
                        <div className="px-3 pb-3">
                            <div className="input-group">
                                <input className="form-control" id="text" onChange={e => setMessage(e.target.value)}/>
                                <div className="input-prepend">
                                    <button className="btn btn-primary" onClick={e => sendMessage()}>Kirim</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;