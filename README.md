# 소개

이환용 교수님의 오픈소스SW입문 과목의 기말 최종 과제 레포지토리입니다. 
**Next.js 소개 및 SSR 구현과 SEO 구성 실습**을 주제로 Open Source Software 도구를 교육하는 동영상 콘텐츠를 제작했습니다.

# [Next.js](https://nextjs.org/)

> The React Framework for Production

기존에 React만으로 웹 개발을 하고 배포를 하려면 아래와 같은 작업을 수행해야 한다.

- Webpack 등의 번들러로 코드를 번들링
- Babel 등의 컴파일러로 최신 자바스크립트 문법이 많은 브라우저에 호환되도록 변환

성능 최적화와 개선을 위해서는 아래 작업이 추가로 필요할 수도 있다.

- 코드 스플리팅
- 성능 개선과 더 나은 SEO 구성을 위해 정적 Pre-render나 Server-side Rendering
- 데이터 패칭을 위한 SSR

Next.js는 React Framework로, 위와 같은 요구사항을 해결하며 React로 웹 개발을 할 때 더 나은 개발자 경험을 위해 만들어졌다.

## SSR (Server-side Rendering)

클라이언트가 웹 페이지를 요청하면, 서버에서 페이지 전체의 HTML을 렌더링해 클라이언트에 전달해 준다.

### 장점

- SEO 구성에 유리하다
- 처음 페이지를 로드해 올 때 필요한 요청 수를 줄일 수 있다
- 사용자에게 첫 콘텐츠를 보여주는 시간이 빠르다

### 단점

- 페이지 이동이 느리다
- SSRF 공격에 노출될 수 있다
- 서버가 처리해야 할 양이 많다

## CSR (Client-side Rendering)

자바스크립트를 통해 브라우저에서 웹 페이지를 직접 렌더링한다. 보통 서버에서는 거의 비어있는 HTML과 자바스크립트 등을 내려주고, 브라우저에서 자바스크립트를 실행해 DOM을 조작하여 페이지를 렌더링한다. 모든 로직과 데이터 가져오기, 라우팅 등이 클라이언트 측에서 처리된다.

### 장점

- 깜빡임 현상이 없음
- 페이지가 한 번 렌더링된 후에는 빠르게 렌더링됨

### 단점

- 페이지가 처음으로 그려지는 속도가 느림
- 페이지마다의 SEO를 구성하기 어려움
- 클라이언트 기기 메모리 사용량이 높음

## SEO

웹사이트가 검색 결과에 더 잘 보이도록 최적화하는 과정이다. [(출처)](https://developer.mozilla.org/ko/docs/Glossary/SEO) 검색 결과 데이터를 쌓기 위해서 검색 엔진은 웹을 크롤링해서 콘텐츠를 찾는다. 크롤러는 어떤 규칙에 따라 동작하기 때문에 이를 고려해서 웹을 작성하면 사이트의 검색 결과가 상위에 노출되도록 할 수 있다.

웹 크롤러는 지속적으로 웹을 탐색하며 알아서 사이트를 찾아오기 때문에, 개발자가 웹에 사이트를 게시해 두기만 하면 언젠가 크롤러가 사이트를 찾아서 검색 결과에 포함시킨다. 로봇은 HTML 파일을 분석해서 헤더의 메타 태그에 있는 내용을 토대로 사이트의 색인을 만든다.

메타 태그에 Open Graph와 관련된 데이터를 추가하면 SNS 등에서 웹 링크 미리보기 등에 원하는 데이터를 채울 수도 있다. 페이스북 게시물에 링크를 포함하면 링크의 제목, 설명, 이미지를 보여주는 것도 오픈 그래프 태그를 사용한 것이다.

CSR으로만 이루어진 페이지의 경우, 처음에 받아오는 HTML 파일은 거의 비어 있다. 만약 상세 페이지에 있는 데이터를 토대로 메타 태그를 바꾸고 싶다면 자바스크립트를 통해서 메타 태그를 추가해 주어야 한다. 그런데 HTML 파일만 가지고 메타 태그를 분석하고, 자바스크립트를 실행시키지 않는 경우가 있다.

네이버처럼 검색 엔진에서는 SPA 사이트를 위해 자바스크립트 검색 최적화 방법을 제공하고 있지만[(참고)](https://searchadvisor.naver.com/guide/seo-advanced-javascript), 웹 링크 미리보기 기능처럼 오픈 그래프 프로토콜을 사용하는 서비스에서는 자바스크립트의 영향을 고려하지 않을 가능성이 높다. 따라서 안정적으로 검색 엔진에 수집될 콘텐츠를 표현하기 위해서는 SSR을 구현하는 것이 가장 좋다.

## Features

Next.js에서는 SSR 이외에도 개발자 경험을 최대화하기 위한 여러 가지 기능을 추가로 제공한다. 아래는 Next.js가 기본으로 지원하는 기능의 일부이다.

- Pre-rendering & Hydration
- File-system Routing
- Image-optimization
- Built-in CSS
- Code splitting & bundling
- Zero config (Webpack & Babel)
- Fast refresh

### Pre-rendering

Next.js는 기본적으로 모든 페이지를 **pre-render** 한다. 각 페이지의 HTML을 미리 만들어 두어 클라이언트에서의 자바스크립트가 할 일을 줄여준다. 이를 통해 더 좋은 성능을 낼 수 있고, SEO 면에서도 유리하다.

HTML 파일로 미리 render된 페이지가 브라우저에 그려지면, 자바스크립트 코드가 작동하여 페이지를 인터랙티브하게 만들어 준다. 이처럼 pre-render 되어 있던 정적인 페이지가 인터랙티브하게 되는 과정을 **Hydration**이라고 한다.

pre-rendering은 페이지가 미리 만들어지는 시점에 따라 두 가지의 pre-rendering으로 나뉜다. 빌드 타임에 HTML이 생성되는 것은 **Static Generation**, 매 요청마다 HTML이 생성되는 것은 **Server-side Rendering(SSR)**이라고 부른다. Dynamic Rendering 이라고도 한다.

**Static Generation**으로 만들어진 페이지는 CDN을 통해 캐시되어 더 좋은 성능을 낼 수 있으며, 더 권장되는 방식이다. Static Generation은 마케팅 페이지, 블로그, 포트폴리오처럼 내용물이 자주 바뀌지 않는 경우나 유저의 요청보다 먼저 페이지를 그리고자 할 때 사용하면 좋다.

매 요청마다 페이지의 데이터가 바뀌거나, 페이지 내용이 자주 바뀌는 경우에는 Static Generation만으로 페이지를 만드는 것은 적절하지 않다. 이런 경우에는 Client-side Rendering을 함께 사용해서 페이지 일부는 pre-rendering되게 하고, 데이터가 자주 변하는 부분은 클라이언트 측에서 실행되는 자바스크립트 코드로 렌더링하도록 할 수 있다.

혹은 페이지 자체를 **Server-side Rendering** 되도록 해서, 매 요청마다 Next.js가 페이지를 pre-rendering 하도록 할 수도 있다. 이렇게 하면 페이지가 CDN에 캐시되지 않기 때문에 Static Generation 방식보다는 느릴 수 있지만 원하는 데이터를 보여줄 수 있다. 이때에도 Client-side Rendering을 함께 사용할 수 있다.

이처럼 각 페이지의 상황에 맞게 pre-rendering 방식을 선택하여 사용할 수 있다.

Next.js에서는 Pre-rendering 중에 외부 데이터를 fetch해 오기 위한 함수를 제공한다.

- Static Generation을 위해 사용되는 함수 - 모두 빌드 시에 실행됨
    - `getStaticProps`: 외부 데이터로부터 페이지의 콘텐츠를 가져오기 위한 함수
    - `getStaticPaths`: 동적 페이지에서, 외부 데이터로부터 페이지의 경로를 가져오기 위한 함수
- Server-side Rendering을 위해 사용되는 함수 - 페이지를 요청할 때마다 실행됨
    - `getServerSideProps`:  외부 데이터를 가져와 페이지를 그릴 때 사용하도록 한다. 이 함수를 가지고 있는 페이지에서는 Server-side Rendering을 수행한다.

### Image-optimization

Next.js는 기본적으로 `next/image` 라이브러리를 통해 Image 컴포넌트를 제공한다. 이는 HTML의 `<img>` 태그를 확장한 것으로, 좋은 Core Web Vital 지수를 달성하고 성능을 개선하는 데 도움이 되는 기능이 포함되어 있다.

- **Core Web Vital?** ⇒ Web Vital은 웹의 성능과 품질을 측정하기 위한 지침으로, Google이 제안했다. 사용자 경험을 수량화하여 측정하고 이를 토대로 어떤 부분을 개선해야 할 지 확인할 수 있다. 그 중에서도 Core Web Vital에는 아래 세 가지가 있다.
    - [LCP](https://web.dev/lcp/) (Largest Contentful Paint): **로딩 성능**을 측정한다. 페이지가 처음 로드를 시작한 시점으로부터 뷰포트 내에 있는 가장 큰 이미지나 텍스트 블록의 렌더링 시간이다. 우수한 사용자 경험을 위해서는 LCP가 2.5초 이내여야 한다.
    - [FID](https://web.dev/fid/) (First Input Delay): **상호 작용**을 측정한다. 사용자가 페이지와 처음 상호 작용한 순간부터 그 상호 작용에 대한 응답으로 브라우저가 실제 이벤트 핸들러 처리를 시작하기까지의 시간이다. 우수한 사용자 경험을 위해서 FID 값이 100ms 이하여야 한다.
        - 최초 입력은 클릭, 탭, 키 누름과 같은 입력 이벤트에 초점을 맞춘다. 스크롤, 확대, 축소와 같은 상호작용은 연속 작업이며 입력 이벤트와는 다른 성능 제약 조건을 가지므로 별개로 평가해야 한다.
    - [CLS](https://web.dev/cls/) (Cumulative Layout Shift): **시각적 안정성**을 측정한다. 페이지 전체 수명 동안 발생하는 모든 예기치 않은 레이아웃 이동 중에서, 가장 큰 레이아웃 이동의 점수이다. 우수한 사용자 경험을 위해서는 CLS 점수가 0.1 이하여야 한다.

Image 컴포넌트를 통해 제공하는 기능은 다음과 같다.

- 디바이스에 맞추어 이미지의 사이즈 조정 및 모던 이미지 포맷 사용
- 시각적 안정성 (CLS 방지)
- 빠른 페이지 로딩

만약에 사이트 내에서 다른 도메인의 이미지를 사용한다면 해당 도메인을 Next.js의 Image Optimization API에 알려주어야 한다. `next.config.js`파일에 아래와 같은 설정을 추가해 주어야 한다.

```jsx
module.exports = {
  images: {
    domains: ['example.com', 'example2.com'],
  },
}
```

Image Optimization API는 Image 컴포넌트로 불러오는 이미지를 최적화한 후에 Next.js 웹 서버에서 직접 이미지를 제공하는 방식으로 작동한다. 아래 스크린샷을 보면 AWS S3에 저장되어 있는 이미지를 `next/image`를 사용해 요청했더니 next 웹 서버로 요청이 보내진 것을 확인할 수 있다. 또한 CDN을 따로 사용하지 않아도 이미지를 캐싱할 수 있게 되었다.

![이미지를 가져오기 위해 next 웹 서버로 이미지를 요청하고 있음](https://user-images.githubusercontent.com/40057032/147535510-10688481-6b6f-4075-91d8-4a350274bc3b.png)
![S3에서 별도 캐시 설정을 하고 있지 않지만 Next.js 웹 서버에서 이미지를 캐싱하고 있음](https://user-images.githubusercontent.com/40057032/147535517-114877a6-7a67-4d69-b4a6-2382cb39d33c.png)

이미지 요소에 너비, 높이 값을 주지 않으면 이미지가 로드되기 전까지 그 공간을 할당해 주지 않는다. 이미지가 로드되면 이미지의 크기만큼 이미지 요소가 자리를 차지하며 다른 요소를 밀어내게 되는데, 즉 레이아웃 시프트가 일어나 레이아웃의 변경이 일어날 수 있다. 따라서 이미지 요소에는 width, height 속성을 명시적으로 주어야 한다. 그러나 로드될 이미지의 크기를 알 수 없는 경우가 대부분이다. `next/image`에서는 layout 속성을 제공해서 부모 요소에 따라 이미지 크기가 조정되도록 있도록 한다. [Optional Props의 layout 참고](https://nextjs.org/docs/api-reference/next/image)

`next/image` 컴포넌트가 이미지를 가져오는 방식은 기본적으로 lazy loading이다. 따라서 뷰포트와 이미지 사이 거리를 계산해 그 거리가 멀다면 이미지를 미리 로드하지 않는다. 이를 통해서 페이지에 처음 접근했을 때 로딩 속도를 개선할 수 있다.

### Code splitting & bundling

- `next build` 커맨드를 통해 Next.js 프로젝트를 빌드하면, `pages/` 하위에 있는 각 컴포넌트 파일들은 자동으로 code splitting 되어 각각이 하나의 자바스크립트 번들로 번들링된다.
- 코드를 더 쪼개고 싶다면 Dynamic Import 기능을 사용할 수 있다. Next.js는 ES2020의 `dynamic import()`를 지원한다. 이를 통해 한 페이지 안의 코드를 다른 청크로 분리할 수 있다. 일반적인 자바스크립트 파일 뿐만 아니라 리액트 컴포넌트 또한 dynamic import를 통해 분리할 수 있다. [참고](https://nextjs.org/docs/advanced-features/dynamic-import)

### Zero config & Config Customizing

- `create-next-app`으로 Next.js 어플리케이션을 생성하면, 웹 프로젝트 개발과 빌드를 위한 거의 모든 설정이 되어 있는 프로젝트가 생성된다. 여기에는 CSS import, module 설정을 포함한 Webpack 설정과 Babel 설정이 포함되어 있으며 원한다면 `--typescript` 옵션을 통해 타입스크립트 설정을 자동으로 만들 수도 있다.
- 설정을 바꾸길 원한다면, `next.config.js` 파일을 만들고 아래와 같이 원하는 웹팩 설정을 추가하면 된다.

```jsx
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}
```

- `next.config.js` 에서는 웹팩 설정 뿐만 아니라 환경 변수 설정, 리버스 프록시 설정 등을 커스텀할 수 있다.
- 바벨 설정을 원한다면 `babelrc` 파일을 만들어 추가하면 된다.

### Built-in CSS

어떤 스타일시트를 전역에 적용하고 싶다면, `pages/_app.js` 파일에 스타일시트 파일을 import 하면 된다. 이 때, `node_modules`에 있는 스타일을 가져와서 적용할 수도 있다.

전역이 아니라 어떤 특정 컴포넌트에 스타일 시트를 적용하고 싶다면, `[name].module.css` 형식의 이름을 지어서 사용해야 한다. CSS Module 안에서 만들어진 class 이름은 다른 파일과 충돌하지 않는다.

`sass` 라이브러리만 설치하면 다른 설정 없이 `.scss` 혹은 `.sass` 확장자의 스타일 시트를 작성하여 자바스크립트 파일에 import 할 수 있다. `next.config.js` 에서 `sassOptions` 속성을 추가해 Sass 컴파일러 옵션을 변경할 수 있다.

### File-system Routing

`pages` 폴더 안에 만들어진 컴포넌트는 파일 명과 디렉토리 구조에 따라 라우팅된다. 따라서 기존 React에서 사용하던 방식처럼 `Route`를 작성해 주지 않아도 된다.

### Fast refresh

개발 중에 리액트 컴포넌트를 수정한다면, Next.js는 페이지 전체를 렌더링하는 것이 아니라 그 컴포넌트만 다시 렌더링한다. 이 때, 그 컴포넌트의 상태는 유지된다. 리액트 컴포넌트가 아닌 파일을 수정한다면, 그 파일을 import 하고 있는 리액트 컴포넌트들을 리렌더링한다.

이 때, 어떤 파일이 리액트 컴포넌트와 리액트 컴포넌트가 아닌 컴포넌트가 import하는 것을 동시에 export하고 있고, 그 파일을 수정했다면, Fast Refresh는 모든 것을 reload 할 것이다. 이를 방지하기 위해 리액트 컴포넌트를 export 하는 파일에서 다른 상수를 export 하지 않도록 하는 것이 좋다.

```jsx
// test.js
export const TestComponent = () => {
	return <div>hi</div>
}

export const testValue = 3;
```

```jsx
// util.js
import { testValue } from "test.js"

export const utilFunc = () => console.log(testValue);
```
