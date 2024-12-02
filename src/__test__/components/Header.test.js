import { act } from 'react'; 
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header';

describe('Header Component', () => {
  it('should render the title correctly', () => {
    act(() => {
      render(<Header />);
    });
    expect(screen.getByText('El Hábito de fumar')).toBeInTheDocument();
  });
});
