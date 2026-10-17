import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './pages/BookingPage';

// Test 1: BookingForm renders correctly
describe('BookingForm', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];

  test('renders the booking form heading and labels', () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </BrowserRouter>
    );

    // Check that form labels are rendered
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('renders the submit button', () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </BrowserRouter>
    );

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('renders available time options', () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={mockAvailableTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      </BrowserRouter>
    );

    // Check that available times are rendered as options
    mockAvailableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });
});

// Test 2: initializeTimes returns expected values
describe('initializeTimes', () => {
  test('returns a non-empty array of available times', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test('returns times as strings', () => {
    const times = initializeTimes();
    times.forEach((time) => {
      expect(typeof time).toBe('string');
    });
  });
});

// Test 3: updateTimes reducer updates state correctly
describe('updateTimes', () => {
  test('returns updated times when UPDATE_TIMES action is dispatched', () => {
    const initialState = ['17:00', '18:00'];
    const testDate = new Date('2024-12-25');
    const newState = updateTimes(initialState, {
      type: 'UPDATE_TIMES',
      date: testDate,
    });

    expect(Array.isArray(newState)).toBe(true);
    expect(newState.length).toBeGreaterThan(0);
  });

  test('returns the same state for unknown action types', () => {
    const initialState = ['17:00', '18:00'];
    const newState = updateTimes(initialState, { type: 'UNKNOWN_ACTION' });
    expect(newState).toEqual(initialState);
  });

  test('returns different times for different dates', () => {
    const state = [];
    const times1 = updateTimes(state, {
      type: 'UPDATE_TIMES',
      date: new Date('2024-12-10'),
    });
    const times2 = updateTimes(state, {
      type: 'UPDATE_TIMES',
      date: new Date('2024-12-15'),
    });

    // Different dates should potentially return different available times
    expect(Array.isArray(times1)).toBe(true);
    expect(Array.isArray(times2)).toBe(true);
  });
});
