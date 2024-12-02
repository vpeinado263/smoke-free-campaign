import { act } from 'react'; 
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('renders the footer text correctly', () => {
    act(() => {
      render(<Footer />);
    });
    const footerText = screen.getByText(/© 2024 Blog sobre Cigarrillo y Nicotina. Todos los derechos reservados./i);
    expect(footerText).toBeInTheDocument();
  });
});
