import { Playlist, PlaylistSection } from "./Playlists.styles";

type PlaylistsProps = {
    playlists: string[],
    selectedPlaylist: string,
    setSelectedPlaylist: (playlist: string) => void,
}

const Playlists = ({playlists, selectedPlaylist, setSelectedPlaylist}: PlaylistsProps) => {
    return (
        <PlaylistSection>
            {playlists.map((playlist, index) => {
                return(
                    <Playlist onClick={() => setSelectedPlaylist(playlist)} sx={{
                        border: selectedPlaylist === playlist ? "1px solid red" : "unset"
                    }}>{playlist}</Playlist>
                )
            })}
        </PlaylistSection>
    )
}

export default Playlists;