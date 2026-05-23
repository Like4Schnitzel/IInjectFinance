<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta content="IInjectFinance" property="og:title" />
	<meta content="Injectable Estradiol Price Comparison Tool" property="og:description" />
	<meta content="https://www.fag.homes/IInjectFinance" property="og:url" />
	<meta content="#118C4F" data-react-helmet="true" name="theme-color">
</svelte:head>

{@render children()}

<style>
	:global(*) {
		font-family: sans-serif;
		color: #fff;
		font-size: large;
	}

	:global(h1) {
		font-size: 2rem;
	}

	:global(input) {
		background-color: #4c4c5f;
		border: 1px solid #6c6c7f;
		border-radius: 3px;
	}

	:global(body) {
		background-color: #2c2c3f;
	}
</style>
