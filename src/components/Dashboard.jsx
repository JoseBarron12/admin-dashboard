import { Link } from "react-router"
import { Menu, Search, Plus,Bell} from "lucide-react"
import defaultPfpPNG from "../assets/react.svg"

export function Dashboard() {
    return (
        <>
            <header>
                <div>
                    <Menu/>
                </div>
                <div>
                    <div role="search">
                        <label htmlFor="search-query">
                            <Search></Search>
                            <input type="search" name="search-query" id="search-query" placeholder="Search jobs, customers, etc..." />
                        </label>
                    </div>
                    <div>
                        <button>
                            <Plus></Plus>
                            <p>Create Job</p>
                        </button>
                        <button>
                            <Bell></Bell>
                        </button>
                        <button>
                            <img src={defaultPfpPNG} alt="" />
                        </button>
                    </div>
                </div>
            </header>
            <div>
                <nav>

                </nav>
                <main>
                </main>
            </div>
        </>
    )
}