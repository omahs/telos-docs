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

  // What does Telos offer and how does the EVM on top of Zero add an advantage
  gettingStarted: [
    'getting-started/README',
    {
      type: 'category',
      label: 'Getting TLOS',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Buying TLOS',
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'getting-started/getting-tlos/buying-tlos',
            },
          ],
        },
        {
          type: 'category',
          label: 'Bridging TLOS',
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'getting-started/getting-tlos/bridging',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Voting',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started/voting',
        },
      ],
    },
    {
      type: 'category',
      label: 'Trading',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started/trading',
        },
      ],
    },
    {
      type: 'category',
      label: 'Lending',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started/lending',
        },
      ],
    },
  ],

  evm: [
    'evm/README',
    {
      type: 'category',
      label: 'Wallets',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'evm/wallets',
        },
      ],
    },
    {
      type: 'category',
      label: 'Exchanges',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'evm/exchanges',
        },
      ],
    },
    {
      type: 'category',
      label: 'Staking',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'evm/staking',
        },
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'evm/security',
        },
      ],
    },
  ],

  zero: [
    'zero/README',
    {
      type: 'category',
      label: 'Accounts',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/accounts',
        },
      ],
    },
    {
      type: 'category',
      label: 'Wallets',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/wallets',
        },
      ],
    },
    {
      type: 'category',
      label: 'Exchanges',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/exchanges',
        },
      ],
    },
    {
      type: 'category',
      label: 'Staking',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/staking',
        },
      ],
    },
  ],

  digitalAssets: [
    'digital-assets/README',
    {
      type: 'category',
      label: 'Platforms',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'digital-assets/platforms',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'digital-assets/guides',
        },
      ],
    },
  ],


  gaming: [
    'gaming/README',
    {
      type: 'category',
      label: 'Platforms',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'gaming/platforms',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'gaming/guides',
        },
      ],
    },
  ],  
};

module.exports = sidebars;
