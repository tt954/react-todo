technologies:
- data: https://jsonplaceholder.typicode.com/
- frontend library: [react](https://reactjs.org/)
- state management: [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- css/ui framework: [tailwind css](https://tailwindcss.com/)

features: 
- add/detele a to do
- toggle todo completion
- change todo's color property after creation
- mark all as completed 
- clear (delete) all completed 
- filter by status (all, active, and completed)
- filter by color (green, blue, orange, purple, red)

state sample: 
```
{ 
    todos: {
        entities: {
           1: {
                id: 1,
                userId: 1,
                title: "delectus aut autem",
                completed: false,
                color: "orange",
           },
           ...
        },
        ids: [1,...]
        status: "idle",
    },
    filters: {
        colors: [],
        status: "all",
    }
}
```
