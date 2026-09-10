// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Figma (Marginal-App) is the source of truth for tokens and screens.
// https://www.figma.com/design/n29Xp4YGz4baFCVt41fAIm/Marginal-App
export default defineConfig({
  site: 'https://docs.marginal.app',
  integrations: [
    starlight({
      title: 'Marginal',
      description: '표시를 남긴 페이지의 목차. 셀프호스트 · 로컬 우선 웹 하이라이터.',
      defaultLocale: 'root',
      locales: { root: { label: '한국어', lang: 'ko' } },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/marginal-app/marginal-app' },
      ],
      customCss: ['./src/styles/tokens.css', './src/styles/starlight.css'],
      sidebar: [
        {
          label: '시작하기',
          items: [
            { label: '확장 설치', slug: 'getting-started/install' },
            { label: '첫 밑줄', slug: 'getting-started/first-highlight' },
          ],
        },
        {
          label: '셀프호스트',
          items: [
            { label: '서버 띄우기', slug: 'self-host/server' },
            { label: 'API 토큰 발급', slug: 'self-host/token' },
            { label: '확장 연결', slug: 'self-host/connect' },
          ],
        },
        {
          label: '개념',
          items: [
            { label: '로컬 우선과 동기화', slug: 'concepts/local-first' },
            { label: '목차 · 밑줄 · 북마크 · 코멘트', slug: 'concepts/library' },
          ],
        },
      ],
    }),
  ],
});
