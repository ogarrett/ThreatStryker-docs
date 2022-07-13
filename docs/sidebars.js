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
  threatstryker: [
    {
      type: 'html',
      value: 'Deepfence ThreatStryker',
      className: 'sidebar-title',
    },    

    'threatstryker/index',

    {
      type: 'category',
      label: 'Introduction to ThreatStryker',
      link: {
        type: 'doc',
        id: 'threatstryker/Introduction/index'
      },
      collapsed: false,
      items: [
        'threatstryker/Introduction/deploy',
        'threatstryker/Introduction/components',
      ],
    },

    {
      type: 'category',
      label: 'Deploying in Deepfence Cloud',
      link: {
        type: 'doc',
        id: 'threatstryker/Cloud/index'
      },
      items: [
        'threatstryker/Cloud/users',
        'threatstryker/Cloud/consoles',
        'threatstryker/Cloud/agents',
      ],
    },

    {
      type: 'category',
      label: 'Deploying with Self-Install',
      link: {
        type: 'doc',
        id: 'threatstryker/Self-Install/index'
      },
      items: [
        'threatstryker/Self-Install/console',
        'threatstryker/Self-Install/users',
        'threatstryker/Self-Install/aws-elb',
        'threatstryker/Self-Install/troubleshooting',
      ],
    },
 
    {
      type: 'category',
      label: 'Sensor Agents',
      link: {
        type: 'doc',
        id: 'threatstryker/Sensors/index'
      },
      items: [
        'threatstryker/Sensors/kubernetes',
        'threatstryker/Sensors/docker',
        'threatstryker/Sensors/aws-ecs',
        'threatstryker/Sensors/aws-fargate',
        'threatstryker/Sensors/bare-metal',
      ],
    },

    {
      type: 'category',
      label: 'Operations',
      link: {
        type: 'doc',
        id: 'threatstryker/Operations/index'
      },
      items: [
        'threatstryker/Operations/visualization',
        'threatstryker/Operations/vulnerability-management',
        'threatstryker/Operations/registry-scanning',
        'threatstryker/Operations/runtime-compliance',
        'threatstryker/Operations/runtime-workload-firewall',
        'threatstryker/Operations/east-west-dpi',
        'threatstryker/Operations/runtime-integrity',
        'threatstryker/Operations/attack-disruption',
        'threatstryker/Operations/report-generation',
        'threatstryker/Operations/ci-cd',
        'threatstryker/Operations/notifications',
      ],
    },

    {
      type: 'category',
      label: 'Integrations',
      link: {
        type: 'doc',
        id: 'threatstryker/Integrations/index'
      },
      items: [
        'threatstryker/Integrations/slack',
        'threatstryker/Integrations/sumo-logic',
        'threatstryker/Integrations/terraform',
       ],
    },
    "threatstryker/api-reference",
  ],
};

module.exports = sidebars;
