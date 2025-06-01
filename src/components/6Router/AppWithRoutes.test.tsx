import { TextEncoder } from 'util';
import { AppWithRoutes } from './AppWithRoutes';
import { render, screen } from '@testing-library/react';
global.TextEncoder = TextEncoder;

vi.mock('./Routes/Home', () => ({
    Home: () => <div data-testid='HomeMock' />
}))


describe('App with routes test suite', () => {
    it('should always load the navbar', () => {// En caso de ser una SPA ¿se podría testear antes de cada test si el navbar está? (usar BeforeEach)
        render(<AppWithRoutes/>)
        const navbar = screen.getByTestId('NavBar')

        expect(navbar).toBeInTheDocument()
    })

    it('Should initially load the home component', () => {
        render(<AppWithRoutes/>)
        const home = screen.getByTestId('HomeMock')

        expect(home).toBeInTheDocument()
    })

})