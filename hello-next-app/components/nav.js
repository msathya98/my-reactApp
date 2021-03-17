import Link from "next/link";

const Navigation = () => (
    <div className="my-nav">
        <img src="../static/lion.jpeg" alt="Logo" height="50"></img>
        <Link href="/"><a>Home </a></Link>
    <Link href="/about"><a> About </a></Link>
    </div>
    
);

export default Navigation;
