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
      locales: {
        root: { label: '한국어', lang: 'ko' },
        en: { label: 'English', lang: 'en' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/marginal-app/marginal-app' },
      ],
      customCss: ['./src/styles/tokens.css', './src/styles/starlight.css'],
      sidebar: [
        {
          label: '시작하기',
          translations: { en: 'Getting started' },
          items: [
            { label: '확장 설치', translations: { en: 'Install the extension' }, slug: 'getting-started/install' },
            { label: '첫 밑줄', translations: { en: 'Your first highlight' }, slug: 'getting-started/first-highlight' },
          ],
        },
        {
          label: '셀프호스트',
          translations: { en: 'Self-hosting' },
          items: [
            { label: '서버 띄우기', translations: { en: 'Run the server' }, slug: 'self-host/server' },
            { label: 'API 토큰 발급', translations: { en: 'Create an API token' }, slug: 'self-host/token' },
            { label: '확장 연결', translations: { en: 'Connect the extension' }, slug: 'self-host/connect' },
          ],
        },
        {
          label: '개념',
          translations: { en: 'Concepts' },
          items: [
            { label: '로컬 우선과 동기화', translations: { en: 'Local-first and sync' }, slug: 'concepts/local-first' },
            { label: '목차 · 밑줄 · 북마크 · 코멘트', translations: { en: 'Contents, highlights, bookmarks, and comments' }, slug: 'concepts/library' },
          ],
        },
      ],
    }),
  ],
});
