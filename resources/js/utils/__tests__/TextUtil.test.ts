import { describe, it, expect } from 'vitest';
import TextUtil from '../TextUtil';

describe('numberWithCommas', () => {
    it('Convert 1000 -> 1,000', () => {
        const expectedConversion = "1,000";
        const numberToConvert = 1000;

        const result = TextUtil.numberWithCommas(numberToConvert);

        expect(result).toBe(expectedConversion);
    });

    it('Convert 100 -> 100', () => {
        const expectedConversion = "100";
        const numberToConvert = 100;

        const result = TextUtil.numberWithCommas(numberToConvert);

        expect(result).toBe(expectedConversion);
    })
})

