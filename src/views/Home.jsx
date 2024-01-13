import CardList from "../components/CardList"

export default function Home({filteredResults}) {
  return (
    <div className="container text-white">
      <CardList filteredResults={filteredResults} />
    </div>
  )
}
