import { render } from '@testing-library/react';
import CitySearch from '../component/CitySearch';
import userEvent from '@testing-library/user-event';

describe('<CitySearch /> component', () => {
    test('suggestions list is hidden by default', () => {
        const CitySearchComponent = render(<CitySearch />);
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
      });
    
      test('renders a list of suggestions when city textbox gains focus', async () => {
        const CitySearchComponent = render(<CitySearch />);
        const user = userEvent.setup();
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.click(cityTextBox);
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).toBeInTheDocument();
        expect(suggestionList).toHaveClass('suggestions');
      });
});

