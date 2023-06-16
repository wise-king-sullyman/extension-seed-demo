module.exports = {
  '/extensions/demo-extension/design-guidelines': {
    id: "demo-extension",
    title: "demo-extension",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    subsection: "",
    source: "design-guidelines",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/demo-extension/design-guidelines/index" */ './extensions/demo-extension/design-guidelines')
  },
  '/extensions/demo-extension/react': {
    id: "demo-extension",
    title: "demo-extension",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    subsection: "",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/demo-extension/react/index" */ './extensions/demo-extension/react')
  }
};