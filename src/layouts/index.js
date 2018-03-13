import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './index.css'
import '../styles/layout-overide.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Starter"
      meta={[
        { name: 'description', content: 'This is a sample blog built on Gatsby' },
        { name: 'keywords', content: 'gatsby, react, tlock, awesome' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>
              <div style={{ flex: 1 }}>
                <Sidebar
                  title="Aside"
                  description="Tlock is the lorem ipsum"
                />
                <Sidebar
                  title="About author"
                  description="I like turtles..."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
