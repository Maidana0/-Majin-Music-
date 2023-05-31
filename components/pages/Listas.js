import styles from "<@FMaidana07>/styles/Components.module.css"
import PlayList from "../PlayList"

const links = [
    { name: "Previa", url: 'https://open.spotify.com/embed/playlist/3dB8Q9RUhfNZxffSiuav41?utm_source=generator' },
    { name: "Cachengue", url: 'https://open.spotify.com/embed/playlist/23vqcm5nPhNXwnrqMGwnAN?utm_source=generator' },
    { name: "Folcklore", url: 'https://open.spotify.com/embed/playlist/1JdcAeaannwfAGwiahIbU9?utm_source=generator' },
    { name: "Canciones Viejas", url: 'https://open.spotify.com/embed/playlist/2GTdlFN2hzo39JVWWrN9nd?utm_source=generator' },
    { name: "Cumbia", url: 'https://open.spotify.com/embed/playlist/2kT9jtDYQV0cotsa64yBae?utm_source=generator' },
    { name: "Relax", url: 'https://open.spotify.com/embed/playlist/0BRPol1PdM0I7T4GU9UYaw?utm_source=generator' },
    { name: "Anime", url: 'https://open.spotify.com/embed/playlist/3kJXeJA0h8NeZJO0VXER69?utm_source=generator' }
]


export const Categorias = () => {
    return (
        <div className={`${styles.container} `}>
            <h1 className={styles.title}> ¿ Qué deseas escuchar ?</h1>
            <div className={styles.list_container}>
                {links.map(({ name }) =>
                    <button className={styles.list_btn}>
                        {name}
                    </button>)}
            </div>
        </div>)
}

