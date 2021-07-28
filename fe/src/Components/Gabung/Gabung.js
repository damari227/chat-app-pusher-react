import { useState } from "react";
import { Link } from "react-router-dom";
import PusherJs from "pusher-js";
import axios from "axios";

const pusherJs = new PusherJs('9d6d76d7125a54e6b368', {
  cluster: 'ap1'
});

const channel = pusherJs.subscribe('test');
channel.bind('test', (data) => {
  console.log(data);
});

const endpoint = 'http://localhost:3001';

const Gabung = () => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="row justify-content-center mt-4 w-100">
      <div className="col-4">
        <div className="card">
          <div className="card-body">
              <h2 className="text-center">Gabung</h2>
              <div className="form-group mb-3">
                  <label>Nama</label>
                  <input id="name" className="form-control" onChange={e => setName(e.target.value)} />
              </div>
              <div className="form-group">
                  <label>Room</label>
                  <input id="room" className="form-control" onChange={e => setRoom(e.target.value)} />
              </div>

              <Link onClick={(e) => (name == null || room == null) ? e.preventDefault() : '' } to={`/chat?name=${name}&room=${room}`} className="btn btn-primary w-100">Gabung</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gabung;
