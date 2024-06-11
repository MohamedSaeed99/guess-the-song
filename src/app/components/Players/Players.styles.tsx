import styled from "@emotion/styled";
import { Button } from "@mui/material";


export const PlayerContainer = styled.div({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "12px"
});

export const PlayerCard = styled(Button)({
    display: "flex",
    gap: "8px",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid black",
    padding: "5px 10px",
    boxShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    color: "black"
});
