import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documents/__docusaurus/debug',
    component: ComponentCreator('/documents/__docusaurus/debug', '3a8'),
    exact: true
  },
  {
    path: '/documents/__docusaurus/debug/config',
    component: ComponentCreator('/documents/__docusaurus/debug/config', 'bce'),
    exact: true
  },
  {
    path: '/documents/__docusaurus/debug/content',
    component: ComponentCreator('/documents/__docusaurus/debug/content', '360'),
    exact: true
  },
  {
    path: '/documents/__docusaurus/debug/globalData',
    component: ComponentCreator('/documents/__docusaurus/debug/globalData', 'ea7'),
    exact: true
  },
  {
    path: '/documents/__docusaurus/debug/metadata',
    component: ComponentCreator('/documents/__docusaurus/debug/metadata', '792'),
    exact: true
  },
  {
    path: '/documents/__docusaurus/debug/registry',
    component: ComponentCreator('/documents/__docusaurus/debug/registry', '956'),
    exact: true
  },
  {
    path: '/documents/__docusaurus/debug/routes',
    component: ComponentCreator('/documents/__docusaurus/debug/routes', 'cdb'),
    exact: true
  },
  {
    path: '/documents/blog',
    component: ComponentCreator('/documents/blog', '6ce'),
    exact: true
  },
  {
    path: '/documents/blog/archive',
    component: ComponentCreator('/documents/blog/archive', 'c91'),
    exact: true
  },
  {
    path: '/documents/blog/first-blog-post',
    component: ComponentCreator('/documents/blog/first-blog-post', '139'),
    exact: true
  },
  {
    path: '/documents/blog/long-blog-post',
    component: ComponentCreator('/documents/blog/long-blog-post', '01a'),
    exact: true
  },
  {
    path: '/documents/blog/mdx-blog-post',
    component: ComponentCreator('/documents/blog/mdx-blog-post', 'd81'),
    exact: true
  },
  {
    path: '/documents/blog/tags',
    component: ComponentCreator('/documents/blog/tags', '177'),
    exact: true
  },
  {
    path: '/documents/blog/tags/docusaurus',
    component: ComponentCreator('/documents/blog/tags/docusaurus', '022'),
    exact: true
  },
  {
    path: '/documents/blog/tags/facebook',
    component: ComponentCreator('/documents/blog/tags/facebook', '54f'),
    exact: true
  },
  {
    path: '/documents/blog/tags/hello',
    component: ComponentCreator('/documents/blog/tags/hello', 'a67'),
    exact: true
  },
  {
    path: '/documents/blog/tags/hola',
    component: ComponentCreator('/documents/blog/tags/hola', 'e6d'),
    exact: true
  },
  {
    path: '/documents/blog/welcome',
    component: ComponentCreator('/documents/blog/welcome', '645'),
    exact: true
  },
  {
    path: '/documents/markdown-page',
    component: ComponentCreator('/documents/markdown-page', '498'),
    exact: true
  },
  {
    path: '/documents/network',
    component: ComponentCreator('/documents/network', '519'),
    routes: [
      {
        path: '/documents/network',
        component: ComponentCreator('/documents/network', '952'),
        routes: [
          {
            path: '/documents/network',
            component: ComponentCreator('/documents/network', '5d1'),
            routes: [
              {
                path: '/documents/network/http-protocol',
                component: ComponentCreator('/documents/network/http-protocol', '31f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/https-protocol',
                component: ComponentCreator('/documents/network/https-protocol', '95b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/intro',
                component: ComponentCreator('/documents/network/intro', '9dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/network',
                component: ComponentCreator('/documents/network/network', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/network-protocol',
                component: ComponentCreator('/documents/network/network-protocol', 'af2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/network/tcp-ip-protocol',
                component: ComponentCreator('/documents/network/tcp-ip-protocol', 'c3b'),
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
    component: ComponentCreator('/documents/web', '7fe'),
    routes: [
      {
        path: '/documents/web',
        component: ComponentCreator('/documents/web', 'f52'),
        routes: [
          {
            path: '/documents/web',
            component: ComponentCreator('/documents/web', 'c79'),
            routes: [
              {
                path: '/documents/web/category/tutorial---basics',
                component: ComponentCreator('/documents/web/category/tutorial---basics', '997'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/CSS/',
                component: ComponentCreator('/documents/web/CSS/', 'f8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/CSS/main-concept',
                component: ComponentCreator('/documents/web/CSS/main-concept', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/CSS/property-important',
                component: ComponentCreator('/documents/web/CSS/property-important', 'd28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Git/',
                component: ComponentCreator('/documents/web/Git/', '085'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/HTML/main-concept',
                component: ComponentCreator('/documents/web/HTML/main-concept', '304'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/HTML/tag-important',
                component: ComponentCreator('/documents/web/HTML/tag-important', '282'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/intro',
                component: ComponentCreator('/documents/web/intro', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/closure',
                component: ComponentCreator('/documents/web/Javascript/Advanced/closure', 'e61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/eventloop',
                component: ComponentCreator('/documents/web/Javascript/Advanced/eventloop', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/scope',
                component: ComponentCreator('/documents/web/Javascript/Advanced/scope', '7f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/thamchieuthamtri',
                component: ComponentCreator('/documents/web/Javascript/Advanced/thamchieuthamtri', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Advanced/this',
                component: ComponentCreator('/documents/web/Javascript/Advanced/this', 'd42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic New/data-type',
                component: ComponentCreator('/documents/web/Javascript/Basic New/data-type', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic New/Variable',
                component: ComponentCreator('/documents/web/Javascript/Basic New/Variable', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic/Array',
                component: ComponentCreator('/documents/web/Javascript/Basic/Array', 'fee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic/loop',
                component: ComponentCreator('/documents/web/Javascript/Basic/loop', '46c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic/SpreadRest',
                component: ComponentCreator('/documents/web/Javascript/Basic/SpreadRest', '9e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Javascript/Basic/String',
                component: ComponentCreator('/documents/web/Javascript/Basic/String', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/OOP/',
                component: ComponentCreator('/documents/web/OOP/', 'a40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/ReactJS/basic',
                component: ComponentCreator('/documents/web/ReactJS/basic', '9c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/ReactJS/hook',
                component: ComponentCreator('/documents/web/ReactJS/hook', '3ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/ReactJS/plugin',
                component: ComponentCreator('/documents/web/ReactJS/plugin', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/congratulations',
                component: ComponentCreator('/documents/web/tutorial-basics/congratulations', 'a98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/documents/web/tutorial-basics/create-a-blog-post', 'a4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/create-a-document',
                component: ComponentCreator('/documents/web/tutorial-basics/create-a-document', '039'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/create-a-page',
                component: ComponentCreator('/documents/web/tutorial-basics/create-a-page', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/documents/web/tutorial-basics/deploy-your-site', '4ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/tutorial-basics/markdown-features',
                component: ComponentCreator('/documents/web/tutorial-basics/markdown-features', '708'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Typescript/Basic',
                component: ComponentCreator('/documents/web/Typescript/Basic', '899'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documents/web/Typescript/TypeAliasAndInterface',
                component: ComponentCreator('/documents/web/Typescript/TypeAliasAndInterface', '13f'),
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
    component: ComponentCreator('/documents/', '26a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
