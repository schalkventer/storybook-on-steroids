import React, { Fragment } from 'react';
import Layout from '../src/components/structural/Layout';

import { configure, addDecorator } from "@storybook/react";
import { addReadme, configureReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

const documentationStyling = {
  maxWidth: '1000px',
  padding: '50px',
  margin: '0 auto',
}

const req = require.context("../src", true, /.story.tsx$/);
const Wrapper = ({ children }) => <Layout>{children}</Layout>
const Documentation = ({ children, ...props}) => <div style={documentationStyling} {...props}>{children}</div>

configureReadme({
  StoryPreview: Fragment,
  DocPreview: Documentation,
});

addDecorator(addReadme);
addDecorator(withKnobs);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
