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
        description: "This contains a sample app (Simple Calculator) that is developed using Swing MVC approach.",
        image: "https://github.com/aebibtech/SimpleCalculator-SwingMVC/blob/main/swingmvc.png?raw=true",
        repo: "https://github.com/aebibtech/SimpleCalculator-SwingMVC"
    }
];

export default function getProjectsData() {
    return projects;
}