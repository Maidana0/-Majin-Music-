import styles from "<@FMaidana07>/styles/Components.module.css"

const PlayList = ({ url }) => {
    return (
        <iframe
            className={styles.iframe}
            src={`https://open.spotify.com/embed/playlist/${url}?utm_source=generator`}
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    )
}

export default PlayList