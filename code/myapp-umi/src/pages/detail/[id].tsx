import React from 'react'
import { useParams } from 'umi'
interface IParams {
  id: string
}

export default function Detail(props: any) {
  // console.log(`props`, props)
  const params = useParams<IParams>()
  console.log(`params`, params.id)
  return (
    <div>Detail</div>
  )
}
