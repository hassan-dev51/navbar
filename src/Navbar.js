import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi";
import Menu from "./Menu";
import Shop from "./Shop";
import { Blog, Page } from "./Blog";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [news, setNews] = useState(false);
  const [shop, setShop] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);
  const [text, setText] = useState("");
  //to toggle the navbar
  const handleNavbar = () => {
    setToggle(!toggle);
  };
  //to close the navbar
  const close = () => {
    if (news) {
      setNews(!news);
      setText("");
    }
    if (shop) {
      setShop(!shop);
      setText("");
    }
    if (blog) {
      setBlog(!blog);
      setText("");
    }
    if (pages) {
      setPages(!pages);
      setText("");
    }
  };
  //to toggle the sub-menu
  const newsFunc = () => {
    setText("News");
    setNews(!news);
  };
  const shopFunc = () => {
    setShop(!shop);
    setText("Shop");
  };
  const blogFunc = () => {
    setBlog(!blog);
    setText("Blog");
  };
  const pageFunc = () => {
    setPages(!pages);
    setText("Pages");
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <Link to="/">My Store</Link>
              </div>
            </div>
            {/* menu start here */}
            <div className="header-item item-center">
              <div
                className={`${toggle ? "menu-overlay active" : "menu-overlay"}`}
              ></div>
              <nav className={`${toggle ? "menu active" : "menu"}`}>
                <div
                  className={`${
                    news || shop || blog || pages
                      ? "mobile-menu-head active"
                      : "mobile-menu-head"
                  }`}
                >
                  <div className="go-back" onClick={close}>
                    <span style={{ fontSize: "12px" }}>Back</span>
                  </div>
                  <div className={`current-menu-title`}>{text}</div>
                  <div
                    className="mobile-menu-close"
                    onClick={() => setToggle(!toggle)}
                  >
                    &times;
                  </div>
                </div>
                <ul className="menu-main">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={"menu-item-has-children"}>
                    <Link onClick={newsFunc}>
                      New{" "}
                      <BiDownArrow style={{ transform: "translateY(2px)" }} />
                    </Link>
                    <div
                      className={`${
                        news
                          ? "sub-menu mega-menu mega-menu-column-4 active"
                          : "sub-menu mega-menu mega-menu-column-4"
                      }`}
                    >
                      {Menu.map((currElem) => (
                        <div
                          className="list-item text-center"
                          key={currElem.id}
                        >
                          <a
                            href={currElem.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={currElem.image} alt={currElem.heading} />
                            <h4 className="title">{currElem.heading}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={shopFunc}>
                      Shop{" "}
                      <BiDownArrow style={{ transform: "translateY(2px)" }} />
                    </Link>
                    <div
                      className={`${
                        shop
                          ? "sub-menu mega-menu mega-menu-column-4 active"
                          : "sub-menu mega-menu mega-menu-column-4"
                      }`}
                    >
                      {Shop.map((currElem) => (
                        <div className="list-item" key={currElem.id}>
                          <h4 className="title">{currElem.name}</h4>

                          {currElem.sublinks.map((sublink, ind) => (
                            <ul key={ind}>
                              <li>
                                <a
                                  href={sublink.link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {sublink.title}
                                </a>
                              </li>
                            </ul>
                          ))}
                        </div>
                      ))}
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={blogFunc}>
                      Blog{" "}
                      <BiDownArrow style={{ transform: "translateY(2px)" }} />
                    </Link>
                    {Blog.map((currElem) => (
                      <div
                        className={
                          blog
                            ? "sub-menu single-column-menu active"
                            : "sub-menu single-column-menu"
                        }
                        key={currElem.id}
                      >
                        {currElem.sublinks.map((sublink, ind) => (
                          <ul key={ind}>
                            <li>
                              <a
                                href={sublink.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {sublink.title}
                              </a>
                            </li>
                          </ul>
                        ))}
                      </div>
                    ))}
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={pageFunc}>
                      Pages{" "}
                      <BiDownArrow style={{ transform: "translateY(2px)" }} />
                    </Link>
                    {Page.map((currElem) => (
                      <div
                        className={
                          pages
                            ? "sub-menu single-column-menu active"
                            : "sub-menu single-column-menu"
                        }
                        key={currElem.id}
                      >
                        {currElem.sublinks.map((sublink, ind) => (
                          <ul key={ind}>
                            <li>
                              <a
                                href={sublink.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {sublink.title}
                              </a>
                            </li>
                          </ul>
                        ))}
                      </div>
                    ))}
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-item item-right">
              {/* <!-- mobile menu trigger --> */}
              <div className="mobile-menu-trigger" onClick={handleNavbar}>
                <span>{/* <GiHamburgerMenu /> */}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
