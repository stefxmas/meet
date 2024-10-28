import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../component/CitySearch';
import { extractLocations, getEvents } from '../api';
import App from '../App';


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
      allLocations={allLocations} // Pass the allLocations to the component
      setCurrentCity={setCurrentCity} // Use the mocked setCurrentCity function
      setInfoAlert={() => { }}
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

describe('<CitySearch /> integration', () => {
  test('renders suggestions list when the app is rendered.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
  
    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
    await user.click(cityTextBox);
  
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
  
    await waitFor(() => {
      const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
      expect(suggestionListItems.length).toBe(allLocations.length + 1);
     });
   });
  });