"use client"
import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";

const Game = () => {
    const {push} = useRouter();

    const handleEndGame = () => {
        push('/')
    }
    return (
        <Container>
            <Button onClick={handleEndGame}>End Game</Button>
        </Container>
    )
}

export default Game;