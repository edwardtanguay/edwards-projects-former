module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/global-error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/global-error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/parseddata/projects.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"suuid\":\"tMgADm\",\"idCode\":\"techlanglearn003\",\"title\":\"Tech/Language Learner\",\"shortTitle\":\"Tech/Language Learner\",\"description\":\"I created this site in 2024 in order to combine learning tech skills and learning languages. I no longer use it for recording language phrases as I did at the beginning, since this was superceded by my <a target=\\\"_blank\\\" href=\\\"comprehensible-output\\\">Comprehensible Output</a> site. I still use this Tech Learn site to keep me motivated to watch LinkedIn Learning videos in German, English, French and Spanish so it still serves its original purpose in some way. This site is also significant because it was the project in which I started the new Datapod concept of executing a backend script which transforms freely-formatted text files into JSON data which the frontend then reads locally on a CDN. I had chosen Go as the backend language and SvelteKit as the frontend in order to learn these technologies, which led to the idea of having numerous Datapods each with a different backend language and frontend Framework in order to learn new skills. This site has no public website, I simply use it as a local application, but the repo is public if you want to clone it and set it up locally.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/techlanglearn003\",\"live\":\"\",\"defaultCategory\":\"premier\",\"techItems\":[\"Go\",\"SvelteKit\",\"Sass\"],\"imageMobile\":\"/images/projects/techlanglearn003-mobile.jpg\",\"imageDesktop\":\"/images/projects/techlanglearn003-desktop.jpg\",\"categories\":[{\"idCode\":\"premier\",\"shortInfo\":\"This is a site that I have been using for years to combine (1) learning tech skills, and (2) learning languages.\"}]},{\"suuid\":\"DchN9L\",\"idCode\":\"learncore\",\"title\":\"Learn Core 2022\",\"shortTitle\":\"Learn Core 2022\",\"description\":\"This is an old site from 2022 that I used to learn Spanish, the only useful part to salvage is the color-conjugation chart, and perhaps lists of verbs, the technology (React/Sass) is very old. I might use the name \\\"learncore\\\" for another site that is a collection of learning tools, etc.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/learncore\",\"live\":\"https://learncore.vercel.app\",\"defaultCategory\":\"parked\",\"techItems\":[\"React\",\"TypeScript\",\"Sass\"],\"imageMobile\":\"/images/projects/learncore-mobile.jpg\",\"imageDesktop\":\"/images/projects/learncore-desktop.jpg\",\"categories\":[{\"idCode\":\"parked\",\"shortInfo\":\"A very old site that I used to learn Spanish, the only useful part to salvage is the color-conjugation chart.\"}]},{\"suuid\":\"2XnSGg\",\"idCode\":\"edwards-projects\",\"title\":\"Edward's Projects 2026\",\"shortTitle\":\"Edward's Projects 2026\",\"description\":\"I use this website to track all my software development projects. If you are starting a project, you can find descriptions and links to templates, starters and showcases in many backend languages and frontend frameworks. You can also find all the apps that I build and use, as well as the repositories with access to the code.\",\"status\":\"I'm currently converting this site from a gray design in Nuxt to a modern dark design in Next.js.\",\"mode\":\"active\",\"repo\":\"https://github.com/edwardtanguay/edwards-projects\",\"live\":\"https://edwards-projects.vercel.app\",\"defaultCategory\":\"premier\",\"techItems\":[\"Python\",\"Next.js 16\",\"TypeScript\",\"Tailwind\"],\"imageMobile\":\"/images/projects/edwards-projects-mobile.jpg\",\"imageDesktop\":\"/images/projects/edwards-projects-desktop.jpg\",\"categories\":[{\"idCode\":\"premier\",\"shortInfo\":\"This site (the site you're viewing) shows all tech projects I'm working on with links to repositories, many useful showcases and templates.\"}]},{\"suuid\":\"AUlc3y\",\"idCode\":\"comprehensible-output\",\"title\":\"Comprehensible Input\",\"shortTitle\":\"Comprehensible Input\",\"description\":\"I have been using this site since April 2025 to learn mostly Italian, Spanish, and Dutch. It allows me to create a story with AI based on the phrases I looked up on Google Translate the previous day. Every morning I read the story as an audio, and then listen to it as a kind of podcast. It's a wholistic method that helps you learn a language deeply over time.\",\"status\":\"I currently use this site everyday, creating a story with AI based on phrases I have looked up the previous day in Google translate. I'm currently building in features to improve the site and the ability to learn languages more efficiently.\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/comprehensible-output\",\"live\":\"https://comprehensible-output.vercel.app\",\"defaultCategory\":\"premier\",\"techItems\":[\"Go\",\"React\",\"TypeScript\"],\"imageMobile\":\"/images/projects/comprehensible-output-mobile.jpg\",\"imageDesktop\":\"/images/projects/comprehensible-output-desktop.jpg\",\"categories\":[{\"idCode\":\"premier\",\"shortInfo\":\"I use this site to learn languages, I read stories aloud that AI creates for me based on Google Translate phrases I look up.\"}]},{\"suuid\":\"Cg7rfw\",\"idCode\":\"moparser\",\"title\":\"Multimedia Outline Parser\",\"shortTitle\":\"Multimedia Outline Parser\",\"description\":\"The idea for this project is to make a class or hook (in TypeScript) that I can include in the front or back in of Datapod projects to parse markdown text plus outline mode, images, GIFs, and videos that are embedded in the outline structure. An example of this outline markdown being used is at my <a target=\\\"_blank\\\" href=\\\"https://tanguay-eu.vercel.app/howtos\\\">howto site</a> but it's very integrated in the project. The idea of this project would be to centralize this functionality as a class or hook which can be easily used in other projects, perhaps even make an npm package out of it that can be imported.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"none\",\"live\":\"\",\"defaultCategory\":\"incubator\",\"techItems\":[\"TypeScript\",\"Sass\"],\"imageMobile\":\"/images/projects/moparser-mobile.jpg\",\"imageDesktop\":\"/images/projects/moparser-desktop.jpg\",\"categories\":[{\"idCode\":\"incubator\",\"shortInfo\":\"This will be a class or hook (TypeScript) that I can include in the front or back in of Datapod projects to parse outline markdown text with images.\"}]},{\"suuid\":\"Q9tfi8\",\"idCode\":\"datapod-tanguay-eu\",\"title\":\"Datapod Central 2026\",\"shortTitle\":\"Datapod Central 2026\",\"description\":\"This is my Datapod framework project restarted in 2025 with ten backend languages and numerous frontend frameworks, for a deeper background see this presenation on <a target=\\\"_blank\\\" href=\\\"https://tanguay-eu.vercel.app/howtos/906\\\">the main characteristics of Datapod</a>. Ironically this site is not built with a Datapod framework but when I upgrade it in 2026, I plan to use the newest version of Angular (v21) as the frontend since many new features have been added to this framework in the last few years (stand-alone components, signals, etc.) that I want to try out. As the backend language I want to use something exotic like Elixir.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/datapod-tanguay-eu\",\"live\":\"https://datapod-tanguay-eu.vercel.app\",\"defaultCategory\":\"premier\",\"techItems\":[\"Angular 17\",\"TypeScript\"],\"imageMobile\":\"/images/projects/datapod-tanguay-eu-mobile.jpg\",\"imageDesktop\":\"/images/projects/datapod-tanguay-eu-desktop.jpg\",\"categories\":[{\"idCode\":\"premier\",\"shortInfo\":\"You can find 10-15 versions of the Datapod concept on this page, with numerous backend languages and frontend frameworks.\"}]},{\"suuid\":\"CGsGBX\",\"idCode\":\"langcore\",\"title\":\"Language Core 2024\",\"shortTitle\":\"Language Core 2024\",\"description\":\"I built this site to learn Spanish and Dutch, it's a useful site for learning verbs in these languages, it will even save your progress (local storage) for learning Dutch verbs, but I haven't developed it since 2024. I'll upgrade this into a central language site at some point.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/langcore\",\"live\":\"https://langcore.vercel.app\",\"defaultCategory\":\"transitional\",\"techItems\":[\"React\",\"TypeScript\",\"Tailwind\"],\"imageMobile\":\"/images/projects/langcore-mobile.jpg\",\"imageDesktop\":\"/images/projects/langcore-desktop.jpg\",\"categories\":[{\"idCode\":\"transitional\",\"shortInfo\":\"I used this site to learn Spanish in 2022 and Dutch in 2024, a useful site for learning verbs in these languages, but not currently being developed.\"}]},{\"suuid\":\"yrQpDz\",\"idCode\":\"interitalnotes\",\"title\":\"Interactive Italian Notes\",\"shortTitle\":\"Interactive Italian Notes\",\"description\":\"This is an old, parked site from when I started learning Italian in April 2025. It has an algorithm for parsing the verbs on my <a target=\\\"_blank\\\" href=\\\"https://tanguay.info/italian/texts/itnotes.html\\\">Italian notes file</a>, parsing them from text into a JSON file, so I will use this in the future when I create a create my Language Central site, probably based on <a target=\\\"_blank\\\" href=\\\"https://comprehensible-output.vercel.app\\\">Comprehensible Input</a> site. This Interactive notes site might also be technically interesting as an example of using easy-peasy Redux and Zod.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/interitalnotes\",\"live\":\"https://interitalnotes.vercel.app\",\"defaultCategory\":\"parked\",\"techItems\":[\"Python\",\"React\",\"TypeScript\",\"Easy-Peasy Redux\"],\"imageMobile\":\"/images/projects/interitalnotes-mobile.jpg\",\"imageDesktop\":\"/images/projects/interitalnotes-desktop.jpg\",\"categories\":[{\"idCode\":\"parked\",\"shortInfo\":\"A parked site that has the parsing algorithm of my main Italian notes file, so useful for that.\"},{\"idCode\":\"legacy\",\"shortInfo\":\"An old site that has the parsing algorithm of my main Italian notes file, so will keep it around until I upgrade my central language site.\"}]},{\"suuid\":\"AN3Ji2\",\"idCode\":\"datapod-for-vite-react-core\",\"title\":\"Datapod for TypeScript/React 2023\",\"shortTitle\":\"Datapod for React 2023\",\"description\":\"This was my recreation of Datapod in 2023, the Datapod script creation feature works and can be demonstrated, as well as the multi-format feature, so you can create an item type with data in a Datapod text file, parse and immediately have a JSON file. I still use this site to <a target=\\\"_blank\\\" href=\\\"https://tanguay-eu.vercel.app/howtos/906\\\">demonstrate Datapod functionality</a>. This might even be useful to set up if you just wanted to export JSON files based on Datapod text files. In fact, this site still creates the JSON file for my post-2023 <a target=\\\"_blank\\\" href=\\\"https://edward-tanguay-eu.vercel.app/runs\\\">running site</a>. I suspect this site's usefulness will be completely replaced by <a target=\\\"_blank\\\" href=\\\"https://datapod-tanguay-eu.vercel.app\\\">various Datapod versions in 2026</a>.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/datapod-for-vite-react-core\",\"live\":\"\",\"defaultCategory\":\"legacy\",\"techItems\":[\"Node\",\"TypeScript\",\"React\"],\"imageMobile\":\"/images/projects/datapod-for-vite-react-core-mobile.jpg\",\"imageDesktop\":\"/images/projects/datapod-for-vite-react-core-desktop.jpg\",\"categories\":[{\"idCode\":\"legacy\",\"shortInfo\":\"I stopped using this in 2025 but still use it to <a target=\\\"_blank\\\" href=\\\"https://tanguay-eu.vercel.app/howtos/906\\\">demonstrate Datapod concepts</a> and it still creates the JSON file for my post-2023 <a target=\\\"_blank\\\" href=\\\"https://edward-tanguay-eu.vercel.app/runs\\\">running site</a>.\"}]},{\"suuid\":\"q7D4XA\",\"idCode\":\"etnotes\",\"title\":\"Edward's Notes\",\"shortTitle\":\"Edward's Notes\",\"description\":\"I created this site in 2024 as a way to quickly publish texts that are written in my Datapod markup (markdown with outline format and embedded images/gifs). I use it as a way to plan trips easily so that I have all the information in one place on my phone. The data comes from my <a target=\\\"_blank\\\" href=\\\"/project/datapod-for-vite-react-core\\\">Datapod 2023</a> site currently, which is cumbersome so I need to upgrade this soon to a modern Datapod site.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/etnotes\",\"live\":\"https://etnotes.vercel.app\",\"defaultCategory\":\"legacy\",\"techItems\":[\"Next.js 13\",\"TypeScript\",\"Tailwind\"],\"imageMobile\":\"/images/projects/etnotes-mobile.jpg\",\"imageDesktop\":\"/images/projects/etnotes-desktop.jpg\",\"categories\":[{\"idCode\":\"legacy\",\"shortInfo\":\"This was a quick site I made to save notes in Datapod format, I still use it occasionally for e.g. trips I go on to have all info on my smart phone.\"}]},{\"suuid\":\"ODFxqK\",\"idCode\":\"edward-tanguay-eu\",\"title\":\"Edward's Personal Page\",\"shortTitle\":\"Edward's Personal Page\",\"description\":\"This is my personal site, originally in 2022 as a way to learn Vue 3, now mostly just a site with links for me, a fitness exercise GIF, and a place to record runs I do with photos, the data for the runs comes from <a target=\\\"_blank\\\" href=\\\"/project/datapod-for-vite-react-core\\\">Datapod 2023</a> currently, which is a bit cumbersome, but I plan to upgrade this personal site in 2026 with an easy-to-edit <a target=\\\"_blank\\\" href=\\\"https://datapod-tanguay-eu.vercel.app\\\">Datapod site</a>, perhaps with an experimental backend language like Rust, Ruby, Bash or Kotlin, and an exotic frontend framework like SvelteKit, in order to experiment around with these technologies with a low-visibility site, but one that I use often in order to make them more production-ready.\",\"status\":\"(fill in status)\",\"mode\":\"open\",\"repo\":\"https://github.com/edwardtanguay/edward-tanguay-eu\",\"live\":\"https://edward-tanguay-eu.vercel.app\",\"defaultCategory\":\"transitional\",\"techItems\":[\"Vue 3\",\"TypeScript\"],\"imageMobile\":\"/images/projects/edward-tanguay-eu-mobile.jpg\",\"imageDesktop\":\"/images/projects/edward-tanguay-eu-desktop.jpg\",\"categories\":[{\"idCode\":\"transitional\",\"shortInfo\":\"This is my personal site, mostly just links for me, a fitness exercise GIF, and a place to record runs I do with photos.\"}]}]"));}),
"[project]/src/components/ButtonLive.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ButtonLive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ButtonLive({ url }) {
    const isDisabled = url === 'none' || url === '';
    if (isDisabled) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 px-4 py-2 rounded-md border border-gray-600 bg-gray-600/10 text-gray-500 text-sm font-medium text-center cursor-not-allowed line-through",
            children: "Live"
        }, void 0, false, {
            fileName: "[project]/src/components/ButtonLive.tsx",
            lineNumber: 10,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex-1 px-4 py-2 rounded-md border border-green-400 bg-green-500/20 text-green-300 sm:border-green-500/50 sm:bg-green-500/10 sm:text-green-400 text-sm font-medium hover:bg-green-500/20 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 text-center",
        children: "Live"
    }, void 0, false, {
        fileName: "[project]/src/components/ButtonLive.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/components/ButtonRepo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ButtonRepo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ButtonRepo({ url }) {
    const isDisabled = url === 'none' || url === '';
    if (isDisabled) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 px-4 py-2 rounded-md border border-gray-600 bg-gray-600/10 text-gray-500 text-sm font-medium text-center cursor-not-allowed line-through",
            children: "Repo"
        }, void 0, false, {
            fileName: "[project]/src/components/ButtonRepo.tsx",
            lineNumber: 10,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex-1 px-4 py-2 rounded-md border border-blue-400 bg-blue-500/20 text-blue-300 sm:border-blue-500/50 sm:bg-blue-500/10 sm:text-blue-400 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300 text-center",
        children: "Repo"
    }, void 0, false, {
        fileName: "[project]/src/components/ButtonRepo.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/components/ButtonInfo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ButtonInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function ButtonInfo({ idCode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/project/${idCode}`,
        className: "flex-1 px-4 py-2 rounded-md border border-orange-400 bg-orange-500/20 text-orange-300 sm:border-orange-500/50 sm:bg-orange-500/10 sm:text-orange-400 text-sm font-medium hover:bg-orange-500/20 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-center",
        children: "Info"
    }, void 0, false, {
        fileName: "[project]/src/components/ButtonInfo.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/components/Project.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Project
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ButtonLive$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ButtonLive.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ButtonRepo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ButtonRepo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ButtonInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ButtonInfo.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function Project({ project, currentCategory }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900 border border-gray-400 sm:border-gray-800 rounded-lg flex flex-col sm:flex-row overflow-hidden w-full sm:w-[500px] min-h-60 sm:max-h-60",
        children: [
            project.imageMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "hidden sm:block w-32 h-full object-cover shrink-0",
                src: project.imageMobile,
                alt: project.shortTitle,
                width: 128,
                height: 240
            }, void 0, false, {
                fileName: "[project]/src/components/Project.tsx",
                lineNumber: 15,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 flex flex-col overflow-hidden flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-orange-300 mb-2 whitespace-nowrap",
                        children: project.shortTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project.tsx",
                        lineNumber: 17,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-400 mb-4 overflow-hidden whitespace-nowrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: project.techItems?.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-300/90 text-[10px] [font-variant:small-caps] bg-white/5 border border-black/40 px-1.5 py-0.5 rounded-sm shadow-sm",
                                    children: tech
                                }, index, false, {
                                    fileName: "[project]/src/components/Project.tsx",
                                    lineNumber: 23,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Project.tsx",
                            lineNumber: 21,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project.tsx",
                        lineNumber: 20,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm mb-3 sm:mb-4 sm:flex-1 markdown",
                        dangerouslySetInnerHTML: {
                            __html: project.categories.find((category)=>category.idCode === currentCategory)?.shortInfo || ""
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project.tsx",
                        lineNumber: 32,
                        columnNumber: 5
                    }, this),
                    project.imageDesktop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:hidden mb-4 overflow-hidden rounded-md border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)] group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: project.imageDesktop,
                            alt: `${project.shortTitle} - Desktop Preview`,
                            className: "w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity",
                            width: 600,
                            height: 300
                        }, void 0, false, {
                            fileName: "[project]/src/components/Project.tsx",
                            lineNumber: 41,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project.tsx",
                        lineNumber: 40,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ButtonInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                idCode: project.idCode
                            }, void 0, false, {
                                fileName: "[project]/src/components/Project.tsx",
                                lineNumber: 52,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ButtonRepo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                url: project.repo
                            }, void 0, false, {
                                fileName: "[project]/src/components/Project.tsx",
                                lineNumber: 53,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ButtonLive$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                url: project.live
                            }, void 0, false, {
                                fileName: "[project]/src/components/Project.tsx",
                                lineNumber: 54,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Project.tsx",
                        lineNumber: 51,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Project.tsx",
                lineNumber: 16,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Project.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react/no-unescaped-entities */ __turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$parseddata$2f$projects$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/parseddata/projects.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Project$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Project.tsx [app-rsc] (ecmascript)");
;
;
;
const _currentProjects = __TURBOPACK__imported__module__$5b$project$5d2f$parseddata$2f$projects$2e$json__$28$json$29$__["default"];
// reverse the order of the projects
const currentProjects = [
    ..._currentProjects
].reverse();
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 md:p-12 max-w-6xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "page-header",
                            children: "Edward's Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-white sm:text-gray-400 mb-6",
                            children: "This site keeps track of the status of all my website and software development projects."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 19,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:flex-wrap gap-6",
                    children: currentProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Project$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            project: project,
                            currentCategory: project.defaultCategory
                        }, project.suuid ?? project.idCode, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 27,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 14,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__41bf0135._.js.map