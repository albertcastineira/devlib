import CardList from "../components/CardList"

export default function Home({searchResults}) {
  return (
    <div className="container text-white">
      <CardList searchResults={searchResults} />
    </div>
  )
}
