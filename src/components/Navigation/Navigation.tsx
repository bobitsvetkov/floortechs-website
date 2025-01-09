import { FC } from 'react';
import Navbar from './NavBar';
import NavigationLinks from './NavigationLinks';
import type { Page } from '../../types/types';

interface NavigationProps {
    currentPage: string;
    setCurrentPage: (page: Page) => void;
}

const Navigation: FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <div>
            <Navbar />
            <NavigationLinks currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default Navigation;
