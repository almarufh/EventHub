import { NavLink } from "react-router"

function CreateNavbar ({user}) {
    const listNavbar = [
      { navbar: "Explore", link: "/explore" },
      { navbar: "Events", link: "/events" },
      { navbar: "Communities", link: "/communities" },
      { navbar: "My Events", link: "/myevents" },
    ];
    
    const listNavbarGuest = [
      { navbar: "Explore", link: "/explore" },
      { navbar: "Events", link: "/events" },
      { navbar: "Communities", link: "/communities" },
    ];
    
    const currentNavbar = 
    user.role === "admin" || user.role === "attendee" || user.role === "organizer"
    ? listNavbar
    : listNavbarGuest;
    
    return (<nav>
      <ul 
        className={`
          hidden md:flex w-full

          `}
      >
        {currentNavbar.map((n, i) => {
          return (
            <NavLink 
            className={({isActive}) => ` ${isActive ? "text-primary bg-primary8" : "text-font-primary"}
              py-6 px-12 text-font-primary font-medium my-center round-8`}
              key={i}
              to={n.link}
            >
              <li 
                className="f-14"
                >{n.navbar}</li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

export default CreateNavbar