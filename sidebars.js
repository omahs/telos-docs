/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  // What does Telos offer and how does the EVM on top of native add an advantage
  overview: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'overview/getting-started/Overview',
        'overview/getting-started/resources',
      ],
    },
  ],
  // Quick Start Layout A basic launch with native and EVM
  quickStart: [
    'quickstart/README',
    'quickstart/metamask_remix',
    'quickstart/native-eosio',
    'quickstart/mint_nfts_on_telos',
  ],

  // DApps
  dapps: [
  'dapps/launch-dapp-on-tEVM',
  {
      type: 'category',
      label: 'Smart Contracts',
      collapsed: false,
      items: [
      {
        type: 'autogenerated', 
        dirName: 'dapps/smart-contracts',
      },
    ],
  }
],


  // Nodes
  nodes: [
    'nodes/Telos nodes',
    'nodes/Types of Nodes'
  ],

  // Native Telos 
  native: [
    'native/native_telos',
    {
      type: 'category',
      label: 'Telos Native',
      collapsed: false,
      items: [
        {
          type: 'autogenerated', 
          dirName: 'native/eosio_toolkit',
        },
      ],
    },
  ],
  

  // Learn
  learn: [
    'learn/README',
  ],


  // FAQ PAGE
  faq: [
    'faq/faqs',
  ],
  
   
};

module.exports = sidebars;
