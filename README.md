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

..SSR 환경은 더 살펴본 후에...

- nextjs app 라우터 관련 이슈: https://github.com/module-federation/core/issues/1183#issuecomment-2003744775
