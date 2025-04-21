import { AppBar } from "../components/AppBar/AppBar";
import { CategoryGrid } from "../components/CategoryGrid/CategoryGrid";

export const HomeScreen: React.FC = () => {
    return (
        <>
            <AppBar title='WoW Enclyopedia' />
            <CategoryGrid />
        </>
    );
};

