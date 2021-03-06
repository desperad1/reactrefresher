import React,{useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
const App = () => {
  const [courseGoals,setCourseGoals]=useState([
    {id:'cg1',text:'Finish the course'},
    {id:'cg2',text:'Learn about the course main topic'},
    {id:'cg3',text:'Help other students in the course'},
]);
  
const onAddGoalHandler =(goal)=>{
  console.log(courseGoals);
  setCourseGoals(prevCourseGoals=>prevCourseGoals.concat(goal));
}
  return <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={onAddGoalHandler}/>
    <GoalList goals={courseGoals}/>
  </div>
  ;
};

export default App;
