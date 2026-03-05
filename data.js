    const data = [
        
        {
            id: 1,
            name: 'Alfred',
            gender: 'Male',
            tech: 'Software developer', 
            age: 30,
            movement: [4000, 3000, 7000, 4900]
        },
        {
            id: 2,
            name: 'Donata',
            gender: 'Female',
            tech: 'Frontend developer',
            age: 40, 
            movement: [500, 600, 3400, -500]
        },
        {
            id: 3,
            name: 'Charisma',
            gender: 'Female',
            tech: 'Forest trader',
            age: 50,
            movement: [40, 900, 600, 500]
        },
        {
            id:4,
            name: 'Grace strongPack',
            gender: 'Female',
            tech: 'Data analyst',
            movement: [400, 700, 3450, 45.56]
        }
    ]


export const usage = `<div style="font-family: arial; color: #8e008e; text-transform: uppercase; padding: 2rem 6rem;">
    <h1>Follow the following steps to use the api</h1>
    <ol style="display: flex; flex-direction: column; gap: 1rem;">
    <li>copy the link given below</li>
    <li>use fetch or axios to access the get request details</li>
    <li>use .json() to get the objects</li>
    </ol>
</div>`

    export default data;