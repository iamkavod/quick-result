"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Nav({ color = "#fab758" }) {
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap").then((Bootstrap) => {
      const CLASS_NAME = "has-child-dropdown-show";

      // Save the original toggle function
      const originalToggle = Bootstrap.Dropdown.prototype.toggle;

      // Override the toggle function
      Bootstrap.Dropdown.prototype.toggle = function () {
        // Remove the CLASS_NAME from all dropdowns
        document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
          e.classList.remove(CLASS_NAME);
        });

        // Traverse up through the closest dropdown parents
        let dd = this._element
          .closest(".dropdown")
          .parentNode.closest(".dropdown");
        for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
          dd.classList.add(CLASS_NAME);
        }

        // Call the original toggle function
        return originalToggle.call(this);
      };

      // Add event listeners for hide.bs.dropdown to remove the CLASS_NAME
      document.querySelectorAll(".dropdown").forEach(function (dd) {
        dd.addEventListener("hide.bs.dropdown", function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }
          e.stopPropagation();
        });
      });
    });

    // Optional cleanup function for any potential side effects
    return () => {
      // Cleanup code here (if needed)
    };
  }, []);

  const pathname = usePathname();

  return (
    <ul className="navbar-nav" style={{ "--current-color": color }}>
      <li className="nav-item">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
            (pathname === "/")
              ? "!text-[var(--current-color)]"
              : ""
          } `}
          href="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
            (pathname === "/about")
              ? "!text-[var(--current-color)]"
              : ""
          } `}
          href="/about"
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
            (pathname === "/membership")
              ? "!text-[var(--current-color)]"
              : ""
          } `}
          href="/membership"
        >
          Membership
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
            (pathname === "/products")
              ? "!text-[var(--current-color)]"
              : ""
          } `}
          href="/products"
        >
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)] ${
            (pathname === "/contact")
              ? "!text-[var(--current-color)]"
              : ""
          } `}
          href="/contact"
        >
          Contact
        </Link>
      </li>
      {/* <li className="nav-item dropdown">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--current-color)] after:!text-[var(--current-color)]   ${
            (pathname === "/faqs" || pathname === "/news") ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          Resources
        </a>
        <ul className="dropdown-menu">
            <li
              className="nav-item"
            ><Link
                  className={`dropdown-item hover:!text-[var(--current-color)]   ${
                    pathname === "/faqs" ? "!text-[var(--current-color)]" : ""
                  } `}
                  href="/faqs"
                >
                  FAQs
                </Link><Link
                  className={`dropdown-item hover:!text-[var(--current-color)]   ${
                    pathname === "/news" ? "!text-[var(--current-color)]" : ""
                  } `}
                  href="/news"
                >
                  News
                </Link>
            </li>
        </ul>
      </li> */}
    </ul>
  );
}