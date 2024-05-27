const projectCardData = [
    {
        title: "Todo List",
        text: "A list where users can create projects and tasks with mark pending or incomplete status",
        ul: [
            "Implemented inbuilt user token management for authentication",
            "Frontend is built using React JS",
            "Bootstrap as CSS framework for better user experience",
            "Login and registration for individual users",
            "MongoDB database for storing users, projects, tasks and authentication tokens",
            "Mongoose as an ODM library to interact with the database",
            "Node JS as backend language to create APIs and interact with the database",
        ],
        href :"https://github.com/hritda/homeTask"
    },
    {
        title: "News Page",
        text: "A page where all the latest news are displayed to the user with categories.",
        ul: [
            "Categories include technology, sports, health, science and business",
            "Frontend is built using React JS",
            "Implemented Spinner for better user experience to show loading gif when it takes time to fetch records from the API",
            "Implemented Infinite Scroll feature to endlessly scroll the page for new records which enhances user experience",
        ],
        href:"https://github.com/hritda/newsapp"
    },
    {
        title: "Movies Mangager",
        text: "A simple web application where list of movies can be created, editted and searched by genres",
        ul: [
            "Created database in PostgreSQL",
            "Frontend is built using React JS",
            "Bootstrap as CSS framework for better user experience",
            "Login and registration for individual users",
            "Used cookie-based authentication where a secret token is passed to the user in headers for authorization",
            "The auth-token is valid only for one day, but for better user experience, a temporary token is given to user every 15 minutes",
            "Used Go language for backend development which provides robust inbuilt libraries for seamless web development",
            "Used GraphQL( a type of API) for retrieving the movies to search"
        ],
        href :"https://github.com/hritda/go-movies"
    }
];

export default projectCardData;