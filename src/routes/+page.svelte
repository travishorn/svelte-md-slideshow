<script>
	import '@fontsource-variable/inter';
	import '../app.css';

	let slideIndex = 0;

	export let data;

	function nextSlide() {
		if (slideIndex < data.content.length - 1) {
			slideIndex += 1;
		}
	}

	function prevSlide() {
		if (slideIndex > 0) {
			slideIndex -= 1;
		}
	}

	/** @param {KeyboardEvent} event */
	function handleKeyup(event) {
		if (['Space', 'ArrowRight'].includes(event.code)) {
			nextSlide();
		} else if (['Backspace', 'ArrowLeft'].includes(event.code)) {
			prevSlide();
		}
	}

</script>

<svelte:head>
	<title>My Presentation</title>
</svelte:head>

<div class="h-screen">
	<div
		class="h-full relative overflow-x-hidden cursor-default outline-none"
		on:click={nextSlide}
		on:keyup={handleKeyup}
		role="button"
		tabindex="0"
	>
		{#each data.content as slide, i}
			<section
				class="h-full bg-zinc-900 absolute w-full flex items-center justify-center transition-transform"
				style="transform: translateX({(i - slideIndex) * 99.9}%)"
			>
				<div class="prose prose-zinc prose-invert prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
					{@html slide}
				</div>
			</section>
		{/each}
	</div>
</div>
