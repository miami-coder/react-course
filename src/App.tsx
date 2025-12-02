import './App.css'

const coursesTitleArray: string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

const App = () => {

  return (
    <>
        <ul>
            {
                coursesTitleArray.map((course, i) => <li key={i}>{course}</li>)
            }
        </ul>
    </>
  )
}



export default App
