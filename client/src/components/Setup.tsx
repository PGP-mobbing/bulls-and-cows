import { useEffect, useState } from "react";
import { getLocalStorage } from "../services/auth.service";
import { io } from "socket.io-client";
import Gameplay from "./Gameplay";
import './Setup.css';
const image = require("../img/chicken.png");

const API_URL: any = process.env.REACT_APP_API_END_POINT;
const socket = io(API_URL);

const Setup = () => {
  const [user, setUser] = useState(() => {
    const user = getLocalStorage();
    return user;
  });
  const [room, setRoom] = useState("");
  const [inGame, setInGame] = useState(false);

  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    socket.emit("join_room", { room, user });
    socket.on('opponent_joined', data => {
      setInGame(data);
    })
  };

  const newGameForm = () => {
    return (
      <div className= "game-form">
        <div>
          <img src={image} alt="chicken" />
        </div>
        
        <form onSubmit={(e) => handleStartGame(e)}>
          <input
            type="text"
            placeholder="Enter room name"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button type="submit">Enter game</button>
        </form>
        <div className="redirect-message">You will be redirected when your opponent joins the room.</div>
      </div>
    );
  };

  return <div>{inGame ? <Gameplay user={user} room={room} socket={socket}/> : newGameForm()}</div>;
};

export default Setup;
