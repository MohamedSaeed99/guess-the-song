"use client"
import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import Playlists from "./components/Playlists/Playlists";
import { useState } from "react";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import InputField from "./components/InputField/InputField";
import { GameContainer } from "./page.styles";

const Game = () => {
    const [selectedPlaylist, setSelectedPlaylist] = useState<string>("");
    const {push} = useRouter();

    const handleEndGame = () => {
        push('/')
    }

    const handlePlaylistSelection = (playlist: string) => {
        setSelectedPlaylist(playlist);
    }

    return (
        <GameContainer>
            <Playlists selectedPlaylist={selectedPlaylist} setSelectedPlaylist={handlePlaylistSelection} playlists={[]}/>
            <MusicPlayer />
            <InputField />
            <Button onClick={handleEndGame}>End Game</Button>
        </GameContainer>
    )
}

export default Game;