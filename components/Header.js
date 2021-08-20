import Link from "next/link";

const Header = () => {
  return (
    <header class="header">
      <div>
        <h1 class="text-5xl font-weight: 800">Moody - Boards</h1>
        <Link href="/">
          <a class="pr-4 ...">My Boards</a>
        </Link>
        <Link href="/">
          <a class="pr-4 ...">Explore</a>
        </Link>
        <Link href="/">
          <a class="pr-4 ...">User</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
