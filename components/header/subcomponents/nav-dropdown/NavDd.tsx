'use client'
import { useRef, useState } from 'react'
import { NavLinkType } from '@/lib/types';
import NavDdMenu from './NavDdMenu';

interface Props {
    item: NavLinkType;
    className: string;
}

const NavDd = ({ item, className }: Props) => {
    const [isDdOpen, setIsDdOpen] = useState<boolean>(false)
    const btnRef = useRef<HTMLButtonElement>(null)

    const toggleDdOpen = () => {
        setIsDdOpen(prev => !prev)
    }

    return (
    <div className='relative'>
        <button
            ref={btnRef}
            onClick={toggleDdOpen}
            className={className}
        >
            {item.label}
        </button>
        <NavDdMenu
            isDdOpen={isDdOpen}
            setIsDdOpen={setIsDdOpen}
            btnCurrent={btnRef.current}
            items={item.dropdown}
        />
    </div>
    )
}

export default NavDd