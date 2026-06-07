import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const courses = [
  {
    courseName: "Introduction to Computer Science",
    teacher: "John Doe",
    description: "An introductory course on computer science fundamentals.",
    imageUrl:
      "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    objectID: 1,
  },
  {
    courseName: "Advanced Mathematics",
    teacher: "Jane Smith",
    description: "Explore complex mathematical theories and applications.",
    imageUrl:
      "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    objectID: 2,
  },
  {
    courseName: "World History",
    teacher: "Alice Johnson",
    description:
      "A comprehensive look at world history from the ancient times to the modern era.",
    imageUrl:
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    objectID: 3,
  }, // ... more courses
];

const Container = () => {
  return (
    <div>
      <h1>Explore our Courses</h1>
      {courses.map((course) => {
        return (
          <div key={course.objectID}>
            <Card>
              <Card.Img src={course.imageUrl} />
              <Card.Body>
                <Card.Title>{course.courseName}</Card.Title>
                <Card.Subtitle>{course.teacher}</Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>
                <Button>see more</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Container;
