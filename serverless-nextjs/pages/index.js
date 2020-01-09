import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link';

const Home = () => (
  <div>
    <Link title="About Page" href="/about">
      <a>About Page</a>
    </Link>

    <p>Hello Next.js</p>
  </div>
)

export default Home
