
import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import Link from "next/link";
import About from "./About";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Break Anchor Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      <About/>
      {/* End Home */}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}



// Active Section
export const activeSection = () => {
  const path = window.location.pathname;
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".pp-section");
    const navLi = document.querySelectorAll(".nav-menu li");
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (
        li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
      ) {
        li.classList.add("active");
      }
    });
  });
};


//---- UTILITIES -------

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};



export const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <a className="logo-text">Sergio</a>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/about-me.jpg" title="" alt="" />
              </div>
              <h5>Sergiobi</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="#">
            <i className="fab fa-pinterest" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li>
      <li data-menuanchor="work">
        <a className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </a>
      </li>
      <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li>
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </a>
      </li>
    </ul>
  );
};

const MenuWithBlog = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home">
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about">
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services">
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Services</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link href="/#work">
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog">
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus">
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </a>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};