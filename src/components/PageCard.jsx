import { Link } from "react-router-dom";

export default function PageCard({ title, description, link }) {
  return (
    <Link to={link}>
      <div className="bg-dark-300 p-4 w-full rounded">
        <h2 className="font-dm-sans font-bold text-lg mb-6 md:line-clamp-2 h-[56px]">{title}</h2>
        <p className="font-dm-mono font-normal text-md text-dark-100 line-clamp-3">{description}</p>
      </div>
    </Link>
  )
}
