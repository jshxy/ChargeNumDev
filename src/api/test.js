import request from '@/utils/request'

export function send_msg(query) {
  return request({
    url: '/ping',
    method: 'get',
    params: query
  })
}
export function startTcp() {
  return request({
    url: '/start',
    method: 'get'
  })
}

export function get_data(query) {
  return request({
    url: '/ping',
    method: 'get',
    params: query
  })
}
