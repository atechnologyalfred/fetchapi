    import { v4 as uuidv4 } from 'uuid';
    const data = [
        
        {
            id: uuidv4(),
            name: 'King Sherif',
            gender: 'Male',
            tech: 'Software developer', 
            age: 30,
            technologies: ['Reactjs', 'Nextjs', 'Angular', 'python', 'mongoDb', 'Golang']
        },

        {
            id: uuidv4(),
            name: 'Moderator',
            gender: 'Male',
            tech: 'Software developer', 
            age: 30,
            technologies: ['Reactjs', 'Nextjs', 'python', 'mongoDb', 'etc']
        },
                {
            id: uuidv4(),
            name: 'Alfred',
            gender: 'Male',
            tech: 'Software developer', 
            age: 30,
            technologies: ['Reactjs', 'Nextjs', 'python', 'Nodejs', 'mongoDb']
        },

        {
            id: uuidv4(),
            name: 'Donata',
            gender: 'Female',
            tech: 'Frontend developer',
            age: 20, 
            technologies: ['html', 'custom css', 'tailwindcss', 'reactjs', 'git and github']
        },
        {
            id: uuidv4(),
            name: 'Charisma',
            gender: 'Female',
            tech: 'Forest trader',
            age: 23,
            technologies: ['meta forest', 'trading view']
        },
        {
            id: uuidv4(),
            name: 'Grace',
            gender: 'Female',
            tech: 'Data analyst',
            age: 27,
            technologies: ['Ms. Excel', 'Power BI', 'SQL', 'Ms. Access', 'Oracle']
        },
                {
            id: uuidv4(),
            name: 'Evangel',
            gender: 'Female',
            tech: 'Graphic designer, UI/UX designer & Frontend web developer',
            age: 24,
            technologies: ['html', 'custom css', 'tailwindcss', 'reactjs', 'git and github', 'canva', 'photoshop', 'corelDraw', 'inDesign', 'Adobe Illustrator' ]
        }
    ]


export const usage = `<div style="font-family: arial; color: #8e008e; text-transform: uppercase; padding: 2rem 6rem;">
    <h1>get Api written by alfreda.a (08137249872)</h1>
    <h5>Follow the following steps to use the api</h5>
    <ol style="display: flex; flex-direction: column; gap: 1rem;">
    <li>copy the link given below</li>
    <li>use fetch or axios to access the get request details</li>
    <li>use .json() to get the objects</li>
    </ol>
</div>`

    export default data;