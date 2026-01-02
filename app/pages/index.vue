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

    <div v-if="startProjects.length">
      <h2 class="text-2xl font-bold mb-3">Starter Sites</h2>
      <p>These are starter sites for new projects created with various AI tools.</p>
      <p>Click on the tabs below to see screenshots and links to live sites and repos, so you can decide which you want to use as starters for your projects.</p>
      <p class="mb-3">
        NOTE: These starter sites will eventually be incorporated into my new site: (<a class="underline" target="_blank" href="https://edwards-projects.vercel.app"
          >edwards-projects.vercel.app</a
        >), after which this site will be deleted.
      </p>
      <p class="mb-3">Here is a prompt example when creating these sites:</p>
      
     <p class="mb-6 font-mono text-orange-950">
       create a Astro site with one page that displays employee records from a JSON file, it enables the user to create, edit, delete, sort and search employees, the employees are stored in a JSON file and CRUD calls are made to backend Node/Express server, the employee records have 7 fields of type string, number and date, the site has TypeScript, Tailwind 4, and a professional but reduced look with light gray, the site is responsive and cleverly solves horizonal scrolling of all fields in mobile view so that it is easy to edit records on a smartphone, use icons where appropriate, the Node/Express server and the frontend can be started simultaneously with one "npm run dev" command</p>
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
    
    <div v-if="showcaseProjects.length">
      <h2 class="text-2xl font-bold mb-3 mt-6 border-t-1 border-slate-500 pt-4">Showcases</h2>
      <p class="mb-6">
      These are various technologies that I have tried out and got running as simple demos, good to get you up to speed with a working example.
      </p>
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

  </div>
</template>
