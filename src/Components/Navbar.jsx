import React, { useState } from "react";
import "./Navbar.css";
import Button from "./Button";
import { Link as Navlink } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    // {
    //   name: "DISCOVER US",
    //   link: "/discoverus",
    //   subLinks: [
    //     { name: "ABOUT US", link: "/discoverus/aboutus" },
    //     { name: "ABOUT CAMPUS", link: "/discoverus/aboutcampus" },
    //     { name: "DIRECTOR'S VIEW", link: "/discoverus/directorsview" },
    //     { name: "TECHNICAL COLLABORATION", link: "/discoverus/techcollab" },
    //   ],
    // },
    {
      name: "COURSES",

      /* Added the sublinks */
      subLinks: [
        { name: "FASHION DESIGNING", link: "/courses/fashiondesign" },
        { name: "INTERIOR DESIGNING", link: "/courses/interiordesign" },
        { name: "TEXTILE DESIGNING", link: "/courses/textiledesign" },
        { name: "JEWELLERY DESIGNING", link: "/courses/jewellerydesign" },
        { name: "GRAPHIC DESIGNING", link: "/courses/graphicdesign" },
        {
          name: "ANIMATION & VFX DESIGNING",
          link: "/courses/animation_VFX_design",
        },
        // { name: "PHOTOGRAPHY DESIGNING", link: "/courses/photographydesign" },
        // { name: "BEAUTY & HAIR DESIGNING", link: "/courses/beautyhairdesign" },
      ],
    },
    { name: "PLACEMENT", link: "/placement" },
    { name: "CONTACT", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);
  let [dropdownOpen, setDropdownOpen] = useState(false);
  let [activeDropdown, setActiveDropdown] = useState(null);

  const handleMobileMenuClick = () => {
    setOpen(!open);
  };

  const handleNavbarItemClick = () => {
    if (open) {
      setOpen(false);
    }
  };

  const toggleDropdown = () => {
    // if(dropdownOpen) {
    //   setDropdownOpen(false);
    // } else {
    //   setDropdownOpen(true);
    // }
    // or
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-40">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="text-sm cursor-pointer flex items-center font-[serif] text-gray-800">
          <span className="text-3xl text-black-600 mr-1 pt-2">
            <a href="/">
              <img src="/insdlogo.jpg" alt="logo" className="h-14 justify" />
            </a>
          </span>
        </div>

        <div
          onClick={handleMobileMenuClick}
          className="text-3xl absolute right-8 top-6 cursor-pointer z-50 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {Links.map((Link, index) => (
            <li
              key={Link.name}
              className="md:ml-8 text-black md:my-0 my-7 relative"
              onClick={
                Link.name === "COURSES" || Link.name === "DISCOVER US"
                  ? () => {
                      toggleDropdown();
                    }
                  : handleNavbarItemClick
              }
              onMouseEnter={() => Link.subLinks && setActiveDropdown(index)} // Code to dropdown a particular element on hover
              onMouseLeave={() => Link.subLinks && setActiveDropdown(null)}
            >
              <Navlink
                to={Link.link}
                className="text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-red-400"
              >
                {Link.name}
              </Navlink>
              {Link.subLinks &&
                activeDropdown === index && ( // Added the sublinks code.
                  <ul className="courses-dropdown-menu">
                    {Link.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <Navlink
                          onClick={handleMobileMenuClick}
                          to={subLink.link}
                        >
                          {subLink.name}
                        </Navlink>
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}

          <Button>
            CALL: <a href="tel:8605431313">8605431313</a>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import Button from "./Button";
// import { Link as Navlink } from "react-router-dom";

// const Navbar = () => {
//   let Links = [
//     { name: "HOME", link: "/" },
//     {
//       name: "DISCOVER US",
//       link: "/discoverus",
//       subLinks: [
//         { name: "About Us", link: "/discoverus/aboutus" },
//         { name: "Director's View", link: "/discoverus/directorsview" },
//         { name: "Technical Collaboration", link: "/discoverus/techcollab" },
//         { name: "About Campus", link: "/discoverus/aboutcampus" },
//       ],
//     },
//     {
//       name: "COURSES",
//       link: "/courses/fashiondesign",
//       subLinks: [
//         { name: "FASHION DESIGNING", link: "/courses/fashiondesign" },
//         { name: "INTERIOR DESIGNING", link: "/courses/interiordesign" },
//         { name: "TEXTILE DESIGNING", link: "/courses/textiledesign" },
//         { name: "JEWELLERY DESIGNING", link: "/courses/jewellerydesign" },
//         { name: "GRAPHIC DESIGNING", link: "/courses/graphicdesign" },
//         {
//           name: "ANIMATION & VFX DESIGNING",
//           link: "/courses/animation_VFX_design",
//         },
//       ],
//     },
//     { name: "PLACEMENT", link: "/placement" },
//     { name: "CONTACT", link: "/contact" },
//   ];

//   let [open, setOpen] = useState(false);
//   let [activeDropdown, setActiveDropdown] = useState(null);

//   const handleMobileMenuClick = () => {
//     setOpen(!open);
//   };

//   const handleNavbarItemClick = () => {
//     if (open) {
//       setOpen(false);
//     }
//   };

//   return (
//     <div className="shadow-md w-full fixed top-0 left-0 z-40">
//       <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//         <div className="text-sm cursor-pointer flex items-center font-[serif] text-gray-800">
//           <span className="text-3xl text-black-600 mr-1 pt-2">
//             <a href="/">
//               <img src="/insdlogo.jpg" alt="logo" className="h-14 justify" />
//             </a>
//           </span>
//         </div>

//         <div
//           onClick={handleMobileMenuClick}
//           className="text-3xl absolute right-8 top-6 cursor-pointer z-50 md:hidden"
//         >
//           <ion-icon name={open ? "close" : "menu"}></ion-icon>
//         </div>

//         <ul
//           className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? "top-20 opacity-100" : "top-[-490px]"
//           } md:opacity-100`}
//         >
//           {Links.map((Link, index) => (
//             <li
//               key={Link.name}
//               className="md:ml-8 text-black md:my-0 my-7 relative"
//               onClick={() => {
//                 if (Link.subLinks) {
//                   if (activeDropdown === index) {
//                     setActiveDropdown(null);
//                   } else {
//                     setActiveDropdown(index);
//                   }
//                 } else {
//                   handleNavbarItemClick();
//                 }
//               }}
//             >
//               <Navlink
//                 to={Link.link}
//                 className="text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-red-400"
//               >
//                 {Link.name}
//               </Navlink>
//               {Link.subLinks && activeDropdown === index && (
//                 <ul className="courses-dropdown-menu">
//                   {Link.subLinks.map((subLink) => (
//                     <li key={subLink.name}>
//                       <Navlink to={subLink.link}>{subLink.name}</Navlink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}

//           <Button>
//             CALL:
//             <a href="tel:<PhoneNumber>">8605431313</a>
//           </Button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
