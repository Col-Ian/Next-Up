type SplitIntoParagraphsProps = {
	text: string;
	id: string;
};

function SplitIntoParagraphs({ text, id }: SplitIntoParagraphsProps) {
	const newSplit: string[] = text.split('\n');

	return (
		<div>
			{newSplit.map((item: string, index: number) => {
				return <p key={`${id}${index}`}>{item}</p>;
			})}
		</div>
	);
}

export default SplitIntoParagraphs;
