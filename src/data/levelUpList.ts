import EnvoyFirstLevel from '../components/character-class-components/envoy-components/level-components/EnvoyFirstLevel.tsx';
import OperativeFirstLevel from '../components/character-class-components/operative-components/level-components/OperativeFirstLevel.tsx';

export const levelUpList: {
	[key: string]: {
		componentForClass: ({ keyID }: { keyID: string }) => JSX.Element;
	};
} = {
	Operative: {
		componentForClass: OperativeFirstLevel,
	},
	Envoy: {
		componentForClass: EnvoyFirstLevel,
	},
};
