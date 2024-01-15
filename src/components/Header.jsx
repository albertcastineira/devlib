import SearchBar from "./SearchBar";
import { useLocation, Link } from 'react-router-dom';

export default function Header({ handleSearch, searchQuery }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className="bg-dark-400">
            <div className="container font-dm-mono p-4 grid grid-cols-1 md:grid-cols-3">
                <div className="logo col-span-2 mb-4 md:mb-0">
                    <Link to={"/"}>
                        <h1 className="text-white font-normal text-3xl">
                            <span className="text-blue-500">&#123;</span>DEV-LIB<span className="text-blue-500">&#125;</span>
                        </h1>
                    </Link> 
                </div>
                {isHomePage && (
                    <div className="searchbar">
                        <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
                    </div>
                )}
                
            </div>
        </header>
    )
}
