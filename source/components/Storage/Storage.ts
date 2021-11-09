export const saveGameLvl = <T>(user: string, key: string, object: T): void => {
    const objtext = JSON.stringify(object);
    localStorage.setItem(`${user}_${key}`, objtext);
};

export const loadGameLvl = <T>(user: string, key: string): T | undefined => {
    const objtext = localStorage.getItem(`${user}_${key}`);
    try {
        return JSON.parse(objtext || '') as T;
    } catch (e) {
        return;
    }
};
