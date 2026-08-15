import { Link } from "react-router"

function CreateNavbar ({user}) {
  console.log("User2", user)
    const listNavbar = [
      { navbar: "Explore", link: "/explore" },
      { navbar: "Events", link: "/events" },
      { navbar: "Communities", link: "/communities" },
      { navbar: "My Events", link: "/myevents" },
    ];
    
    const listNavbarGuest = [
      { navbar: "Events", link: "/events" },
      { navbar: "Communities", link: "/communities" },
    ];
    
    const currentNavbar = 
    user.role === "admin" || user.role === "attendee" || user.role === "organizer"
    ? listNavbar
    : listNavbarGuest;
    
    return (<nav>
      <ul className="hidden md:flex w-full">
        {currentNavbar.map((n, i) => {
          return (
            <li 
            className="py-6 px-12 text-font-primary font-medium my-center"
              key={i}
            >
              <Link 
  
                className="f-14"
                to={n.link}
                >{n.navbar}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CreateNavbar