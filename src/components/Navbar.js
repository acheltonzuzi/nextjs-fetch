import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/produtos">Produtos</Link>
        </li>
        <li>
          <Link href="/todo">Todos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
