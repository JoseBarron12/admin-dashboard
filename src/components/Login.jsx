import { Link } from "react-router"
import styles from "../style/Login.module.css"
import { Mail,Lock } from "lucide-react"
export function Login({}) {
    return (
        <main className={styles.login}>
            <aside>

            </aside>
            <section>
                <h1>Log in</h1>
                <form>
                    <fieldset>
                        <div className={styles.formBox}>
                            <label htmlFor="user-name">
                                Email address
                            </label>
                            <div>
                                <Mail></Mail>
                                <input type="text" name="user-name" id="user-name" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className={styles.formBox}>
                            <label htmlFor="user-password">
                                Password
                            </label>
                            <div>
                                <Lock></Lock>
                                <input type="text" name="user-password" id="user-password" placeholder="Enter your password" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <input type="radio" name="save-credential" id="save-credential" />
                            <label htmlFor="save-credential">Remember password</label>
                        </div>

                        <a href="#">Forgot Password?</a>

                    </fieldset>

                    <button onClick={(e) => {e.preventDefault()}}>
                        <Link to="home">Sign In</Link>
                    </button>
                </form>

                <div>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>

            </section>
        </main>
    )
}