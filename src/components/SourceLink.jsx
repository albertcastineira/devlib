import { Icon } from '@iconify/react';

export default function SourceLink({ name, link }) {
  return (
    <div>
      <p className="italic">
        <a className="flex items-center hover:underline" href={link} target="_blank" rel="noreferrer">
            <Icon icon="ph:link-bold" className="mr-2" /> {name}
        </a>
    </p>
    </div>
  )
}
