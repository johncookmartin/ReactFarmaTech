import {createContext, useState, useEffect, useContext} from 'react'

const MobileContext = createContext(false);

export const useMobile = () => useContext(MobileContext);

const MobileProvider = ({ children }) => {
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

   useEffect(() => {
     const handleResize = () => setIsMobile(window.innerWidth <= 600);
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileProvider;