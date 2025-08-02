interface PostEntryProps {
  date: string;
  title: string;
  url: string;
}

export function PostEntry({ date, title, url }: PostEntryProps) {
  return (
    <li className="grid grid-cols-5 gap-x-2">
      <span className="font-light text-secondary">{date}</span>
      <a href={url} className="col-span-4">
        {title}
      </a>
    </li>
  );
}
