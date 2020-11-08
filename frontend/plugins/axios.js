export default function({ $axios, redirect }) {
  $axios.setToken('access_token')

  $axios.onRequest((config) => {
    console.log(config)
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    console.log(config)
  })
  // エラーログ
  $axios.onError((e) => {
    console.log(e.response)
  })

  $axios.onResponse(config => {
    $axios.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000')
  })
}