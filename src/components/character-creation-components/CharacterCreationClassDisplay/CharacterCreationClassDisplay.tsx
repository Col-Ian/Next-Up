import { useContext, useEffect, useState } from "react"
import { classList } from "../../../data/class-information/classList"
import BackButton from "../../../utils/BackButton/BackButton"
import NextButton from "../../../utils/NextButton/NextButton"
import styles from './CharacterCreationClassDisplay.module.css'
import { CharacterCreationContext } from "../../../states/CreateCharacter/CreateCharacter"
import DropDownList from "../../DropDownList/DropDownList"


function CharacterCreationClassDisplay() {

  const { chClass, setChClass, componentArrayPosition, setComponentArrayPosition, componentArray, keyAbilityScoreSelected, setKeyAbilityScoreSelected } = useContext(CharacterCreationContext)

  let classArray: string[] = Object.keys(classList).map((key:string)=>{
    return(key)
  })

  const [{classDescription,
    classDefaults:{
      hitStaminaPoints,
      keyAbilityScore,
      keyAbilityDescription,
      classSkills,
      skillPointsPerLevel,
      armorProficiencies,
      weaponProficiencies,
      goodSavingThrows,
      badSavingThrows,
    }
  }, setSelectedClassObject] = useState<ClassListTypes>(
    {
      classDescription: '',
      classDefaults:{
        hitStaminaPoints: 0,
        keyAbilityScore: [''],
        keyAbilityDescription: '',
        classSkills: [''],
        skillPointsPerLevel: 0,
        armorProficiencies: [''],
        weaponProficiencies: [''],
        babAdvancement: 0,
        goodSavingThrows: [''],
        badSavingThrows: [''],
      }
    }
  )

  useEffect(()=>{
    // Reset the KeyAbilityScore Whenever a class is changed
    setKeyAbilityScoreSelected('')
    // Set the Class object to display as user selects their class.
    if(classList[chClass] != undefined){
      setSelectedClassObject(classList[chClass])
      // Set the default Key Ability Score to the first in the list. This way it will be set even if it doesn't need to be picked.
      setKeyAbilityScoreSelected(classList[chClass].classDefaults.keyAbilityScore[0])
    }
  },[chClass])
    
  return (
    <div className={styles.parentDiv}>
        {
          chClass != '' &&
          <div className={styles.classInformationDiv}>

            <div className={styles.staminaHPBar}>
              <div className={styles.staminaPoints}>
                <div className={styles.staminaHead}>STAMINA POINTS</div>
                <div>{hitStaminaPoints} + Constitution Modifier</div>
              </div>
              <div className={styles.hitPoints}>
                {hitStaminaPoints} HP
              </div>
            </div>

            <div className={styles.classDescription}>
              <p>{classDescription}</p>
            </div>

            <div className={styles.otherClassInfoParent}>

              <div className="otherClassInfo">
                <div className={styles.otherClassInfoHeader}>
                  KEY ABILITY SCORE
                </div>
                <div className={styles.otherClassInfoText}>
                  {keyAbilityDescription}
                </div>
                {
                  // If there is a choice for Key Ability Score
                  keyAbilityScore.length > 1 &&
                  <div className={styles.selectAbilityScore}>
                      <div className={styles.chooseOption}>Choose one:</div>
                      <DropDownList
                        optionType={'Key Ability Score'}
                        optionsArray={keyAbilityScore}
                        optionSelection={setKeyAbilityScoreSelected}
                        selectedOption={keyAbilityScoreSelected}
                      />
                  </div>
                }
              </div>
              
              <div className="otherClassInfo">
                <div className={styles.otherClassInfoHeader}>
                  CLASS SKILLS
                </div>
                <div className={styles.otherClassInfoSubHeader}>
                  SKILL RANKS PER LEVEL
                </div>
                <div className={styles.skillPointsPlusInt}>
                  {skillPointsPerLevel} + INTELLIGENCE MODIFIER
                </div>
                <div className={styles.classSkillsList}>
                  {classSkills.map((v:string, i:number)=>{
                    return(<div className={styles.classSkill} key={`${v}${i}`}>{v}</div>)
                  })}
                </div>
              </div>

              <div className="otherClassInfo">
                <div className={styles.otherClassInfoHeader}>
                  PROFICIENCIES
                </div>
                <div className={styles.otherClassInfoSubHeader}>
                  ARMOR PROFICIENCY
                </div>
                <div className={styles.otherClassInfoText}>
                  {armorProficiencies.join(', ')}
                </div>
                <div className={styles.otherClassInfoSubHeader}>
                  WEAPON PROFICIENCY
                </div>
                <div className={styles.otherClassInfoText}>
                  {weaponProficiencies.join(', ')}
                </div>
              </div>

              <div className="otherClassInfo">
                <div className={styles.otherClassInfoHeader}>
                  SAVING THROWS
                </div>
                <div className={styles.otherClassInfoSubHeader}>
                  GOOD SAVING THROWS
                </div>
                <div className={styles.otherClassInfoText}>
                  {goodSavingThrows.join(', ')}
                </div>
                <div className={styles.otherClassInfoSubHeader}>
                  POOR SAVING THROWS
                </div>
                <div className={styles.otherClassInfoText}>
                  {badSavingThrows.join(', ')}
                </div>
              </div>

            </div>

          </div>
          
        }
        <DropDownList 
          optionType={'Class'}
          optionsArray={classArray}
          optionSelection={setChClass}
          selectedOption={chClass}
      />
        <BackButton
            arrayPosition={componentArrayPosition}
            setArrayPosition={setComponentArrayPosition}
        />
        <NextButton
            message="Next"
            arrayPosition={componentArrayPosition}
            setArrayPosition={setComponentArrayPosition}
            arrayToCycle={componentArray}
            condition={true}
        />
    </div>
  )
}

export default CharacterCreationClassDisplay