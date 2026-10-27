import { Link } from "react-router"
import { Mail, Phone, User, Lock } from "lucide-react";
import styles from "../style/Register.module.css"

export function Register() {
    return (
        <div className={styles.registerContainer}>
            <main className={styles.registerSection}>
                <header>
                    <h1>Sign Up</h1>
                    <p>Create your account to get started.</p>
                </header>
                <form action="">
                    <div className={styles.formInput}>
                        <label htmlFor="name">Name</label>
                        <div>
                            <User className={styles.formIcon}/>
                            <input className={styles.registerInput} type="text" name="name" id="name" placeholder="Enter your name"/>
                        </div>
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="username">Username</label>
                        <div>
                            <User className={styles.formIcon}/>
                            <input className={styles.registerInput} type="text" name="username" id="username" placeholder="Enter your username"/>
                        </div>
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="email">Email address</label>
                        <div>
                            <Mail className={styles.formIcon}/>
                            <input className={styles.registerInput} type="email" name="email" id="email" placeholder="Enter your email"/>
                        </div>
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="phone">Phone number</label>
                        <div>
                            <Phone className={styles.formIcon}/>
                            <input className={styles.registerInput} type="tel" name="phone" id="phone" placeholder="Enter your phone number"/>
                        </div>
                    </div>
                    <div className={styles.passwordInput}>
                        <div className={styles.formInput}>
                            <label htmlFor="password">Password</label>
                            <div>
                                <Lock className={styles.formIcon}/>
                                <input className={styles.registerInput} type="password" name="password" id="password" placeholder="Enter your password"/>
                            </div>
                        </div>
                        <div className={styles.formInput}>
                            <label htmlFor="confirm-password">Confirm password</label>
                            <div>
                                <Lock className={styles.formIcon}/>
                                <input className={styles.registerInput} type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your password"/>
                            </div>
                        </div>
                    </div>
                    <button className={styles.loginBtn}>
                        <p>Sign Up</p>
                    </button>

                    <div className={styles.addSetting}>
                        <p>Already have an account? </p>
                        <Link to="/" className={styles.loginLink}>Sign In</Link>
                    </div>
                </form>
            </main>
        </div>
    )
}