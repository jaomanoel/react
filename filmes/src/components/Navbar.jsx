import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './NavBar.css';

const Navbar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const valueInput = (e) => setSearch(e.target.value)

    const handleClick = (e) => {
        e.preventDefault();

        if(!search) return;

        navigate(`/search?query=${search}`)
    }

    return (
        <>
            <nav className='navBar'>
                <h2>
                    <Link to='/'>
                        <BiCameraMovie/>Home
                    </Link>
                </h2>

                <form onSubmit={handleClick}>
                    <label htmlFor="search" className="sr-only">Busque um filme</label>
                    <input type="text" name="search" placeholder="Busque um filme..." onChange={valueInput} value={search} />
                    <button type='Submit'>
                        <BiSearchAlt2/>
                    </button>
                </form>
            </nav>
        </>
    )
}

export default Navbar;
