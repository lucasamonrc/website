interface TalkEntryProps {
  date: string;
  title: string;
  videoUrl: string;
  notesUrl?: string;
  slidesUrl?: string;
}

export function TalkEntry({
  date,
  title,
  videoUrl,
  notesUrl,
  slidesUrl,
}: TalkEntryProps) {
  return (
    <li className="grid grid-cols-8 space-x-4 pl-0">
      <span className="text-sm md:text-base font-light text-secondary col-span-2">
        {date}
      </span>
      <a href={videoUrl} className="col-span-5">
        {title}
      </a>

      {notesUrl && (
        <a href={notesUrl} className="text-sm font-normal">
          Notes
        </a>
      )}

      {slidesUrl && (
        <a href={slidesUrl} className="text-sm font-normal">
          Slides
        </a>
      )}
    </li>
  );
}
