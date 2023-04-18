import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Produtos() {
  return (
    <div>
      <Head>
        <title>Produtos</title>
        <meta name='keywords' content='roupas, calcados'></meta>
      </Head>
      <Link href="/">Voltar</Link>
      Produtos
      <Image src="/patrick-tomasso-gMes5dNykus-unsplash.jpg" width="400" height="200" alt='sem imagem'></Image>
      </div>
  )
}

export default Produtos