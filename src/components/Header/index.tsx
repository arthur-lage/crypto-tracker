import { MagnifyingGlass } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ThemeToggler } from "../ThemeToggler";

import styles from "./styles.module.scss";

export function Header() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    navigate("/search/" + search);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    if (!darkTheme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <header>
      <Link to="/" className={styles.title}>
        Crypto Tracker
      </Link>
      <div className={styles.right}>
        <form onSubmit={handleSearch} className={styles.search}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for cryto currencies..."
          />
          <button type="submit">
            <MagnifyingGlass weight="bold" size={28} />
          </button>
        </form>
        <ThemeToggler darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}
