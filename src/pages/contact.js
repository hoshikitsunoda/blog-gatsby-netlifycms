import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact" />
        <div>
          <h2>Say Hi!</h2>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <Input type="text" name="name" placeholder="Your Name" />
            </p>
            <p>
              <Input type="email" name="email" placeholder="Your Email" />
            </p>
            <p>
              <MessageArea
                name="message"
                placeholder="Message here..."
                rows="10"
              ></MessageArea>
            </p>
            <p>
              <Button type="submit">Send</Button>
            </p>
          </form>
        </div>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Input = styled.input`
  border: 0;
  outline: 0;
  background: #f7f7f7;
  border-bottom: 1px solid #757575;
  border-radius: 0.2rem;
  width: 100%;
  padding: 1rem;
`

const MessageArea = styled.textarea`
  border: 0;
  outline: 0;
  background: #f7f7f7;
  border-radius: 0.2rem;
  width: 100%;
  padding: 1rem;
`

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
`
