import { Children } from "react";
import Nav from "./nav";

const Layout = ({mainContent, footer, children}) => (
    <div>
        <h1>{mainContent}</h1>
        <Nav />
        <hr/>
        {children}
        <hr/>
        <h2>{footer}</h2>
    </div>
);

export default Layout;
