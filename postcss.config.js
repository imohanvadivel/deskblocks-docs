import PresetEnv from 'postcss-preset-env';
import GlobalData from '@csstools/postcss-global-data';

export default {
	plugins: [
		GlobalData({ files: ['src/lib/styles/mediaQueries.css'] }),
		PresetEnv({
			stage: 2
		})
	]
};
