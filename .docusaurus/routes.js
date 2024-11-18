import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documents/blog',
    component: ComponentCreator('/documents/blog', '8b0'),
    exact: true
  },
  {
    path: '/documents/blog/archive',
    component: ComponentCreator('/documents/blog/archive', '045'),
    exact: true
  },
  {
    path: '/documents/blog/authors',
    component: ComponentCreator('/documents/blog/authors', 'e59'),
    exact: true
  },
  {
    path: '/documents/blog/first-blog-post',
    component: ComponentCreator('/documents/blog/first-blog-post', 'df9'),
    exact: true
  },
  {
    path: '/documents/blog/long-blog-post',
    component: ComponentCreator('/documents/blog/long-blog-post', '6ce'),
    exact: true
  },
  {
    path: '/documents/blog/mdx-blog-post',
    component: ComponentCreator('/documents/blog/mdx-blog-post', 'b8f'),
    exact: true
  },
  {
    path: '/documents/blog/tags',
    component: ComponentCreator('/documents/blog/tags', '3d0'),
    exact: true
  },
  {
    path: '/documents/blog/tags/docusaurus',
    component: ComponentCreator('/documents/blog/tags/docusaurus', '16e'),
    exact: true
  },
  {
    path: '/documents/blog/tags/facebook',
    component: ComponentCreator('/documents/blog/tags/facebook', 'c29'),
    exact: true
  },
  {
    path: '/documents/blog/tags/hello',
    component: ComponentCreator('/documents/blog/tags/hello', '1fb'),
    exact: true
  },
  {
    path: '/documents/blog/tags/hola',
    component: ComponentCreator('/documents/blog/tags/hola', '32e'),
    exact: true
  },
  {
    path: '/documents/blog/welcome',
    component: ComponentCreator('/documents/blog/welcome', 'cf7'),
    exact: true
  },
  {
    path: '/documents/markdown-page',
    component: ComponentCreator('/documents/markdown-page', '3b7'),
    exact: true
  },
  {
    path: '/documents/network',
    component: ComponentCreator('/documents/network', '778'),
    routes: [
      {
        path: '/documents/network',
        component: ComponentCreator('/documents/network', '72c'),
        routes: [
          {
            path: '/documents/network',
            component: ComponentCreator('/documents/network', '46c'),
            routes: [
              {
                path: '/documents/network/http-protocol',
                component: ComponentCreator('/documents/network/http-protocol', '474'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/https-protocol',
                component: ComponentCreator('/documents/network/https-protocol', '1dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/intro',
                component: ComponentCreator('/documents/network/intro', 'd93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/network',
                component: ComponentCreator('/documents/network/network', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/network-protocol',
                component: ComponentCreator('/documents/network/network-protocol', 'b0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/tcp-ip-protocol',
                component: ComponentCreator('/documents/network/tcp-ip-protocol', 'd73'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/documents/web',
    component: ComponentCreator('/documents/web', 'd23'),
    routes: [
      {
        path: '/documents/web',
        component: ComponentCreator('/documents/web', 'aff'),
        routes: [
          {
            path: '/documents/web',
            component: ComponentCreator('/documents/web', 'dfb'),
            routes: [
              {
                path: '/documents/web/category/tutorial---basics',
                component: ComponentCreator('/documents/web/category/tutorial---basics', '2b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/CSS/',
                component: ComponentCreator('/documents/web/CSS/', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/CSS/main-concept',
                component: ComponentCreator('/documents/web/CSS/main-concept', '3b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/CSS/property-important',
                component: ComponentCreator('/documents/web/CSS/property-important', '678'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Git/',
                component: ComponentCreator('/documents/web/Git/', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/HTML/main-concept',
                component: ComponentCreator('/documents/web/HTML/main-concept', '0c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/HTML/tag-important',
                component: ComponentCreator('/documents/web/HTML/tag-important', 'c92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/intro',
                component: ComponentCreator('/documents/web/intro', 'f74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/closure',
                component: ComponentCreator('/documents/web/Javascript/Advanced/closure', 'f38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/eventloop',
                component: ComponentCreator('/documents/web/Javascript/Advanced/eventloop', '759'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/scope',
                component: ComponentCreator('/documents/web/Javascript/Advanced/scope', 'f25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/thamchieuthamtri',
                component: ComponentCreator('/documents/web/Javascript/Advanced/thamchieuthamtri', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/this',
                component: ComponentCreator('/documents/web/Javascript/Advanced/this', 'c0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic New/data-type',
                component: ComponentCreator('/documents/web/Javascript/Basic New/data-type', 'c84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic New/Variable',
                component: ComponentCreator('/documents/web/Javascript/Basic New/Variable', 'f0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic/Array',
                component: ComponentCreator('/documents/web/Javascript/Basic/Array', '196'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic/loop',
                component: ComponentCreator('/documents/web/Javascript/Basic/loop', 'c3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic/SpreadRest',
                component: ComponentCreator('/documents/web/Javascript/Basic/SpreadRest', '727'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic/String',
                component: ComponentCreator('/documents/web/Javascript/Basic/String', 'a21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/OOP/',
                component: ComponentCreator('/documents/web/OOP/', '9c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/ReactJS/basic',
                component: ComponentCreator('/documents/web/ReactJS/basic', '155'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/ReactJS/hook',
                component: ComponentCreator('/documents/web/ReactJS/hook', 'ec7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/ReactJS/plugin',
                component: ComponentCreator('/documents/web/ReactJS/plugin', 'd5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/congratulations',
                component: ComponentCreator('/documents/web/tutorial-basics/congratulations', '2b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/documents/web/tutorial-basics/create-a-blog-post', 'aa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/create-a-document',
                component: ComponentCreator('/documents/web/tutorial-basics/create-a-document', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/create-a-page',
                component: ComponentCreator('/documents/web/tutorial-basics/create-a-page', '355'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/documents/web/tutorial-basics/deploy-your-site', '7b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/markdown-features',
                component: ComponentCreator('/documents/web/tutorial-basics/markdown-features', '367'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Typescript/Basic',
                component: ComponentCreator('/documents/web/Typescript/Basic', '451'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Typescript/TypeAliasAndInterface',
                component: ComponentCreator('/documents/web/Typescript/TypeAliasAndInterface', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/documents/',
    component: ComponentCreator('/documents/', '862'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
