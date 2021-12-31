import type { ReactNode } from "react"
import { mergeStyles} from "@fluentui/react";
import { Header ,Footer } from "../components";

export default ({children}:{children:ReactNode}) =>{
  const childrenWrapper = getClassNames();
  
    return (
      <div>
        <Header />
        <div className={childrenWrapper}>{children}</div>
        <Footer />
      </div>
    );
}


function getClassNames(){
  return mergeStyles({
      padding: '2rem'
  })
}