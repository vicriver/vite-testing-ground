import { useEffect, useState } from "react";
import Papa from "papaparse";

interface CardProps {
	id: number
	chinese: string
	pinyin: string
	english: string

}

export default function Main() {
	const count = 10;
	const numbers : string[] = [];
	const [ cardList, setCardList ] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("/hsk1.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const result = Papa.parse<CardProps>(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        setCardList(result.data); // ✅ correctly updates state
      });
  }, []);

	console.log(cardList);

	for (let i = 0; i < count; i++ ) { 
		numbers.push(`Page number ${i + 1}`)
	}

	console.log(numbers);
  return (
		<div className="p-10 flex justify-center align-middle items-center rounded-md border-1 border-white overflow-hidden">
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="flex flex-wrap gap-2" >{cardList?.map(card => <div className="bg-gray-200 text-black h-60 w-36 rounded-md p-4 origin-bottom hover:bg-red-300 transition-all active:rotate-15 flex flex-col justify-between border-10 border-white">
				{card.chinese} {card.english}
				</div>)}</div>
		</div>
  )
}
