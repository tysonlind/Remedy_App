import { render, screen, cleanup } from "@testing-library/react";
import Brain from "../Brain";


test('should render brain component', () => {
   render(<Brain />);
   const brainElement = screen.getByTestId('brain');
   expect(brainElement).toBeInTheDocument();
   expect(brainElement).toHaveTextContent('Brain');
})