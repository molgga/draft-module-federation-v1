# Module Federation 테스트용

- host-react: 호스트 React
- host-vue3: 호스트 Vue3
- remote-react: 리모트 React
- remote-vue3: 리모트 Vue3

```sh
# 모노레포 아님

# 리엑트 리모트 서버 켜기 # http://localhost:3021
remote-react
  pnpm install
  pnpm build
  pnpm preview

# Vue3 리모트 서버 켜기 # http://localhost:3011
remote-vue3
  pnpm install
  pnpm build
  pnpm preview

# 위에 리모트 서버들 켠 후

# Vue3 호스트 서버 켜기 # http://localhost:3001
host-vue3
  pnpm install
  pnpm dev


# 위에 리모트 서버들 켠 후
# React 호스트 서버 켜기 # http://localhost:3002
host-react
  pnpm install
  pnpm dev

```

---

```
@TODO: vue library shared 문제
! https://github.com/originjs/vite-plugin-federation/issues/495
! https://github.com/originjs/vite-plugin-federation/issues/334

vue 리모트 쪽에서 "@vueuse/core" 같은 라이브러리를 사용한 후,
expose/remote 동작은 문제없지만 host 에서 가져온 remote 의 라이브러리들 반응성을 잃는것 같음.
해당 라이브러리 들을 shared 로 빼주고(host 에선 해당 라이브러리를 설치..) host 에서 remote 컴포넌트 가져와보면 mouse state 가 바로 리렌더링 됨.
(ex: shared 시키지 않은 경우 remote 에서 useMouse 를 사용한 컴포넌트를 host 에서 가져오면 화면에 리렌더링이 바로바로 안됨)
shared 말고 다른 방법 찾아봐야함.
```

---

..SSR 환경은 더 살펴본 후에...

- nextjs app 라우터 관련 이슈: https://github.com/module-federation/core/issues/1183#issuecomment-2003744775
