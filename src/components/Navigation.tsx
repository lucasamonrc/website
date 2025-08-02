const pages = [
  { to: "/", label: "about" },
  { to: "/work", label: "work" },
  { to: "/writing", label: "writing" },
  { to: "/talks", label: "talks" },
  // { to: "/bookmarks", label: "bookmarks" },
  { to: "/misc", label: "misc" },
];

export function NavigationTop() {
  return (
    <header className="w-full flex flex-col space-y-4 items-start sm:hidden">
      <h1 className="text-3xl">Lucas Castro</h1>
      <nav className="w-full flex flex-wrap justify-start space-x-3 items-center mb-12">
        {pages.map((page) => (
          <a key={page.to} href={page.to}>
            {page.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function NavigationSide() {
  return (
    <aside className="hidden sm:block text-right pr-8 w-1/3">
      <h1 className="text-3xl">Lucas Castro</h1>
      <nav className="flex flex-col space-y-1 mt-4">
        {pages.map((page) => (
          <a key={page.to} href={page.to}>
            {page.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
