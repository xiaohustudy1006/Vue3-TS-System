import huRequestInstance from "@/network/index"
const { huRequest } = huRequestInstance
export function getPageList(url: string, queryInfo: any) {
  return huRequest.post({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return huRequest.delete({
    url: url
  })
}
