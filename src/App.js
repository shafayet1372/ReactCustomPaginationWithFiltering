import React from 'react'
import { useEffect } from 'react'
import Master from './component/Master'
export default function App() {

  // useEffect(() => {
  //   let show = async () => {
  //     let data = (await fetch("https://fakestoreapi.com/products")).json()
  //     console.log(await data)

  //   }
  //   show()
  // })
  return (
    <Master />
  )
}

