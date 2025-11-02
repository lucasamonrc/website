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
		<article className="flex flex-col">
			<span className="text-secondary text-xs">{date}</span>

			<span className="flex items-baseline gap-x-4">
				<a href={videoUrl} className="col-span-5">
					{title}
				</a>
				{notesUrl && (
					<a href={notesUrl} className="text-xs">
						Notes
					</a>
				)}
				{slidesUrl && (
					<a href={slidesUrl} className="text-xs">
						Slides
					</a>
				)}
			</span>
		</article>
	);
}
