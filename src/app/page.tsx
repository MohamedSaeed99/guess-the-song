"use client"
import { Container, MusicServicesContainer, ServiceButton, ServiceButtonContainer, StartGameButton, StartGameContainer, TitleContainer } from "./page.styles";
import { useState } from "react";
import Players from "./components/Players/Players";
import { useRouter } from "next/navigation";
import {OauthUrl} from "@/api/Spotify/SpotifyAuth";

export default function Home() {
  const [players, setPlayers] = useState<string[]>([]);
  const { push } = useRouter();

  const handleRemovePlayer = (playerIndex: number) => {
    const updatedPlayers = [...players]
    updatedPlayers.splice(playerIndex, 1);
    setPlayers(updatedPlayers);
  }

  const handleAddPlayer = (playerName: string) => {
    setPlayers([...players, playerName]);
  }

  const handleStartGame = () => {
    push('/game');
  }

  return (
    <main>
      <Container>
        <TitleContainer>
          Welcome to Guess the Song!!!
        </TitleContainer>

        <MusicServicesContainer>
          <>Music Service</>
          <ServiceButtonContainer>
            <a href={OauthUrl()}>
              <ServiceButton style={{background: "#1DB954", color: "#191414", border: "1px solid white"}}>Spotify</ServiceButton>
            </a>
            <ServiceButton style={{background: "red", color: "white"}}>Apple Music</ServiceButton>
          </ServiceButtonContainer>
        </MusicServicesContainer>
        <Players players={players} addPlayer={handleAddPlayer} removePlayer={handleRemovePlayer} />
        <StartGameContainer>
          <StartGameButton onClick={handleStartGame}>Start Game</StartGameButton>
        </StartGameContainer>
      </Container>
    </main>
  );
}
