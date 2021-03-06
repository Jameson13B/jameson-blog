import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Jameson Brown</strong> who lives and studies in Salt Lake City
           as a software engineer with <a href="https://mbsy.co/lambdaschool/Jameson
">Lambda School.</a>{' '}
          <a href="https://github.com/Jameson13B">
            Check out his Github
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
