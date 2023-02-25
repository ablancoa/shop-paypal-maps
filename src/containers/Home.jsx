import React from 'react';
import { Helmet } from 'react-helmet-async';
import Products from '../components/Products';


export default function Home() {
  return (
    <>
      <Helmet>
        <title>FakeMadrid-Store Home</title>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ablancoa' />
        <meta name='twitter:creator' content='@ablancoa' />
        <meta name='twitter:title' content='PlatziShop' />
        <meta name='twitter:description' content='PlatziShop' />
        <meta name='twitter:image' content='https://s3.amazonaws.com/gndx.dev/gndxdev.png' />
        <meta name='og:title' content='PlatziShop' />
        <meta name='og:description' content='PlatziShop' />
        <meta name='og:image' content='https://s3.amazonaws.com/gndx.dev/gndxdev.png' />
        <meta name='og:url' content='https://store-maps-1585d.web.app' />
        <meta name='og:site_name' content='PlatziShop' />
        <meta name='og:locale' content='es_ES' />
        <meta name='og:type' content='article' />
      </Helmet>
      <Products />
    </>
  )
}
