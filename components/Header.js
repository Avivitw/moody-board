import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Moody - Boards</h1>
        <Link href="/">
          <a>My Boards</a>
        </Link>
        <Link href="/">
          <a>Explore</a>
        </Link>
        <Link href="/">
          <a>User</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
