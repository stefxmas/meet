import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../component/CitySearch';
import { extractLocations, getEvents } from '../api';

describe('<CitySearch /> component', () => {
  let CitySearchComponent;

  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
  });

  test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents(); 
    const allLocations = extractLocations(allEvents);
    
    // Pass the allLocations prop to the CitySearch component
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.type(cityTextBox, "Berlin");

    // Use findAllByRole to get all suggestions and check if they are rendered
    const suggestions = await CitySearchComponent.findAllByRole('listitem');

    // Check if the suggestion for "Berlin, Germany" is present
    const BerlinGermanySuggestion = suggestions.find(item => 
      item.textContent === "Berlin, Germany"
    );

    expect(BerlinGermanySuggestion).toBeDefined(); // Ensure the suggestion is found

    await user.click(BerlinGermanySuggestion);

    // Now, we check if the textbox has the expected value
    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });
});