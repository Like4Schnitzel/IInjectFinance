export type InjectionInfo = {
    vialPriceEuros: number,
    vialMl: number,
    vialMgPerMl: number,
    injectionAmountMg: number,
    injectionFrequencyDays: number,
    bulkDiscountAmountEuros: number,
    bulkDiscountMinimumVials: number
};

export const defaultInjectionInfo: InjectionInfo = {
    vialPriceEuros: 40,
    vialMl: 10,
    vialMgPerMl: 40,
    injectionAmountMg: 4,
    injectionFrequencyDays: 7,
    bulkDiscountAmountEuros: 5,
    bulkDiscountMinimumVials: 6
}

export function calculateCostPerDay(injectionInfo: InjectionInfo, budget: number, deadspaceMl: number, supplyCostsPerInjectionEuros: number) {
    const bulkDiscountApplies = injectionInfo.bulkDiscountMinimumVials * injectionInfo.vialPriceEuros <= budget;
    const pricePerVial = bulkDiscountApplies ? injectionInfo.vialPriceEuros - injectionInfo.bulkDiscountAmountEuros : injectionInfo.vialPriceEuros;
    const usedAmountPerInjection = injectionInfo.injectionAmountMg + injectionInfo.vialMgPerMl * deadspaceMl;
    const injectionsPerVial = Math.floor(injectionInfo.vialMl / usedAmountPerInjection);
    const daysTheVialLastsFor = injectionsPerVial * injectionInfo.injectionFrequencyDays;
    const totalSupplyCostsPerVial = supplyCostsPerInjectionEuros * injectionsPerVial;
    const pricePerDay = (pricePerVial + totalSupplyCostsPerVial) / daysTheVialLastsFor;
    return pricePerDay;
}
