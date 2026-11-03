export function Navbar() {
  return (
    <nav className="bg bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/Home-page" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/CV-page" className="hover:text-gray-400">
            CV
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:text-gray-400">
            Blog
          </a>
        </li>
        <li className="ml-auto">
          <a href="/Login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
