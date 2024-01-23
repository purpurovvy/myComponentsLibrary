import { render, screen } from '@testing-library/react';
import Alert from './Alert';
import '@testing-library/jest-dom'

describe('Alert', () => {
    it('renders the title and message', () => {
        render(<Alert title="Test Title" message="Test Message" type="success" />);

        const titleElement = screen.getByText('Test Title');
        expect(titleElement).toBeInTheDocument();

        const messageElement = screen.getByText('Test Message');
        expect(messageElement).toBeInTheDocument();
    });

    it('renders the correct icon for each type', () => {
        type AlertType = "success" | "warning" | "info" | "error";
        const types:AlertType[] = ['success', 'warning', 'info', 'error'];

        types.forEach((type) => {
            render(<Alert title="Test Title" message="Test Message" type={type} />);

            const iconElement = screen.getByTestId(`Alert-${type}`);
            expect(iconElement).toBeInTheDocument();
        });
    });
});
