import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const ThemeChanger = ({ onThemeChange, theme }) => {
    return <button className='bg-ghost mr-10' onClick={onThemeChange}>
        {
            theme === "light" ?
                <MoonIcon className="fill-current w-8 h-8" />
                :
                <SunIcon className="fill-current w-8 h-8" />
        }
    </button>
}