import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="https://day-5-4u9a9btbx-pavit555.vercel.app/?vercelToolbarCode=qmMAHpiuHENHUdS" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="https://bootcamp-oybmytcs4-pavit555.vercel.app/" activeStyle>
                        Books-with-hooks 
                    </NavLink>
                    <NavLink to="https://day-4-guiguvh34-pavit555.vercel.app/?vercelToolbarCode=Ja1V6e3cbr-YkqO" activeStyle>
                        Weather 
                    </NavLink>
                    <NavLink to="https://day-5-4u9a9btbx-pavit555.vercel.app/?vercelToolbarCode=qmMAHpiuHENHUdS" activeStyle>
                        Form validator 
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;