import { render, screen } from "@testing-library/react"
import { routesConfig } from "./RoutesConfig"
import { createMemoryRouter, RouterProvider } from "react-router"
import { AppWithRoutes } from "./AppWithRoutes"
import userEvent from "@testing-library/user-event"

vi.mock('./Routes/Home', () => ({
    Home: () => <div data-testid='HomeMock' />
}))

vi.mock('./Routes/About', () => ({
    About: () => <div data-testid='AboutMock' />
}))

vi.mock('./Routes/PageNotFound', () => ({
    PageNotFound: () => <div data-testid='PageNotFoundMock' />
}))

vi.mock('./Routes/Post', () => ({
    Post: () => <div data-testid='PostMock' />
}))

vi.mock('./Routes/Posts', () => ({
    Posts: () => <div data-testid='PostsMock' />
}))

describe('Routes config tests', () => {
    it('Should load the home component first', () => {
        const route = '/'
        const router = createMemoryRouter(
            routesConfig, {
                initialEntries:[route]
            }
        )
        render(
            <RouterProvider router={router}/>
        )
        const home = screen.getByTestId('HomeMock');
        expect(home).toBeInTheDocument();
    })

    it('Should load the about component on about route', () => {
        const route = '/about'
        const router = createMemoryRouter(
            routesConfig, {
                initialEntries:[route]
            }
        )
        render(
            <RouterProvider router={router}/>
        )
        const about = screen.getByTestId('AboutMock');
        expect(about).toBeInTheDocument();
    })

    it('Should load the not found component on invalid route', () => {
        const route = '/notSupportedRoute'
        const router = createMemoryRouter(
            routesConfig, {
                initialEntries:[route]
            }
        )
        render(
            <RouterProvider router={router}/>
        )
        const pageNotFound = screen.getByTestId('PageNotFoundMock');
        expect(pageNotFound).toBeInTheDocument();
    })

    it('Should load the Post component on post route', () => {
        const route = '/post/4'
        const router = createMemoryRouter(
            routesConfig, {
                initialEntries:[route]
            }
        )
        render(
            <RouterProvider router={router}/>
        )
        const post = screen.getByTestId('PostMock');
        expect(post).toBeInTheDocument();
    })
    it.todo('Should load the Posts component os posts route')
    describe('Navbar navigation tests', () => {
        it('show home component on home click', async () => {
            render(<AppWithRoutes/>);
            const user = userEvent.setup();
            const homeButton = screen.getByText('Home');

            await user.click(homeButton);

            const home = screen.getByTestId('HomeMock');
            expect(home).toBeInTheDocument();
        })

        it('show About component on about click', async () => {
            render(<AppWithRoutes/>);
            const user = userEvent.setup();
            const aboutButton = screen.getByText('About');

            await user.click(aboutButton);

            const home = screen.getByTestId('AboutMock');
            expect(home).toBeInTheDocument();
        })

        it.todo('show Posts component on about click')
        
    })
})