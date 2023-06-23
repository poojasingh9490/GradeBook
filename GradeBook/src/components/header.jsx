import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const today = new Date().toLocaleDateString();
  const professorName = 'Sandeep Kaur';
  const college = 'Lovely Professional Unversity';
  const department = 'Computer Science';
  const semester = 'Final Semester';

  return (
    <header>
      <div className="header-left">
      <FontAwesomeIcon icon="fa-solid fa-book-open" beat size="2xl" style={{color: "#511f2e",}} />
      <h1>GradeBook App</h1>
      <p style={{fontSize:'15px'}}>Grading digital book for exam</p>
      </div>
      <div className="header-right">
        <p><FontAwesomeIcon icon="fa-solid fa-calendar-days" size="xl" />  Today's Date: {today}</p>
        <p><FontAwesomeIcon icon="fa-solid fa-user-tie" size="xl" /> Professor: {professorName}</p>
        <p><FontAwesomeIcon icon="fa-solid fa-building-columns" size="xl" /> College: {college}</p>
        <p><FontAwesomeIcon icon="fa-solid fa-building-user" size="xl" /> Department: {department}</p>
        <p><FontAwesomeIcon icon="fa-solid fa-star" size="xl" /> Semester: {semester}</p>
      </div>
    </header>
  );
}

export default Header;

