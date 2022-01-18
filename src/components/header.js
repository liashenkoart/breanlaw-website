import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="bg-stone-50">
    <nav
      className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
      aria-label="Global"
    >
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/">
            <StaticImage
              src="../images/Breanlawlogo.png"
              width={180}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Breanlaw Trademark Law Firm logo"
              style={{ marginBottom: `1.45rem` }}
            />
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
