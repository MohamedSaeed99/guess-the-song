"use client"
import { Container, MusicServicesContainer, ServiceButton, ServiceButtonContainer, TitleContainer } from "./page.styles";
import { useState } from "react";
import Players from "./components/Players/Players";

export default function Home() {
  const [players, setPlayers] = useState<string[]>(["Jack"]);

  const handleRemovePlayer = (playername: string) => {
    const updatedPlayers = players.filter(player => player !== playername);
    setPlayers(updatedPlayers);
  }

  const handleAddPlayer = (playername: string) => {
    setPlayers([...players, playername])
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
