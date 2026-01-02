<script setup>
import _projects from "../../parseddata/projects.json";

const activeProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "active")
);
const upcomingProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "upcoming")
);
const liveProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "live")
);
const showcaseProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "showcase")
);
const startProjects = _projects.filter((project) =>
  project.categories.some((category) => category.idCode === "start")
);
</script>

<template>
  <div class="flex flex-col gap-2 mt-4">
    <div v-if="activeProjects.length">
      <h2 class="text-2xl font-bold mb-3">Active Projects</h2>
      <DisplayProject
        v-for="project in activeProjects"
        :key="project.suuid"
        :category="`active`"
        :project="project"
        :shortInfo="
          project.categories.find((category) => category.idCode === 'active').shortInfo
        "
      />
    </div>

    <div v-if="upcomingProjects.length">
      <h2 class="text-2xl font-bold mb-3">Upcoming Projects</h2>
      <DisplayProject
        v-for="project in upcomingProjects"
        :key="project.suuid"
        :category="`upcoming`"
        :project="project"
        :shortInfo="
          project.categories.find((category) => category.idCode === 'upcoming').shortInfo
        "
      />
    </div>

    <div v-if="liveProjects.length">
      <h2 class="text-2xl font-bold mb-3">Live and in Production</h2>
      <DisplayProject
        v-for="project in liveProjects"
        :key="project.suuid"
        :title="``"
        :category="`live`"
        :project="project"
        :shortInfo="
          project.categories.find((category) => category.idCode === 'live').shortInfo
        "
      />
    </div>

    <div v-if="showcaseProjects.length">
      <h2 class="text-2xl font-bold mb-3">Showcases</h2>
      <DisplayProject
        v-for="project in showcaseProjects"
        :key="project.suuid"
        :title="``"
        :category="`showcase`"
        :project="project"
        :shortInfo="
          project.categories.find((category) => category.idCode === 'showcase').shortInfo
        "
      />
    </div>

    <div v-if="startProjects.length">
      <h2 class="text-2xl font-bold mb-3">Starter Sites</h2>
      <p>These are starter sites for new projects created with various AI tools.</p>
      <p>Click on the tabs below to see screenshots and links to repos to use these starters for your projects.</p>
      <p class="mb-6">
        NOTE: These starter sites will eventually be incorporated into my new site: (<a class="underline" target="_blank" href="https://edwards-projects.vercel.app"
          >edwards-projects.vercel.app</a
        >), after which this site will be deleted.
      </p>
      <DisplayProject
        v-for="project in startProjects"
        :key="project.suuid"
        :title="``"
        :category="`start`"
        :project="project"
        :shortInfo="
          project.categories.find((category) => category.idCode === 'start').shortInfo
        "
      />
    </div>
  </div>
</template>
