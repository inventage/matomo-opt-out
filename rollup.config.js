import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
  legacyBuild: true,
});

export default merge(baseConfig, {
  input: './index.html',
});
