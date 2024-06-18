const OauthUrl = () => {
    return `${process.env.SPOTIFY_AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID}`
}