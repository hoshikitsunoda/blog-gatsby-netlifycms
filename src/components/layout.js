import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

import thingsText from "../../content/assets/things.svg"
import aboutText from "../../content/assets/about.svg"
import contactText from "../../content/assets/contact.svg"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let mainContent

    if (location.pathname === rootPath) {
      header = (
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

      mainContent = <MainArea>{children}</MainArea>
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
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
          ></Link>
        </h3>
      )

      mainContent = <main>{children}</main>
    }

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        {mainContent}
        <Footer>
          <InnerWrapper>
            <LinkWrap to={`/about`}>
              <AboutBox>
                <Subheading>About.</Subheading>
              </AboutBox>
            </LinkWrap>
            <LinkWrap to={`/contact`}>
              <ContactBox>
                <Subheading className="contact">.Contact</Subheading>
              </ContactBox>
            </LinkWrap>
          </InnerWrapper>
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </Footer>
      </div>
    )
  }
}

export default Layout

const MainArea = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: url(${thingsText}) bottom center no-repeat;
`

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  right: 0;
  bottom: 0;
  padding: 2em;
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
`

const AboutBox = styled.div`
  width: 100%;
  height: 100%;
  background: #fff url(${aboutText}) bottom center no-repeat;
  background-size: 250%;
  border: 1px solid #757575;
`

const ContactBox = styled.div`
  width: 100%;
  height: 100%;
  background: #fff url(${contactText}) center center no-repeat;
  background-size: 180%;
  border: 1px solid #757575;
`

const Subheading = styled.h3`
  color: #000;
  font-size: 1.6rem;
  letter-spacing: -0.03rem;
  font-weight: 200;
  margin: 0.5rem;

  &.contact {
    text-align: right;
  }
`
