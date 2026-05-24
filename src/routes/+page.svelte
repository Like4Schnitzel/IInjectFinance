<script lang="ts">
	import { calculateCostPerDay, defaultInjectionInfo, type InjectionInfo } from "$lib";
	import InjectionInfoForm from "$lib/components/InjectionInfoForm.svelte";

    let injectionA: InjectionInfo = $state(defaultInjectionInfo);
    let injectionB: InjectionInfo = $state(defaultInjectionInfo);
    let budget: number = $state(100);
    let needleDeadspaceMl: number = $state(0.1);
    let supplyCostPerInjectionEuros: number = $state(0.3);

    let priceA: number = $derived(calculateCostPerDay(injectionA, budget, needleDeadspaceMl, supplyCostPerInjectionEuros));
    let priceB: number = $derived(calculateCostPerDay(injectionB, budget, needleDeadspaceMl, supplyCostPerInjectionEuros));

    let priceASpan: HTMLSpanElement;
    let priceBSpan: HTMLSpanElement;
    const green = "#51e551";
    const yellow = "yellow";
    const red = "red";
    $effect(() => {
        let colorA = priceA >= priceB ? (priceA == priceB ? yellow : red) : green;
        let colorB = colorA == green ? red : (colorA == yellow ? yellow : green);
        priceASpan.style.color = colorA;
        priceBSpan.style.color = colorB;
    })
</script>

<main>
    <h1>Injectable E Vials Price Comparer</h1>
    <forms-container>
        <InjectionInfoForm bind:injectionInfo={injectionA} hideText={false} />
        <InjectionInfoForm bind:injectionInfo={injectionB} hideText={true} />
    </forms-container>
    <form>
        <budget-form>
            <label>Budget: €<input type=number bind:value={budget} /></label>
            <label>Needle Deadspace: <input type=number bind:value={needleDeadspaceMl} />ml</label>
            <label>Supply costs per injection: €<input type=number bind:value={supplyCostPerInjectionEuros}/></label>
        </budget-form>
    </form>
    <results-container>
        <span bind:this={priceASpan}>€{priceA.toFixed(3)}</span>
        <span bind:this={priceBSpan}>€{priceB.toFixed(3)}</span>
    </results-container>
    <div class="sourceCodeLink">
        <span>Source</span>
        <a href="https://github.com/Like4Schnitzel/IInjectFinance/" title="Source Code" target="_blank" >
            <img src="github_icon.svg" alt="GitHub Logo" />
        </a>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
    }

    h1 {
        text-align: center;
    }

    forms-container, results-container {
        display: flex;
        justify-content: space-evenly;
    }

    results-container {
        width: 100%;
    }

    results-container span {
        text-align: center;
        width: 50%;
    }

    form {
        display: flex;
        justify-content: center;
    }

    budget-form {
        width: fit-content;
        display: flex;
        flex-direction: column;
    }

    input {
        width: 4em;
    }

    .sourceCodeLink {
        position: fixed;
        bottom: 2rem;
        left: 1rem;
        height: 3rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
    
    .sourceCodeLink a {
        height: 100%;
        width: 100%;
    }
    
    .sourceCodeLink a img {
        border-radius: 50%;
        background-color: black;
        height: 100%;
        width: 100%;
    }
</style>
