import { NavLink } from "react-router-dom"

export function Navbar () {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
            </ul>
        </nav>
    )
}