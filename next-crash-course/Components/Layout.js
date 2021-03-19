import styles from "../styles/Home.module.css";
import Nav from "./Nav";

const  Layout = ({children}) =>  {
    return (
        <div>
            <Nav />
<div className={styles.container}>
<main className={styles.main}>
    {children}
</main>

</div>
        </div>
        
    )
}

export default Layout
