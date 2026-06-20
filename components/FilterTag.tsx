import clsx from 'clsx'
import { SetStateAction, useState } from 'react';

interface Props {
    text: string;
    thisCategory: string;
    selectedCategory: string | null;
    setCategoryFilter: React.Dispatch<SetStateAction<string | null>>;
}

const FilterTag = ({ text, thisCategory, selectedCategory, setCategoryFilter }: Props) => {
    const handleClick = () => {
        if (selectedCategory === thisCategory) {
            setCategoryFilter(null)
        } else {
            setCategoryFilter(thisCategory)
        }
    }

  return (
    <button
        onClick={handleClick}
        className={clsx(
            "px-4 py-2",
            "text-sm lg:text-md",
            "outline rounded-lg",
            "duration-0",
            selectedCategory === thisCategory
                ? "outline-brandwhite bg-brandwhite text-black font-semibold"
                : "outline-brandwhite bg-transparent font-normal",
            selectedCategory !== thisCategory && "hover:bg-brandwhite/10"
        )}
    >
        {selectedCategory === thisCategory &&
            <i className='fa fa-check mr-2' aria-hidden="true"></i>
        }
        {text}
    </button>
  )
}

export default FilterTag