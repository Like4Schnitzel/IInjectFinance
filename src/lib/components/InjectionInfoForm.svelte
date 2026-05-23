<script lang="ts">
	import { type InjectionInfo } from "$lib";

    let { injectionInfo = $bindable() }: { injectionInfo: InjectionInfo } = $props();
</script>

<form>
    <label>Vial price: €<input type=number bind:value={injectionInfo.vialPriceEuros} /></label>
    <label>Vial volume: <input type=number bind:value={injectionInfo.vialMl} />ml</label>
    <label>Vial concentration: <input type=number bind:value={injectionInfo.vialMgPerMl} />mg/ml</label>
    <label>Injection Amount: <input type=number bind:value={injectionInfo.injectionAmountMg} />mg</label>
    <label>Injecting every <input type=number bind:value={injectionInfo.injectionFrequencyDays} /> days</label>
    <label>Bulk discount: Save €<input type=number bind:value={injectionInfo.bulkDiscountAmountEuros} /> <br/> when buying <input id="discount-vials" type=number bind:value={injectionInfo.bulkDiscountMinimumVials} /> vials or more.</label>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 3em;
    }

    @media(min-width: 1100px) {
        br {
            display: none;
        }
    }

</style>
