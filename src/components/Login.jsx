import { Link } from "react-router"
import styles from "../style/Login.module.css"
import {Lock, User } from "lucide-react"

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
                                    Username
                                </label>
                                <div>
                                    <User className={styles.formIcon}></User>
                                    <input className={styles.loginInput} type="text" name="username" id="username" placeholder="Enter your username" />
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
                        <Link to="home" className={styles.loginBtn}>
                            <p>Sign In</p>
                        </Link>
                
                    <div className={styles.addSetting}>
                        <p>Don't have an account? </p>
                        <Link to="register" className={styles.register}>Sign Up</Link>
                    </div>
                    </form>
                </section>
            </div>
        </main>
    )
}