import { React } from 'react';

const hrLogo = '../assets/images/hr logo.jpeg';

const Navbar = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-pink-400 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img className='rounded-full h-12 w-12  mr-2 App-logo' src={hrLogo} alt='hr logo' />
                <span class="font-bold text-xl tracking-tight">Bright HR APP</span>
            </div>
        </nav>
    )
}

export default Navbar;