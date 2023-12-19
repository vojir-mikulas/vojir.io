<script>
    import Hero from "$lib/components/Hero.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ProjectList from "$lib/components/projects/ProjectList.svelte";
    import ProjectItem from "$lib/components/projects/ProjectItem.svelte";
    import WorkEperience from "$lib/components/work/WorkEperience.svelte";
    import WorkExperienceItem from "$lib/components/work/WorkExperienceItem.svelte";
</script>

<main class="max-w-screen-sm mx-auto p-4 flex flex-col items-center gap-10">
    <Hero/>
    <AboutMe/>
    <WorkEperience>
        <WorkExperienceItem>R2B2 a.s.</WorkExperienceItem>
        <WorkExperienceItem>Soukromá střední škola výpočetní techniky</WorkExperienceItem>
    </WorkEperience>

    <ProjectList>
        <ProjectItem>YELLOWFLASH</ProjectItem>
        <ProjectItem>YELLOWFLASH</ProjectItem>
        <ProjectItem>YELLOWFLASH</ProjectItem>
    </ProjectList>

    <Footer/>
</main>