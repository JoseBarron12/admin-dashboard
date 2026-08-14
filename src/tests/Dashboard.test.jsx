import { render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import { Dashboard } from '../components/Dashboard';
import userEvent from '@testing-library/user-event';

describe("Dashboard component", () => {
    describe("navbar functionality", () => {
        it("should render navbar  on initial mount", () => {
            render(<MemoryRouter> <Dashboard/> </MemoryRouter>);

            const navbar = screen.getByTestId("navbar")

            expect(navbar).toBeInTheDocument();

        });

        /* 
        it("should unrender navbar on button close click", async () => {
            const user = userEvent.setup();
            
            render(<MemoryRouter><Dashboard/></MemoryRouter>)

            const btn = screen.getByTestId("close-nav-btn");

            const navbar = screen.getByTestId("navbar")

            await user.click(btn);

            expect(navbar).not.toBeInTheDocument();
            
        });*/

        it("should render open navbar button on close click", async () => {
            const user = userEvent.setup();
            
            render(<MemoryRouter><Dashboard/></MemoryRouter>)

            const btn = screen.getByTestId("close-nav-btn");

            await user.click(btn);

            const openBtn = screen.getByTestId("open-nav-btn");

            expect(openBtn).toBeInTheDocument();
            
        });

        /* 
        
        it("should unrender close navbar button on button close click", async () => {
            const user = userEvent.setup();
            
            render(<MemoryRouter><Dashboard/></MemoryRouter>)

            const btn = screen.getByTestId("close-nav-btn");

            await user.click(btn);

            expect(btn).not.toBeInTheDocument();
            
        });*/

    });

    describe("job window functionality", () => {
        it("should not render job window on initial mount", () => {
            render(<MemoryRouter> <Dashboard/> </MemoryRouter>);

            const jobWindow = screen.queryByTestId("jobWindow");

            expect(jobWindow).toBe(null);

        });

        it("should render job window on add job btn click", async () => {
            const user = userEvent.setup()
            
            render(<MemoryRouter> <Dashboard/> </MemoryRouter>);

            const btn = screen.getByTestId("jobWindowBtn");

            await user.click(btn);

            const jobWindow = screen.getByTestId("jobWindow")

            expect(jobWindow).toBeInTheDocument();

        });

        it("should render job window with cancel and add job btns", async () => {
            const user = userEvent.setup()
            
            render(<MemoryRouter> <Dashboard/> </MemoryRouter>);

            const btn = screen.getByTestId("jobWindowBtn");

            await user.click(btn);

            const cancelBtn = screen.getByTestId("jobWindowCloseBtn");
            const addBtn = screen.getByTestId("jobWindowAddBtn");

            expect(cancelBtn).toBeInTheDocument();
            expect(addBtn).toBeInTheDocument();
        })

        it("should unrender job window with cancel job btn click", async () => {
            const user = userEvent.setup()
            
            render(<MemoryRouter> <Dashboard/> </MemoryRouter>);

            const btn = screen.getByTestId("jobWindowBtn");

            await user.click(btn);

            const cancelBtn = screen.getByTestId("jobWindowCloseBtn");
            
            await user.click(cancelBtn);


            expect(screen.queryByTestId("jobWindow")).toBe(null);

        });

        it("should unrender job window with add job btn click", async () => {
            const user = userEvent.setup()
            
            render(<MemoryRouter> <Dashboard/> </MemoryRouter>);

            const btn = screen.getByTestId("jobWindowBtn");

            await user.click(btn);

            const addBtn = screen.getByTestId("jobWindowAddBtn");
            
            await user.click(addBtn);


            expect(screen.queryByTestId("jobWindow")).toBe(null);

        });




    })
})