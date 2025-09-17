interface WorkEntryProps {
	position: string;
	company: string;
	companyUrl: string;
	range: string;
}

export function WorkEntry({
	position,
	company,
	companyUrl,
	range,
}: WorkEntryProps) {
	return (
		<li>
			<strong>{position}</strong> at <a href={companyUrl}>{company}</a>{" "}
			<span className="text-sm font-light">({range})</span>
		</li>
	);
}
