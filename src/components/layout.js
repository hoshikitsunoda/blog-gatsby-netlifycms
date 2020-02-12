import React, { useState } from "react"
import { Link } from "gatsby"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"

import thingsText from "../../content/assets/things.svg"
import aboutText from "../../content/assets/about.svg"
import contactText from "../../content/assets/contact.svg"

const Layout = ({ location, children }) => {
  const title = ".es."
  const rootPath = `${__PATH_PREFIX__}/`
  const header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  let mainContent
  mainContent = <main>{children}</main>

  if (location.pathname === rootPath) {
    mainContent = <MainArea>{children}</MainArea>
  }

  const darkMode = useDarkMode(false)

  const [isToggled, setToggled] = useState(true)
  const toggleTrueFalse = () => {
    setToggled(!isToggled)
    return isToggled ? darkMode.enable() : darkMode.disable()
  }

  return (
    <Wrapper>
      <header>
        {header}
        <input
          type="checkbox"
          className="toggle-button"
          onClick={toggleTrueFalse}
        />
      </header>
      {mainContent}
      <Footer>
        <InnerWrapper>
          <LinkWrap to={`/about`}>
            <AboutBox className="about">
              <Subheading>About.</Subheading>
            </AboutBox>
          </LinkWrap>
          <LinkWrap to={`/contact`}>
            <ContactBox className="contact">
              <Subheading className="contact-txt">.Contact</Subheading>
            </ContactBox>
          </LinkWrap>
        </InnerWrapper>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </Footer>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(1.5)};

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const MainArea = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: url(${thingsText}) bottom center no-repeat;
  padding: 0;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  right: 0;
  bottom: 0;
  padding: 2em;
  background-color: #fff;

  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    max-width: ${rhythm(40)};
  }
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-content: flex-start;
  height: 8rem;
  padding-bottom: 1rem;
`

const LinkWrap = styled(Link)`
  width: calc(50% - 0.5rem);
  text-decoration: none;
`

const AboutBox = styled.div`
  width: 100%;
  height: 100%;
  background: #fff url(${aboutText}) bottom center no-repeat;
  background-size: 250%;
  box-shadow: 0px 5px 10px #e0e0e0;
  border-radius: 0.5rem;
  padding: 0.5rem;
`

const ContactBox = styled.div`
  width: 100%;
  height: 100%;
  background: #fff url(${contactText}) center center no-repeat;
  background-size: 180%;
  box-shadow: 0px 5px 10px #e0e0e0;
  border-radius: 0.5rem;
  padding: 0.5rem;
`

const Subheading = styled.h3`
  color: #000;
  font-size: 1.6rem;
  letter-spacing: -0.03rem;
  font-weight: 200;
  margin: 0.5rem;

  &.contact-txt {
    text-align: right;
  }
`
