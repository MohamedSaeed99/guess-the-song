"use client"
import { PlayerCard, PlayerContainer } from "./Players.styles"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { SetStateAction, useState } from "react";
import { Button, Divider, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";

type PlayersProps = {
    players: string[],
    addPlayer: (playerName: string) => void,
    removePlayer: (playerIndex: number) => void
}

const Players = ({players, addPlayer, removePlayer}: PlayersProps) => {
    const [addingPlayer, setAddingPlayer] = useState(false);
    const [playerName, setPlayerName] = useState("");

    const handleAdd = () => {
        addPlayer(playerName);
        setAddingPlayer(false);
        setPlayerName("");
    }

    const handleCancel = () => {
        setAddingPlayer(false);
        setPlayerName("");
    }

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleAdd();
        }
    }

    const handleInputChange = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
        setPlayerName(event.currentTarget.value)
    }

    return (
        <PlayerContainer>
            {players.map((player, index) => {
                return (
                    <PlayerCard key={index}>
                        {player}
                        <RemoveCircleOutlineIcon onClick={() => removePlayer(index)}/>
                    </PlayerCard>
                )
            })}
            {
                addingPlayer ? 
                    <FormControl variant="standard">
                        <Input
                            onKeyDown={handleKeyDown}
                            onChange={handleInputChange}
                            sx={{maxWidth: "300px"}}
                            placeholder="Username"
                            id="username"
                            type={'text'}
                            value={playerName}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button
                                        sx={{padding:"5px 10px", color: "red"}}
                                        aria-label="Cancel Adding Player"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </Button>
                                    <Divider sx={{ height: "15px", color: "black" }} orientation="vertical"/>
                                    <Button
                                        sx={{padding:"5px 10px", color: "green"}}
                                        aria-label="Submit Adding Player"
                                        onClick={handleAdd}
                                    >
                                        Submit
                                    </Button>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    : 
                    <AddCircleOutlineIcon onClick={() => setAddingPlayer(true)} />
            }
        </PlayerContainer>
    )
}

export default Players;