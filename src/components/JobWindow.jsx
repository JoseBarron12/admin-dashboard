import { Calendar, ClipboardList, Clock, DollarSign, Plus, SquarePen, User } from "lucide-react";

export function JobWindow({setShowJobWindow}) {
    return (
        <dialog data-testid="jobWindow" open>
            <header>
                <h1>Create New Job</h1>
                <p>Schedule a new job and assign it to a an employee.</p>
            </header>
            <form>
                <fieldset>
                    <legend><User></User> <h2>CUSTOMER</h2></legend>
                    <div>
                        <label htmlFor="customer-select">Customer</label>
                        <select name="customer-select" id="customer-select">
                            <option value="">Search existing customers...</option>
                        </select>
                    </div>
                    <button>
                        <Plus></Plus> Add New Customer
                    </button>
                </fieldset>
                <fieldset>
                    <legend><Calendar></Calendar> <h2>Schedule</h2></legend>
                    <div>
                        <label htmlFor="job-date">Date</label>
                        <input type="date" name="job-date" id="job-date" />
                    </div>

                    <div>
                        <label htmlFor="job-time">Time</label>
                        <div>
                            <Clock></Clock>
                            <select name="job-time" id="job-time">
                                <option value="">Select Time</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="job-duration">Duration(Est.)</label>
                        <div>
                            <Clock></Clock>
                            <select name="job-duration" id="job-duration">
                                <option value="">Select Duration</option>
                            </select>
                        </div>
                    </div>

                </fieldset>
                <fieldset>
                    <legend> <User></User> <h2>ASSIGNMENT</h2></legend>
                    <div>
                        <label htmlFor="employee-select">Employee</label>
                        <select name="employee-select" id="employee-select">
                            <option value="">Search employees...</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend><ClipboardList></ClipboardList> <h2>JOB DETAILS</h2></legend>
                    <div>
                        <label htmlFor="job-detail">Service / Description</label>
                        <textarea name="job-detail" id="job-detail"></textarea>
                    </div>
                </fieldset>
                <fieldset>
                    <legend><DollarSign></DollarSign> <h2>COST & COMMISSION</h2></legend>
                    <div>
                        <label htmlFor="job-cost"> Job Cost</label>
                        <div>
                            <DollarSign></DollarSign>
                            <input type="text" id="job-cost"/>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend><SquarePen></SquarePen> <h2>ADDITIONAL INFORMATION</h2></legend>
                    <div>
                        <label htmlFor="job-notes">Notes</label>
                        <textarea name="job-notes" id="job-notes"></textarea>
                    </div>
                </fieldset>
            </form>
            <footer>
                <button data-testid="jobWindowCloseBtn" onClick={() => {
                    setShowJobWindow(false);
                }}>
                    Cancel
                </button>
                <button data-testid="jobWindowAddBtn" onClick={() => {
                    setShowJobWindow(false);
                }}>
                    Create Job
                </button>
            </footer>
        </dialog>
    )
}