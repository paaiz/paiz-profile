import { SiNodedotjs, SiJavascript, SiSqlite, SiMongodb } from "@icons-pack/react-simple-icons";

const projects = [
  {
    projectName: "Growzone Bot",
    projectDescription:
      "A private discord bot that manage premium subscription of a Growzone members.",
    projectImage: "/assets/images/GenshinZone.png",
    tech: [
      {
        name: SiJavascript,
      },
      {
        name: SiNodedotjs,
      },
      {
        name: SiSqlite,
      },
    ],
  },
  {
    projectName: "VAL-13T",
    projectDescription:
      "A Discord bot that allows you to check your current Valorant store on Discord!",
    projectImage: "/assets/images/VAL-13T.png",
    tech: [
      {
        name: SiJavascript,
      },
      {
        name: SiNodedotjs,
      },
      {
        name: SiMongodb,
      },
    ],
  },
];

export default projects;
