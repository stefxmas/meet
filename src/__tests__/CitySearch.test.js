import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../component/CitySearch';
import { extractLocations, getEvents } from '../api';

describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  let setCurrentCity;

  beforeEach(async () => {
    const allEvents = await getEvents(); 
    const allLocations = extractLocations(allEvents);

    // Mock function for setCurrentCity
    setCurrentCity = jest.fn();

    CitySearchComponent = render(
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity} 
      />
    );
  });

  test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
    const user = userEvent.setup();
    const cityTextBox = CitySearchComponent.queryByRole('textbox');

    await user.type(cityTextBox, "Berlin");

    const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];
    await user.click(BerlinGermanySuggestion);

    // Assert that setCurrentCity was called with the selected city value
    expect(setCurrentCity).toHaveBeenCalledWith(BerlinGermanySuggestion.textContent);
    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });
});