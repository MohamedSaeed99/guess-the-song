"use client"
import { Container, MusicServicesContainer, ServiceButton, ServiceButtonContainer, TitleContainer } from "./page.styles";
import { useState } from "react";
import Players from "./components/Players/Players";

export default function Home() {
  const [players, setPlayers] = useState<string[]>(["Jack"]);

  const handleRemovePlayer = (playerIndex: number) => {
    const updatedPlayers = [...players]
    updatedPlayers.splice(playerIndex, 1);
    setPlayers(updatedPlayers);
  }

  const handleAddPlayer = (playerName: string) => {
    setPlayers([...players, playerName])
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
            <ServiceButton style={{background: "#1DB954", color: "#191414", border: "1px solid white"}}>Spotify</ServiceButton>
            <ServiceButton style={{background: "red", color: "white"}}>Apple Music</ServiceButton>
          </ServiceButtonContainer>
        </MusicServicesContainer>
        <Players players={players} addPlayer={handleAddPlayer} removePlayer={handleRemovePlayer} />
      </Container>
    </main>
  );
}
