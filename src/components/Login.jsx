import { Link } from "react-router"
import styles from "../style/Login.module.css"
import { Mail,Lock } from "lucide-react"
export function Login({}) {
    return (
        <main className={styles.login}>
            <aside>

            </aside>
            <div>
                <section className={styles.loginSection}>
                    <h1>Log in</h1>
                    <form>
                        <fieldset className={styles.credentials}>
                            <div className={styles.formInput}>
                                <label htmlFor="user-name">
                                    Email address
                                </label>
                                <div>
                                    <Mail className={styles.formIcon}></Mail>
                                    <input className={styles.loginInput} type="text" name="user-name" id="user-name" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className={styles.formInput}>
                                <label htmlFor="user-password">
                                    Password
                                </label>
                                <div>
                                    <Lock className={styles.formIcon}></Lock>
                                    <input className={styles.loginInput} type="text" name="user-password" id="user-password" placeholder="Enter your password" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className={styles.credentialSetting}>
                            <div>
                                <input type="checkbox" name="save-credential" id="save-credential" />
                                <label htmlFor="save-credential">Remember password</label>
                            </div>
                            <a href="#">Forgot Password?</a>
                        </fieldset>
                        <button className={styles.loginBtn} onClick={(e) => {e.preventDefault()}}>
                            <Link to="home">Sign In</Link>
                        </button>
                
                    <div className={styles.addSetting}>
                        <p>Don't have an account? <a href="#" className={styles.link}>Sign up</a></p>
                    </div>
                    </form>
                </section>
            </div>
        </main>
    )
}