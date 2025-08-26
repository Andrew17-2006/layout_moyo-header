'use strict';

const backstop = require('@mate-academy/backstop-config');
// Якщо в backstop є basicScenario
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  url: 'file:///C:/Users/andri/projects/layout_moyo-header/src/index.html',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    { name: '1024px', width: 1024, height: 768 },
    { name: '1200px', width: 1200, height: 768 },
  ],
  scenarios: [
    { ...basic, label: 'Header tag', selectors: ['header'] },
    { ...basic, label: 'Nav tag', selectors: ['nav'] },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      selectors: ['a.nav__link[data-qa="hover"]'],
      hoverSelector: 'a.nav__link[data-qa="hover"]',
      postInteractionWait: 1000,
      misMatchThreshold: 2,
    },
    {
      ...basic,
      label: 'Link with class_is-active',
      selectors: ['a.nav__link.is-active'],
      misMatchThreshold: 2,
    },
  ],
};

module.exports = config;
