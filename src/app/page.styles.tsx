"use client";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";

export const PlayButton = styled(Button)({
    fontSize: "1.5rem",
    padding: "10px 20px",
    background: "white",
    boxShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.25)",
});

export const Container = styled(Box)({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
});

export const TitleContainer = styled(Box)({
    fontSize: "1.5rem"
});

export const MusicServicesContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "8px"
});

export const ServiceButtonContainer = styled(Box)({
    display: "flex",
    gap: "8px"
});

export const ServiceButton = styled(Button)({
    padding: "5px 10px",
    boxShadow: "4px 4px 4px 0 rgba(0, 0, 0, 0.25)",
});