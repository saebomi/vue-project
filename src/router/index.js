import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/* Chat 컴포넌트를 임포트 */
import Chat from '@/components/Chat'

Vue.use(Router)
export default new Router({
  /* mode 설정 추가 */
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    /* channel에 대한 라우팅 정의 */
    {
      path: '/channel', // path: '도메인을 제외한 URL 경로를 지정'
      name: 'channel',  // name: '이름을 정의'
      component: Chat   // component: '렌더링할 컨포넌트를 지정'
    }
  ]
})
