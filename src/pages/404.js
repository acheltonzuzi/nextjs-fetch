import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <>
        <h1>404</h1>
        <p>Essa pagina nao existe</p>
        <Link href="/">Voltar a pagina inicial</Link>
    </>
  )
}

export default NotFound