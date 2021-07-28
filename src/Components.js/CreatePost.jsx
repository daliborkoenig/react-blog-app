import React from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

// export const useDate = (): ReturnDate => {
//   const locale = 'en';
//   const today = new Date();

//   const day = today.toLocaleDateString(locale, { weekday: 'long' });
//   const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })},`;

//   const hour = today.getHours();

//   const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

//   return {
//     date,
//     time
//   };
// };

function CreatePost(props) {
  // const { date, time } = useDate();
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const history = useHistory();
  const onFormSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    formDataObj.date = date
    formDataObj.time = time
    props.getPost(formDataObj)
    e.target.reset();
    history.push("/view-posts");
  }

  return (
    <Form className="CreatePost" onSubmit={onFormSubmit}>
      <FloatingLabel controlId="floatingTextarea" label="Username:" className="mb-3" >
        <Form.Control required placeholder="Leave a comment here" name="username" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Title:" className="mb-3">
        <Form.Control required placeholder="Leave a comment here" name="title"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Summary:" className="mb-3">
        <Form.Control required as="textarea" placeholder="Leave a comment here" style={{ height: '100px'}} name="summary"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Content:">
        <Form.Control required as="textarea" placeholder="Leave a comment here" style={{ height: '200px'}} name="content"/>
      </FloatingLabel>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default CreatePost
