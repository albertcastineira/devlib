import { Icon } from '@iconify/react';

export default function SearchBar({handleSearch, searchQuery}) {
    return (
        <>  
            <form>   
                <div className="relative">
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none">
                        <Icon icon="material-symbols:search" className="text-dark-100" />
                    </div>
                    <input 
                        type="text" 
                        className="block w-full h-full py-2 text-sm bg-dark-400 border-b border-dark-100 text-white placeholder:text-dark-100 outline-none font-dm-sans" 
                        placeholder="Search topics..." 
                        autoComplete="off"
                        spellCheck="false"
                        value={searchQuery}
                        onChange={handleSearch}
                    />          
                </div>
            </form>
        </>
    );
}
