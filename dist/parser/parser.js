import { encrypt, parseBossesKilledSubArray, parseFloorsCompletedSubArray, parseItemsCollectionSubArray, parseMiniBossesKilledSubArray, parseSecretsUnlockedArray, } from '../utils/helpers.js';
export class SaveParser {
    encryptedSecretsData;
    keyboardLayoutSettings;
    leftyFlipSettings;
    keyboardLayoutSettings2;
    momKillsCount;
    poopDestoyedCount;
    donationMachineUsageCount;
    deathCardUsageCount;
    arcadeEntrancesCount;
    bombsPlacedCount;
    deathsCount;
    rocksDestroyedCount;
    xRocksDestoyedCount;
    bossOfTheCathedralKillsCount;
    itemsCollected;
    secretsUnlocked;
    bossesKilled;
    miniBossesKilled;
    floorsCompleted;
    constructor() {
        this.encryptedSecretsData = '';
        this.keyboardLayoutSettings = '0';
        this.leftyFlipSettings = '0';
        this.keyboardLayoutSettings2 = '0';
        this.momKillsCount = 0;
        this.poopDestoyedCount = 0;
        this.donationMachineUsageCount = 0;
        this.deathCardUsageCount = 0;
        this.arcadeEntrancesCount = 0;
        this.bombsPlacedCount = 0;
        this.deathsCount = 0;
        this.rocksDestroyedCount = 0;
        this.xRocksDestoyedCount = 0;
        this.bossOfTheCathedralKillsCount = 0;
        this.itemsCollected = [];
        this.secretsUnlocked = [];
        this.bossesKilled = [];
        this.miniBossesKilled = [];
        this.floorsCompleted = [];
    }
    parse(input) {
        const result = {};
        const saveArray = input.split(',');
        while (saveArray.length < 18) {
            saveArray.push('');
        }
        this.encryptedSecretsData = saveArray[0] || '';
        this.keyboardLayoutSettings = this.#getSettingsValue(saveArray[1] || '');
        this.leftyFlipSettings = this.#getSettingsValue(saveArray[2] || '');
        this.keyboardLayoutSettings2 = this.#getSettingsValue(saveArray[3] || '');
        this.momKillsCount = parseInt(saveArray[4] || '0', 10);
        this.poopDestoyedCount = parseInt(saveArray[5] || '0', 10);
        this.donationMachineUsageCount = parseInt(saveArray[6] || '0', 10);
        this.deathCardUsageCount = parseInt(saveArray[7] || '0', 10);
        this.arcadeEntrancesCount = parseInt(saveArray[8] || '0', 10);
        this.bombsPlacedCount = parseInt(saveArray[9] || '0', 10);
        this.deathsCount = parseInt(saveArray[10] || '0', 10);
        this.rocksDestroyedCount = parseInt(saveArray[11] || '0', 10);
        this.xRocksDestoyedCount = parseInt(saveArray[16] || '0', 10);
        this.bossOfTheCathedralKillsCount = parseInt(saveArray[17] || '0', 10);
        this.itemsCollected = saveArray[12]
            ? parseItemsCollectionSubArray(saveArray[12])
            : [];
        this.bossesKilled = saveArray[13]
            ? parseBossesKilledSubArray(saveArray[13])
            : [];
        this.floorsCompleted = saveArray[14]
            ? parseFloorsCompletedSubArray(saveArray[14])
            : [];
        this.miniBossesKilled = saveArray[15]
            ? parseMiniBossesKilledSubArray(saveArray[15])
            : [];
        this.secretsUnlocked = parseSecretsUnlockedArray(this.encryptedSecretsData);
        return result;
    }
    #getSettingsValue(settings) {
        if (settings !== 'true' || '0') {
            return '0';
        }
        return settings;
    }
    getKeyboardLayoutSettings() {
        return this.keyboardLayoutSettings;
    }
    setKeyboardLayoutSettings(keyboardLayoutSettings) {
        this.keyboardLayoutSettings = keyboardLayoutSettings;
    }
    getLeftyFlipSettings() {
        return this.leftyFlipSettings;
    }
    setLeftyFlipSettings(leftyFlipSettings) {
        this.leftyFlipSettings = leftyFlipSettings;
    }
    getKeyboardLayoutSettings2() {
        return this.keyboardLayoutSettings2;
    }
    setKeyboardLayoutSettings2(keyboardLayoutSettings2) {
        this.keyboardLayoutSettings2 = keyboardLayoutSettings2;
    }
    getMomKillsCount() {
        return this.momKillsCount;
    }
    setMomKillsCount(momKillsCount) {
        this.momKillsCount = momKillsCount;
    }
    getPoopDestoyedCount() {
        return this.poopDestoyedCount;
    }
    setPoopDestoyedCount(poopDestoyedCount) {
        this.poopDestoyedCount = poopDestoyedCount;
    }
    getDonationMachineUsageCount() {
        return this.donationMachineUsageCount;
    }
    setDonationMachineUsageCount(donationMachineUsageCount) {
        this.donationMachineUsageCount = donationMachineUsageCount;
    }
    getDeathCardUsageCount() {
        return this.deathCardUsageCount;
    }
    setDeathCardUsageCount(deathCardUsageCount) {
        this.deathCardUsageCount = deathCardUsageCount;
    }
    getArcadeEntrancesCount() {
        return this.arcadeEntrancesCount;
    }
    setArcadeEntrancesCount(arcadeEntrancesCount) {
        this.arcadeEntrancesCount = arcadeEntrancesCount;
    }
    getBombsPlacedCount() {
        return this.bombsPlacedCount;
    }
    setBombsPlacedCount(bombsPlacedCount) {
        this.bombsPlacedCount = bombsPlacedCount;
    }
    getDeathsCount() {
        return this.deathsCount;
    }
    setDeathsCount(deathsCount) {
        this.deathsCount = deathsCount;
    }
    getRocksDestroyedCount() {
        return this.rocksDestroyedCount;
    }
    setRocksDestroyedCount(rocksDestroyedCount) {
        this.rocksDestroyedCount = rocksDestroyedCount;
    }
    getXRocksDestoyedCount() {
        return this.xRocksDestoyedCount;
    }
    setXRocksDestoyedCount(xRocksDestoyedCount) {
        this.xRocksDestoyedCount = xRocksDestoyedCount;
    }
    getBossOfTheCathedralKillsCount() {
        return this.bossOfTheCathedralKillsCount;
    }
    setBossOfTheCathedralKillsCount(bossOfTheCathedralKillsCount) {
        this.bossOfTheCathedralKillsCount = bossOfTheCathedralKillsCount;
    }
    getItemsCollected() {
        return this.itemsCollected;
    }
    unlockItem(itemName, lock = false) {
        const index = this.itemsCollected.findIndex((item) => item.name === itemName);
        if (index !== -1) {
            this.itemsCollected[index].unlocked = !lock;
            return true;
        }
        else {
            return false;
        }
    }
    getSecretsUnlocked() {
        return this.secretsUnlocked;
    }
    unlockSecret(secretName, lock = false) {
        const index = this.secretsUnlocked.findIndex((item) => item.name === secretName);
        if (index !== -1) {
            this.secretsUnlocked[index].unlocked = !lock;
            return true;
        }
        else {
            return false;
        }
    }
    getBossesKilled() {
        return this.bossesKilled;
    }
    updateBossKillCount(bossName, newCount) {
        const index = this.bossesKilled.findIndex((boss) => boss.name === bossName);
        if (index !== -1) {
            this.bossesKilled[index].count = newCount;
            return true;
        }
        else {
            return false;
        }
    }
    getMiniBossesKilled() {
        return this.miniBossesKilled;
    }
    updateMiniBossKillCount(miniBossName, newCount) {
        const index = this.miniBossesKilled.findIndex((miniBoss) => miniBoss.name === miniBossName);
        if (index !== -1) {
            this.miniBossesKilled[index].count = newCount;
            return true;
        }
        else {
            return false;
        }
    }
    getFloorsCompleted() {
        return this.floorsCompleted;
    }
    updateFloorsCompletedCount(floorName, newCount) {
        const index = this.floorsCompleted.findIndex((floor) => floor.name === floorName);
        if (index !== -1) {
            this.floorsCompleted[index].count = newCount;
            return true;
        }
        else {
            return false;
        }
    }
    toString() {
        const encryptedSecrets = encrypt(this.secretsUnlocked);
        const itemsCollected = this.itemsCollected.map((itemCollected) => itemCollected.unlocked ? '1' : '0');
        itemsCollected.unshift('0');
        const bossesKilled = this.bossesKilled.map((bossKilled) => bossKilled.count);
        bossesKilled.unshift(0);
        const floorsCompleted = this.floorsCompleted.map((floorCompleted) => floorCompleted.count);
        floorsCompleted.unshift(0);
        const miniBossesKilled = this.miniBossesKilled.map((miniBossKilled) => miniBossKilled.count);
        const saveString = [
            encryptedSecrets,
            this.keyboardLayoutSettings,
            this.leftyFlipSettings,
            this.keyboardLayoutSettings2,
            this.momKillsCount,
            this.poopDestoyedCount,
            this.donationMachineUsageCount,
            this.deathCardUsageCount,
            this.arcadeEntrancesCount,
            this.bombsPlacedCount,
            this.deathsCount,
            this.rocksDestroyedCount,
            itemsCollected.join("'"),
            bossesKilled.join("'"),
            floorsCompleted.join("'"),
            miniBossesKilled.join("'"),
            this.xRocksDestoyedCount,
            this.bossOfTheCathedralKillsCount,
        ];
        return saveString.join(',');
    }
}
