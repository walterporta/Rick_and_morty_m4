import { useSelector } from "react-redux";
import styles from "./favorites.module.css"
import { Link } from "react-router-dom";

const Favorites = () => {

    const {myFavorite} = useSelector(state => state)
    return (
        <div>
            {
                myFavorite.map((characters) => { 
                    return (
                        <div className={styles.container} >
                        
                        <Link to={`/detail/${characters.id}`}>
                        <h2 className={styles.name}>{characters.name}</h2>
                        <h2 className={styles.species}>{characters.species}</h2>
                        <h2 className={styles.gender}>{characters.gender}</h2>
                        <img  src={characters.image} alt={characters.name} className={styles.image} />
                        </Link>
      
                        </div>
                    )   
                })
            }   
        </div> 
    )
}

export default Favorites; 