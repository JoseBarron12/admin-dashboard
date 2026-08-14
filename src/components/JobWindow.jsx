import { Calendar, ClipboardList, Clock, DollarSign, Plus, SquarePen, User, X } from "lucide-react";
import styles from "../style/JobWindow.module.css"

export function JobWindow({setShowJobWindow}) {
    return (
        <dialog data-testid="jobWindow" open className={styles.jobWindow}>
            <header className={styles.jobWindowHeader}>
                <div className={styles.jobWindowHeaderTxt}>
                    <h1>Create New Job</h1>
                    <p>Schedule a new job and assign it to a an employee.</p>
                </div>
                <button  className={styles.jobWindowHeaderBtn} onClick={() => {
                    setShowJobWindow(false);
                    }}>
                        <X className={styles.jobWindowIcon}></X>
                </button>
            </header>
            <form className={styles.jobForm}>
                <fieldset>
                    <legend className={styles.jobFormHeader}><User className={styles.jobWindowIcon}></User> <h2>CUSTOMER</h2></legend>
                    <div className={styles.jobFormInputBox}>
                        <label className={styles.jobFormInputLabel} htmlFor="customer-select">Customer</label>
                        <select className={styles.jobFormInput} name="customer-select" id="customer-select">
                            <option value="">Search existing customers...</option>
                        </select>
                    </div>
                    <button className={styles.customerBtn} onClick={(e) => {
                        e.preventDefault()
                    }}>
                        <Plus className={styles.jobFormIcon} ></Plus> Add New Customer
                    </button>
                </fieldset>
                <fieldset>
                    <legend className={styles.jobFormHeader}><Calendar className={styles.jobWindowIcon}></Calendar> <h2>Schedule</h2></legend>
                    <div className={styles.scheduleFormSection}>
                        <div>
                            <label className={styles.jobFormInputLabel} htmlFor="job-date">Date</label>
                            <div className={styles.jobFormInputTest}>
                                <Calendar className={styles.jobFormIcon}></Calendar>
                                <input type="date" name="job-date" id="job-date" />
                            </div>
                        </div>
                        <div >
                            <label className={styles.jobFormInputLabel} htmlFor="job-time">Time</label>
                            <div className={styles.jobFormInputTest}>
                                <Clock className={styles.jobFormIcon}></Clock>
                                <select name="job-time" id="job-time">
                                    <option value="">Select Time</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.scheduleFormSectionDuration}>
                            <label className={styles.jobFormInputLabel} htmlFor="job-duration">Duration(Est.)</label>
                            <div className={styles.jobFormInputTest}>
                                <Clock className={styles.jobFormIcon}></Clock>
                                <select name="job-duration" id="job-duration">
                                    <option value="">Select Duration</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </fieldset>
                <fieldset>
                    <legend className={styles.jobFormHeader}> <User className={styles.jobWindowIcon}></User> <h2>ASSIGNMENT</h2></legend>
                    <div className={styles.jobFormInputBox}>
                        <label className={styles.jobFormInputLabel} htmlFor="employee-select">Employee</label>
                        <select className={styles.jobFormInput} name="employee-select" id="employee-select">
                            <option value="">Search employees...</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend className={styles.jobFormHeader}><ClipboardList className={styles.jobWindowIcon}></ClipboardList> <h2>JOB DETAILS</h2></legend>
                    <div className={styles.jobFormInputBox}>
                        <label className={styles.jobFormInputLabel} htmlFor="job-detail">Service / Description</label>
                        <textarea className={styles.jobFormInput} name="job-detail" id="job-detail"></textarea>
                    </div>
                </fieldset>
                <fieldset>
                    <legend className={styles.jobFormHeader}><DollarSign className={styles.jobWindowIcon}></DollarSign> <h2>COST & COMMISSION</h2></legend>
                    <div >
                        <label className={styles.jobFormInputLabel} htmlFor="job-cost"> Job Cost</label>
                        <div className={styles.jobFormInputTest}>
                            <DollarSign className={styles.jobFormIcon}></DollarSign>
                            <input type="text" id="job-cost"/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend className={styles.jobFormHeader}><SquarePen className={styles.jobWindowIcon}></SquarePen> <h2>ADDITIONAL INFORMATION</h2></legend>
                    <div className={styles.jobFormInputBox}>
                        <label className={styles.jobFormInputLabel}  htmlFor="job-notes">Notes</label>
                        <textarea className={styles.jobFormInput} name="job-notes" id="job-notes"></textarea>
                    </div>
                </fieldset>
            </form>
            <footer className={styles.jobWindowFooter}>
                <button className={styles.jobWindowFooterCancelBtn} data-testid="jobWindowCloseBtn" onClick={() => {
                    setShowJobWindow(false);
                }}>
                    Cancel
                </button>
                <button className={styles.jobWindowFooterAddBtn} data-testid="jobWindowAddBtn" onClick={() => {
                    setShowJobWindow(false);
                }}>
                    Create Job
                </button>
            </footer>
        </dialog>
    )
}