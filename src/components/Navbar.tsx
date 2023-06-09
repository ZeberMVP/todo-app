import ThemeToggle from "@/ui/ThemeToggle";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <ThemeToggle />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-2xl  md:text-3xl">
          Todo List
        </a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-accent btn-md w-1/8"
          onClick={() => alert("Authentication has not been implemented yet")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
