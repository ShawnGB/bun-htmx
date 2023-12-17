// export default function Navbar() {
//   return (
//     <nav
//       className={`sticky top-0 left-0 w-screen h-20 flex justify-between items-center z-50 backdrop-filter backdrop-blur-md bg-opacity-75 ${
//         isScrolled ? 'shadow' : ''
//       }`}
//     >
//       <div className={containerStyle}>
//         <div className='h-1/2 flex justify-center align-mid'>
//           <Image src={Logo} alt='Description of the image' height={46} />
//         </div>
//         {navLinks.map((link, index) => (
//           <NavLinkAtom href={link.href} text={link.text} key={index} />
//         ))}
//       </div>

//       <div className={containerStyle}>
//         {navButtons.map((button, index) => (
//           <ButtonAtom
//             key={index}
//             text={button.text}
//             onButtonClick={button.onButtonClick}
//           />
//         ))}
//       </div>
//     </nav>
//   );
// }
