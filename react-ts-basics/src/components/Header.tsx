import { FC , ReactNode } from "react";

type HeaderProp = {
    image :{
     src: string;
    alt: string;
    }
  
    children?: ReactNode
} 


const Header: FC<HeaderProp> = ({image, children }) => {
    return (
               <header>
        <img src={image?.src} alt={image?.alt}/>
            {children}
        </header>
    )
}

export default Header
