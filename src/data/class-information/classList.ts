// import BiohackerClassDefaults from "./biohacker/BiohackerClassDefaults.ts";
import EnvoyClassDefaults from './envoy/EnvoyClassDefaults';
// import EvolutionistClassDefaults from "./evolutionist/EvolutionistClassDefaults.ts";
import OperativeClassDefaults from './operative/OperativeClassDefaults.ts';
import TechnomancerClassDefaults from './technomancer/TechnomancerClassDefaults.ts';

export const classList: { [key: string]: ClassListTypes } = {
	// 'Biohacker':{
	//     classDescription: 'You\'re fascinated by science in all its many facets. You understand that the fundamentals of biology, chemistry, physics, and other disciplines can help you exploit your enemies\' weaknesses and bolster your allies. You might be studious and methodical about your research, pushing your mind to the limit in search of discovery, or you might be a daring experimenter, improvising concoctions and stumbling upon grand revelations. Either way, you use your knowledge of several fields of scientific study to aid your allies, whether in the thick of battle or in crafting a perfect plan.',
	//     classDefaults: BiohackerClassDefaults
	// },
	Envoy: {
		classDescription:
			"You make your way in the universe with a charming smile, quick wit, and keen sense of self-preservation, and excel at getting others to do what you want. You might be a trickster, hustler, or con artist, or you might serve as an actor, ambassador, or businessperson, paving the way for negotiation through kind words or the occasional dirty trick. You are often the group's strategist, using your quick wit and tactical acumen to push your friends to greater heights. You may also be skilled in diplomacy, serving as the face for a starship crew, talking your way into restricted systems or gaining audiences with local politicians or warlords.",
		classDefaults: EnvoyClassDefaults,
	},
	// 'Evolutionist':{
	//     className: 'Evolutionist',
	//     classDescription: 'Conflict drives innovation, and in a strange and dangerous galaxy you\'ve unlocked unparalleled means to adapt. By embracing mystic tradition, extensive augmentation, deliberate genetic mutation, or relying on other extraordinary means, you transform yourself into a powerful being better suited to achieving your goals. You might adopt characteristics of a ferocious chimera, an undead scion, a cybernetic paragon, or anything in between. Yet your evolution boasts a will of its own. Your abilities fight you for control in stressful situations, even while providing lethal instincts, an innate weapon, and spontaneous adaptations that help you outmaneuver, outwit, and outmatch your foes. No matter your niche, you are an adaptable combatant who forges your destiny in flesh, bone, or steel.',
	//     classDefaults: EvolutionistClassDefaults
	// },
	Operative: {
		classDescription:
			"You're a shadow. You move swiftly, strike suddenly, and always have an escape plan. You're a consummate professional, and you always get the job done, whether it's scouting enemy lines, hunting down criminals, stealing and smuggling items, or assassinating key figures. As an operative, you're skilled in a wide variety of disciplines and specialties, and use speed, mobility, and your quick wits rather than relying on heavy weapons. You excel at the art of surprise, whether it's sniping targets from cover or striking while their backs are turned. Your cause may be righteous, but you have no problem fighting dirty—achieving your objective is all that matters.",
		classDefaults: OperativeClassDefaults,
	},
	Technomancer: {
		classDescription:
			'To the uninitiated, magic and technology are completely unrelated, but you know there are more correlations between the two than most suspect. Magic and technology are just tools, and when combined into one discipline, called technomancy, they can be far more powerful than one or the other on its own. You utilize tech to empower, harness, and manipulate magic, and you wield magic to augment, control, and modify technology. You are an expert at hacking the underlying structure of the universe itself, bending the laws of science and nature to your will. Your technomancy—which is gained from scientific study and experimentation—manipulates the physical world, weaves illusions, allows you to peer through time and space, and if necessary, can blast a foe into atoms.',
		classDefaults: TechnomancerClassDefaults,
	},
};
