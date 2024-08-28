import styles from './HomePage.module.css';

function HomePage() {
	return (
		<div className={styles.parentDiv}>
			<div className={styles.homePageContent} autoFocus>
				<div className={styles.wrapperDiv}>
					<div className={styles.heading}>Welcome To Next-Up</div>
					<p>
						Next-Up was made to help players for the Starfinder Roleplaying
						Game. It helps to make creating and managing your character a
						seamless experience.
					</p>
				</div>
				<div className={styles.wrapperDiv}>
					<div className={styles.heading}>Creating A Character</div>
					<p>
						The first step is creating your character. After you select the Add
						Character button from the navigation menu, you'll be guided step by
						step through character creation. You won't be able to proceed
						through character creation until you've selected all options in each
						section. As of right now, only the Operative class and a few select
						other options are available.
					</p>
				</div>
				<div className={styles.wrapperDiv}>
					<div className={styles.heading}>Character Sheet</div>
					<p>
						The character sheet is the life of your character. Anything that
						requires a calculation will be automatically completed for you, and
						any input that you can't edit yourself will have a bold border
						around it. Below, some key features will be demonstrated.
					</p>
					<div className={styles.pictureWithDescriptionWrap}>
						<div className={styles.subHeading}>Basic Information</div>
						<img src='basic-info.jpg' alt='basic-information-image' />
						<p>
							This is where all basic information of your character is saved.
							Their name you select in character creation, class, race, and
							theme can not be changed. Everything else can be changed how you
							need it to be.
						</p>
					</div>
					<div className={styles.pictureWithDescriptionWrap}>
						<div className={styles.subHeading}>Ability Scores</div>
						<img src='ability-scores.jpg' alt='ability-scores-image' />
						<p>
							This is where you'll be saving your ability scores. Each attribute
							here is set from your character creation, and from there will
							affect values across your entire sheet. You can add bonuses and
							penalties as you need to.
						</p>
					</div>
					<div className={styles.pictureWithDescriptionWrap}>
						<div className={styles.subHeading}>Skills</div>
						<img src='skills.jpg' alt='skills-image' />
						<p>
							Any skill that is a class skill will be automatically checked off
							from creation, but you can customize it if you need to by
							selecting others. The maximum number of ranks you can put into a
							skill is equal to your level, while the max ranks you can have at
							your current level will be displayed just above all the skills,
							next to the heading. You can go over this cap, but you should only
							if your Game Master (GM) allows. The ability modifier from the
							associated attributes will be updated automatically as you give
							bonuses/penalties to each.
						</p>
						<p>
							The only skill you may notice is different is your Profession,
							which allows you to write what your profession is.
						</p>
						<p>
							Any ranks that you are unable to increase may be due to a specific
							ability, like the Operative's Specialization. The bonus ranks
							given to these do not count towards your total ranks used.
						</p>
						<p>
							At the bottom of your skills is the skill notes, which you can use
							to keep reminders about where some of your bonuses come from. For
							instance, as an Operative, you have a +1 insight bonus to all
							skills from the Operative's Edge ability. This brings your
							Acrobatics with 1 rank, 3 from your class bonus after putting your
							rank into it, and 3 from your Dexterity modifier from a 7 to an 8.
						</p>
					</div>
					<div className={styles.pictureWithDescriptionWrap}>
						<div className={styles.subHeading}>Weapons and Armor</div>
						<img src='armor.jpg' alt='armor-image' />
						<p>
							This section has a drop down that will show you any weapons or
							armor that you may have. Whenever you need to add a new one to
							your inventory, hit the add button next to the heading. When you
							need to remove any, hit the red trash can in the bottom right of
							the item you need to remove.
						</p>
						<p>
							For armor specifically, you can choose one armor to equip. When
							you do, it will change your values in the armor class section
							appropriately.
						</p>
					</div>
					<div className={styles.pictureWithDescriptionWrap}>
						<div className={styles.subHeading}>Abilities</div>
						<img src='ability.jpg' alt='ability-image' />
						<p>
							The abilities section will hold any abilities given to you. You
							can also add your own or delete any the same way you would weapons
							and armor.
						</p>
						<p>
							Starting at the top, you enter the name of the ability, then the
							source of where the ability came from, then whether it requires
							Resolve Points to use. Just under that is the description of the
							ability.
						</p>
						<p>
							On the right, you can select any action that is applicable for the
							ability if it has any. Some abilities can be used different ways
							and you have an option of which action type to use. Sometimes you
							may just want a reminder of how it interacts with something that
							is using that type of action.
						</p>
					</div>
					<div className={styles.pictureWithDescriptionWrap}>
						<div className={styles.subHeading}>Combat Actions</div>
						<img src='combat-expanded.jpg' alt='combat-expanded-image' />
						<p>
							At the top of the page, you'll notice a big red button that says
							"Start Combat". This doesn't mean hitting it will send somebody
							over to start some trouble. It will expand your entire list of
							options to use during combat.
						</p>
						<p>
							In a round of combat, you'll get to use a Standard Action, a Move
							Action, and a Swift Action, or you could instead chose to take a
							Full Action. In most cases you get a single reaction, but you may
							get a feat or ability to allow more. You can use any number of
							Other actions as your GM allows.
						</p>
						<p>
							When you select an option, it will add it to the list of actions
							you're planning to use this round of combat during your session.
							Selecting a Full Action will lock you out of selecting any other
							option that clashes with it, and vice versa.
						</p>
						<p>
							When the round is over, you can hit the Reset Round button to
							remove all actions. If you update any abilities, the Sync
							Abilities button will update your list to incluse any changes you
							have made.
						</p>
					</div>
				</div>
				<div className={styles.wrapperDiv}>
					<div className={styles.heading}>Enjoy!</div>
					<p>
						Look forward to more classes and features being added in the future!
					</p>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
