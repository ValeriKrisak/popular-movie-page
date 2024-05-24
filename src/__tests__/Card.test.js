import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/UI/Card/Card';

const defaultimg = 'https://media.themoviedb.org/t/p/w220_and_h330_face/invalid.jpg';

describe('Card component', () => {

    it('renders image with correct source', () => {
        render(<Card title="Movie Title" date="2024-05-24" image="image.jpg" />);
        const imgElement = screen.getByAltText('Movie Title');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', 'https://media.themoviedb.org/t/p/w220_and_h330_face/image.jpg');
    });

    it('formats date correctly', () => {
        render(<Card title="Movie Title" date="2024-05-24" image="image.jpg" />);
        expect(screen.getByText('May 24, 2024')).toBeInTheDocument();
    });

    it('displays default image if provided image URL is invalid', () => {
        render(<Card title="Movie Title" date="2024-05-24" image="invalid.jpg" />);
        const imgElement = screen.getByAltText('Movie Title');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', defaultimg);
    });


});