interface TalkEntryProps {
	date: string;
	title: string;
	videoUrl: string;
	notesUrl?: string;
	slidesUrl?: string;
}

export function TalkEntry({ date, title, videoUrl }: TalkEntryProps) {
	return (
		<article className="flex flex-col">
			<span className="text-xs">{date}</span>
			<a href={videoUrl}>{title}</a>
		</article>
	);
}
