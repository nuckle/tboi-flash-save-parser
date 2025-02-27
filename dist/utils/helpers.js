import { bossesNamesArray, floorsNamesArray, itemsNamesArray, miniBossesNamesArray, secretsNamesArray, } from '../consts/names.js';
export function parseItemsCollectionSubArray(subArrayString) {
    const itemsArray = itemsNamesArray;
    const subArray = parseStringSubArray(subArrayString, itemsArray);
    const itemCollectionSubArray = subArray.map((itemCollected, index) => {
        return {
            name: itemsArray[index],
            unlocked: itemCollected === '1',
        };
    });
    return itemCollectionSubArray;
}
export function parseBossesKilledSubArray(subArrayString) {
    const bossesArray = bossesNamesArray;
    const subArray = parseNumberSubArray(subArrayString, bossesArray);
    const bossesKilledSubArray = subArray.map((bossKilled, index) => {
        return {
            name: bossesArray[index],
            count: bossKilled,
        };
    });
    return bossesKilledSubArray;
}
export function parseFloorsCompletedSubArray(subArrayString) {
    const floorsArray = floorsNamesArray;
    const subArray = parseNumberSubArray(subArrayString, floorsArray);
    const floorsCompletedSubArray = subArray.map((floorCompleted, index) => {
        return {
            name: floorsArray[index],
            count: floorCompleted,
        };
    });
    return floorsCompletedSubArray;
}
export function parseSecretsUnlockedArray(encryptedData) {
    const secretsArray = secretsNamesArray;
    const secretsUnlockedArray = decrypt(encryptedData, secretsArray);
    return secretsUnlockedArray;
}
export function parseMiniBossesKilledSubArray(subArrayString) {
    const miniBossesArray = miniBossesNamesArray;
    const subArray = parseNumberSubArray(subArrayString, miniBossesArray);
    const miniBossesKilledSubArray = subArray.map((miniBossKilled, index) => {
        return {
            name: miniBossesArray[index],
            count: miniBossKilled,
        };
    });
    return miniBossesKilledSubArray;
}
export function initializeChecker() {
    const checker = new Array(400).fill(0);
    let f1 = 5;
    let f2 = 6;
    let e = 0;
    while (e < 400) {
        checker[e] = 0;
        ++e;
    }
    e = 0;
    while (e < 1000) {
        f1 += f2;
        ++f2;
        if (f2 > 5) {
            f2 = 2;
        }
        if (f1 >= 200) {
            f1 -= 200;
        }
        checker[f1] += e % 5;
        if (checker[f1] >= 9) {
            checker[f1] -= 9;
        }
        checker[f1 + 201] = checker[f1];
        e++;
    }
    return checker;
}
export function decrypt(encryptedData, secretsCheckArray) {
    const checker1 = encryptedData.split('');
    const locker = [];
    const checker = initializeChecker();
    // Initialize locker
    for (let e = 0; e < secretsCheckArray.length; e++) {
        locker.push({
            name: secretsCheckArray[e],
            unlocked: false,
        });
    }
    // Perform decryption
    for (let e = 1; e <= secretsCheckArray.length; e++) {
        const f1 = e * 2 + 11;
        if (f1 < checker1.length && f1 < 400) {
            const encryptedValue = parseInt(checker1[f1], 10);
            if (!isNaN(encryptedValue)) {
                let originalCheckerValue = checker[f1];
                let encryptedCheckerValue = originalCheckerValue + (e % 4) + 1;
                if (encryptedCheckerValue > 9) {
                    encryptedCheckerValue -= 9;
                }
                if (encryptedValue === encryptedCheckerValue) {
                    locker[e - 1].unlocked = true;
                }
            }
        }
    }
    return locker;
}
export function encrypt(locker) {
    const checker = initializeChecker();
    const checker1 = new Array(400);
    // Copy the checker array
    for (let e = 0; e <= 400; e++) {
        checker1[e] = checker[e];
    }
    // Apply locker modifications
    for (let e = 1; e <= locker.length; e++) {
        if (locker[e - 1].unlocked === true) {
            const f1 = e * 2 + 11;
            if (f1 < 400) {
                checker1[f1] += (e % 4) + 1;
                if (checker1[f1] > 9) {
                    checker1[f1] -= 9;
                }
            }
        }
    }
    // Convert to string
    let encryptedData = '';
    for (let e = 0; e < 400; e++) {
        encryptedData += checker1[e];
    }
    return encryptedData;
}
function parseStringSubArray(subArrayString, checkArray) {
    if (subArrayString !== '' && subArrayString !== '0') {
        const firstPart = subArrayString.split("'");
        firstPart.shift();
        let array = firstPart ? firstPart : [];
        while (array.length < checkArray.length) {
            array.push('0');
        }
        return array;
    }
    return Array(checkArray.length).fill('0');
}
export function parseNumberSubArray(subArrayString, checkArray) {
    if (subArrayString !== '' && subArrayString !== '0') {
        const firstArray = subArrayString.split("'");
        firstArray.shift();
        const firstPart = firstArray ?? [];
        let array = firstPart.map((item) => parseInt(item, 10));
        if (array.length > checkArray.length) {
            array = array.slice(0, checkArray.length);
        }
        else {
            while (array.length < checkArray.length) {
                array.push(0);
            }
        }
        return array;
    }
    return Array(checkArray.length).fill(0);
}
