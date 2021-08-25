import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="text-5xl font-weight: 800">Moody - Boards</h1>
        <Link href="/">
          <a className="pr-4 ...">My Boards</a>
        </Link>
        <Link href="/">
          <a className="pr-4 ...">Explore</a>
        </Link>
        <Link href="/">
          <a className="pr-4 ...">User</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
