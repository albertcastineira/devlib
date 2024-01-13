import PageCard from "./PageCard.jsx";
import { Icon } from '@iconify/react';

export default function CardList({ searchResults }) {
  return (
    <>  
      {searchResults.length === 0 ? (
        <div className="text-center py-[30vh] min-h-[80vh] font-dm-mono text-dark-100">
          <Icon className="block mx-auto" icon="ic:baseline-search-off" width="70" height="70" />
          <p className="block items-center">
            Oops! It seems we couldn't find any matching results. <br /> Please refine your search or explore other topics.
          </p>
        </div>
      ) : null}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${searchResults.length === 0 ? "" : "min-h-[80vh]" }`}>
        {searchResults.map((page) => (
          <PageCard
            key={page.page}
            link={page.page}
            title={page.title}
            description={page.description}
          />
        ))}
      </div>
    </>
  );
}
