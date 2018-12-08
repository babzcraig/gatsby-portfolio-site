import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>Babs Craig</h1>
    <Image />
    <p>
      Maecenas sed diam eget risus varius blandit sit amet non magna. Duis
      mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
      odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula
      ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id
      nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque
      ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante
      venenatis dapibus posuere velit aliquet.
    </p>
    <Link to="/projects/">Projects</Link>
  </Layout>
)

export default IndexPage
