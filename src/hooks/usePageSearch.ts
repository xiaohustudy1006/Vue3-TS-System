import { ref } from "vue"
import pageContent from "@/components/pageContent/pageContent.vue"

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  const handlerReset = () => {
    pageContentRef.value?.getPageData()
  }
  const handlerSearch = (info: any) => {
    pageContentRef.value?.getPageData(info)
  }
  return [pageContentRef, handlerReset, handlerSearch]
}
