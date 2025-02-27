import type { BossesKilled, FloorsCompleted, ItemsCollected, MiniBossesKilled, Secrets, SecretsUnlocked } from '../parser/types.js';
export declare function parseItemsCollectionSubArray(subArrayString: string): ItemsCollected[];
export declare function parseBossesKilledSubArray(subArrayString: string): BossesKilled[];
export declare function parseFloorsCompletedSubArray(subArrayString: string): FloorsCompleted[];
export declare function parseSecretsUnlockedArray(encryptedData: string): SecretsUnlocked[];
export declare function parseMiniBossesKilledSubArray(subArrayString: string): MiniBossesKilled[];
export declare function initializeChecker(): number[];
export declare function decrypt(encryptedData: string, secretsCheckArray: Secrets[]): SecretsUnlocked[];
export declare function encrypt(locker: SecretsUnlocked[]): string;
export declare function parseNumberSubArray(subArrayString: string, checkArray: string[]): number[];
