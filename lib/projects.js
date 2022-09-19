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
        repo: "https://github.com/aebibtech/fcc-rqg"
    },
    {
        name: "Java Swing Simple Calculator",
        description: "A simple calculator developed using Java that demonstrates development in Swing with the MVC approach. Try it sometime.",
        image: "https://github.com/aebibtech/SimpleCalculator-SwingMVC/blob/main/swingmvc.png?raw=true",
        repo: "https://github.com/aebibtech/SimpleCalculator-SwingMVC"
    },
    {
        name: "Scroll Lock Toggle Utility",
        description: "A small utility for toggling scroll lock written in C for Windows. I made this app to enable the lights in my keyboard at system startup.",
        repo: "https://github.com/aebibtech/ScrollLockToggle-Windows"
    },
    {
        name: "Shell Folders Move Utility",
        description: "Moves Windows Shell Folders (e.g. Desktop, Documents, Downloads, etc) to another Path. Written in PowerShell. I developed this script because I mostly encounter laptops with a small SSD and a Hard Disk.",
        repo: "https://github.com/aebibtech/win-move-shell-folders"
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