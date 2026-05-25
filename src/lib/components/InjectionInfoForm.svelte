<script lang="ts">
	import { type InjectionInfo } from "$lib";

    let { injectionInfo = $bindable(), hideText = false }: { injectionInfo: InjectionInfo, hideText: boolean } = $props();
    let hideTextCss = $derived(hideText ? "none" : "inherit");
    let hideTextClass = $derived(hideText ? "hide-text" : "");
</script>

<form style="--hide-text: {hideTextCss}">
    <label class="griddy {hideTextClass}"><span class="input-description">Vial price:</span><span>€</span><input type=number bind:value={injectionInfo.vialPriceEuros} /><span></span></label>
    <label class="griddy {hideTextClass}"><span class="input-description">Vial volume:</span><span></span><input type=number bind:value={injectionInfo.vialMl} /><span>ml</span></label>
    <label class="griddy {hideTextClass}"><span class="input-description">Vial concentration:</span><span></span><input type=number bind:value={injectionInfo.vialMgPerMl} /><span>mg<wbr />/ml</span></label>
    <label class="griddy {hideTextClass}"><span class="input-description">Injection Amount:</span><span></span><input type=number bind:value={injectionInfo.injectionAmountMg} /><span>mg</span></label>
    <label class="griddy {hideTextClass}"><span class="input-description">Injecting every </span><span></span><input type=number bind:value={injectionInfo.injectionFrequencyDays} /><span> days</span></label>
    <label><span class="input-description">Bulk discount: Save&nbsp;</span>€<input type=number bind:value={injectionInfo.bulkDiscountAmountEuros} /> <br/> <span class="input-description"> when buying </span> <input id="discount-vials" type=number bind:value={injectionInfo.bulkDiscountMinimumVials} />vials <span class="input-description">or more.</span></label>
</form>

<style>
    :root {
        --row-gap: calc(e / 10 * 1rem);
        --two-row-height: 2.4rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: var(--row-gap);
    }

    @media(max-width: 418px) {
        form label:nth-child(3) {
            height: var(--two-row-height);
        }
    }

    @media(max-width: 398px) {
        form label:nth-child(4) {
            height: var(--two-row-height);
        }
    }

    @media(max-width: 351px) {
        form label:nth-child(5) {
            height: var(--two-row-height);
        }
    }

    @media(max-width: 317px) {
        form label:nth-child(2) {
            height: var(--two-row-height);
        }
    }

    .griddy {
        display: grid;
        grid-template-columns: 2.6fr 0.2fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
    }

    @media(max-width: 600px) {
        .griddy.hide-text {
            grid-template-columns: 0.2fr 1fr 1fr;
        }
        .input-description {
            display: var(--hide-text);
        }
    }

    input {
        width: 3em;
    }

    @media(min-width: 1100px) {
        br {
            display: none;
        }

        .griddy {
            grid-template-columns: 2.6fr 0.1fr 0.5fr 1fr;
        }
    }

</style>
