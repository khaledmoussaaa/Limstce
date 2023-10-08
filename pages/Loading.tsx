import styles from '../app/styles/page.module.css'
function Loading ()
{
    return(
        <div className={styles.loading}>
            <img src="/Images/Animation/Loading.gif" alt="" />
        </div>
    )
}

export default Loading;