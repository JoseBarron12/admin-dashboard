export function JobWindow({setShowJobWindow}) {
    return (
        <dialog data-testid="jobWindow">
            <header><h1>Create New Job</h1>
                <p>Schedule a new job and assign it to a an employee.</p>
            </header>
            <form>
                fieldset*
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