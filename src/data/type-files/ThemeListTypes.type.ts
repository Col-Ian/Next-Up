type ThemeListTypes = {
    themeName: string,
    themeScoreModifiers: string,
    themeDescription: string,
    themeFunction: (
        keyID: KeyIDType,
        option?: string,
    )=>void,
    themeAbilityTitle: string[],
    themeAbilityDescription: string[],
    hasOptions: boolean,
    optionDescription: string[],
    optionArray: Array<Array<string>>,
}