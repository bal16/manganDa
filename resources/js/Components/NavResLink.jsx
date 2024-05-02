export const NavResLink = ({auth, children, active=false, href="#"})=>{

    const activeStyle = active ? "text-marshland-950":"text-marshland-600"

    return(
        <a href={href} className={`block mx-auto ${activeStyle}` }>
                {children}
            </a>
    )
}
