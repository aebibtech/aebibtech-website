const projects = [
    {
        name: "Box.com Downloader GUI",
        description: "This application can scrape and download protected docx, pdf files in box.com and save it as an editable PDF file.",
        image: "https://github.com/aebibtech/box-dl-gui/raw/master/screenshot.png?raw=true",
        repo: "https://github.com/aebibtech/box-dl-gui"
    },
    {
        name: "Random Quote Generator",
        description: "This is a random quote generator built with Vite + React. This is my attempt to complete freeCodeCamp's random quote generator project.",
        image: "https://github.com/aebibtech/fcc-rqg/raw/main/screenshot-rqg.png?raw=true",
        repo: "https://rqg.aebibtech.com"
    },
    {
        name: "Arabic to Roman Numeral Converter",
        description: "This is an app that converts Arabic numbers to Roman numerals. This app utilizes React and Next.js. Click to try now.",
        image: "https://github.com/aebibtech/next-romconv/blob/main/romconv.png?raw=true",
        repo: "https://arab2roman.aebibtech.com"
    },
    {
        name: "Java Swing Simple Calculator",
        description: "A simple calculator developed using Java that demonstrates development in Swing with the MVC approach. Try it sometime.",
        image: "https://github.com/aebibtech/SimpleCalculator-SwingMVC/blob/main/swingmvc.png?raw=true",
        repo: "https://github.com/aebibtech/SimpleCalculator-SwingMVC"
    },
    {
        name: "Scroll Lock Toggle Utility",
        description: "A small utility for toggling scroll lock written in C for Windows. I made this app to enable the lights in my keyboard at system startup. Click to access the source code and downloads.",
        repo: "https://github.com/aebibtech/ScrollLockToggle-Windows"
    },
    {
        name: "Windows Move to SSD Utility",
        description: "Transfers an existing Windows installation to an empty SSD. This is useful for people who are adding a Solid State Disk with an existing HDD. These scripts utilize DISM and bcdboot.",
        repo: "https://github.com/aebibtech/win-transfer-to-ssd"
    }
];

export default function getProjectsData() {
    return projects;
}