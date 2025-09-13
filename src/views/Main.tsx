

export default function Main() {
	const count = 10;
	const numbers : string[] = [];
	const cards = [
		{
		title: "First Card",
		content: "Ace here"
	},
	{
		title: "Jack",
		content: "Jack up"
	},
	{
		title: "Joker",
		content: "Joke's on you!"
	},
	{
		title: "Jack",
		content: "Jack up"
	},
	{
		title: "Joker",
		content: "Joke's on you!"
	},
	{
		title: "Jack",
		content: "Jack up"
	},
	{
		title: "Joker",
		content: "Joke's on you!"
	},
	{
		title: "Jack",
		content: "Jack up"
	},
	{
		title: "Joker",
		content: "Joke's on you!"
	},
	{
		title: "Jack",
		content: "Jack up"
	},
	{
		title: "Joker",
		content: "Joke's on you!"
	},
	{
		title: "Jack",
		content: "Jack up"
	},
	{
		title: "Joker",
		content: "Joke's on you!"
	},
];
	for (let i = 0; i < count; i++ ) { 
		numbers.push(`Page number ${i + 1}`)
	}

	console.log(numbers);
  return (
		<div className="h-[90vh] w-[90vw] p-10 flex justify-center align-middle items-center rounded-md border-1 border-white">
      <div className="flex flex-wrap gap-2" >{cards.map(card => <div className="bg-gray-200 text-black h-60 w-36 rounded-md p-4 origin-bottom hover:bg-red-300 transition-all active:rotate-15 flex flex-col justify-between border-10 border-white">{card.title} {card.content}</div>)}</div>
		</div>
  )
}
