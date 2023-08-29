import React from 'react'

type Props = {
    grade: number
}

export const RatingViaEmoji = ({grade}: Props) => {
    if (grade > 5) grade = 5;
    if (grade < 0) grade = 0;
    let emoji = ["🫥","🫥","🫥","🫥","🫥"];
    emoji.fill("😁", 0, grade);

  return (
<main className='flex items-center justify-center gap-8'>
    <div className='bg-blue-300 p-2 rounded text-white'>{grade}</div>
    <div>{emoji}</div>
</main>
    )
}
