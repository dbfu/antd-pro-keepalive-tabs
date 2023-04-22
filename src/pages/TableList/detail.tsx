import { useParams } from '@umijs/max'

export default () => {
  const params = useParams();

  return (
    <h1>路由参数：{params.id}</h1>
  )
}