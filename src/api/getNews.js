import axios from 'axios'

export function getRollNews () {
  const url = '/api/getRollNews'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getAllNews () {
  const url = '/api/list/'

  // const data = Object.assign({}, {
  //   page_type: 1,
  //   user_id: 5954781019,
  //   max_behot_time: 0,
  //   count: 10,
  //   as: 'A125DBD64075DC1',
  //   cp: '5B60253DDCF13E1',
  //   _signature: 'ckTLCBAXKSclc4NTEMAfB3JEyx'
  // })

  const time = parseInt((new Date().getTime()) / 1000)

  const data = Object.assign({}, {
    tag: 'news_hot',
    ac: 'wap',
    count: 20,
    format: 'json_raw',
    as: 'A17538D54D106FF',
    cp: '585DF0A65F0F1E1',
    min_behot_time: time,
    i: time
  })

  return axios.get(url, {
    params: data
  })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
