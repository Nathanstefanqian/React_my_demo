import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'

const List = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const getData = useCallback(async () => {
    setLoading(true)
    const res = await axios({
      url: '/api/v1/channel_article',
      params: {
        status: 'NORMAL',
        channel_id: 41,
        page: 0
      }
    })
    setData(res.data.data.list)
    setLoading(false)
  }, [])

  useEffect(() => void getData(), [])

  if (loading) return <div className="list">Loading</div>
  if (data.length === 0) return <div className="list">No Data</div>
  return (
    <div className="list">
      {data.map((item, index) => (
        <div className="list-item" key={index}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          {item.img && <img src={item.img} alt={item.title}/>}
        </div>
      ))}
      <button>下一页</button>
    </div>
  )
}

export default List
