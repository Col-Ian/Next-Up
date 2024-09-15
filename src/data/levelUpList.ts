import EnvoyFirstLevel from '../components/character-class-components/envoy-components/level-components/EnvoyFirstLevel.tsx';
import OperativeFirstLevel from '../components/character-class-components/operative-components/level-components/OperativeFirstLevel.tsx';
import TechnomancerFirstLevel from '../components/character-class-components/technomancer-components/level-components/TechnomancerFirstLevel.tsx';

export const levelUpList: {
	[key: string]: {
		componentForClass: ({ keyID }: { keyID: string }) => JSX.Element;
	};
} = {
	Operative: {
		componentForClass: OperativeFirstLevel,
	},
	Technomancer: {
		componentForClass: TechnomancerFirstLevel,
	},
	Envoy: {
		componentForClass: EnvoyFirstLevel,
	},
};
