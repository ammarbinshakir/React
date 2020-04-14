// import React,{useState} from 'react';
// import {Form,Col ,Button,ButtonGroup,} from 'react-bootstrap'
// import './UserForm.css'
// // import {useForm} from 'react-hook-form'
//
//
// const UserForm = (props) => {
//     // const {register,handleSubmit,errors, setValue}=useForm({ defaultValues: {
//     //         firstName: "",
//     //         lastName: "",
//     //         email: "",
//     //         phone:"",
//     //         address:"",
//     //         photo:""
//     //     }})
//     // const onSubmit = (data, e) => {
//     //     console.log('Submit event', data)
//     //     alert(JSON.stringify(data))
//     // };
//
//     // const onChange=(data)=>{
//     // let
//     // }
//     // // let fileReader= new FileReader()
//     // //     fileReader.readAsDataURL(photo)
//     // const onChange=(e)=> {
//     //     let
//     //     setValue({photo: e.target.)
//     //     let fileReader= new FileReader()
//     //     fileReader.readAsDataURL(files[0])
//     // }
//
//
//     return (
//         <>
//             <br/>
//             <div className='h3'>
//                 <h3 >Please Enter User Information</h3>
//             </div>
//             <Form className='user-form' >
//
//                 <Form.Row >
//                     <Col>
//                         <Form.Control type="text" placeholder="First name" name="firstname"
//                             // value={form.firstname}
//                             // onChange={e=>setForm( {...form , firstname: e.target.value})}
//                             //           ref={register({required: 'Required',
//                             //               minLength:5, maxLength:10, pattern: {value: /^[A-Za-z]+$/i,
//                             //                   message: "invalid name"}
//                             //           })}/>
//                     </Col>
//                     {errors.firstname && errors.firstname.message}
//                     <Col>
//                         <Form.Control type="text" placeholder="Last name" name="lastname"
//                             // value={form.lastname}
//                             // onChange={e=>setForm( {...form ,lastname: e.target.value})}
//                             //           ref={register({required: 'Required',
//                             //               minLength:5, maxLength:10, pattern: {value: /^[A-Za-z]+$/i,
//                             //                   message: "invalid name"}
// //                                      })}/>
//                     </Col>
//                     {errors.lastname && errors.lastname.message}
//                 </Form.Row>
//                 <br/>
//                 <Form.Row   >
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Control type="email" placeholder="Email: abc@mail.com" name="email"
//                             // value={form.email}
//                             // onChange={e=>setForm( {...form ,email: e.target.value})}
//                             //           ref={register({
//                             //               required: 'Required',
//                             //               pattern: {
//                             //                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                             //                   message: "invalid email address"
//                             //               }
//                             //           })}/>
//                     </Form.Group>
//                     {errors.email && errors.email.message}
//                 </Form.Row>
//                 <Form.Row  >
//                     <Form.Group as={Col} controlId="formGridPhone">
//                         <Form.Control type="phone" placeholder="Phone: 03001234567" name="phone"
//                             // value={form.phone}
//                             // onChange={e=>setForm( {...form ,phone: e.target.value})}
//                             //           ref={register({
//                             //               required: 'Required', pattern:{
//                             //                   value: /03[0-9]{2}[0-9]{7}/gm
//                             //                   // + /[+]923[0-9]{2}[0-9]{7}/gm
//                             //                   // +  /00923[0-9]{2}[0-9]{7}/gm
//                             //               }})}/>
//                     </Form.Group>
//                     {errors.phone && errors.phone.message}
//                 </Form.Row>
//                 <Form.Row  >
//                     <Form.Group as={Col} controlId="formGridAddress">
//                         <Form.Control placeholder="Address: 1234 Main St" name="address"
//                             // value={form.address}
//                             // onChange={e=>setForm( {...form ,address: e.target.value})}
//                             //           ref={register({required: 'Required', minLength:5, maxLength:100,})}/>
//                     </Form.Group>
//                 </Form.Row>
//                 <Form.Row>
//                     <Form.Group as={Col} controlId="formGridAvatar">
//                         <Form.File
//                             type="file"
//                             id="custom-file"
//                             label="Choose avatar"
//                             name="photo"
//                             custom
//                             // onChange={handleChange(onChange)}
//                             // ref={register({
//                             //     required: 'Required'})}
//                         />
//                     </Form.Group>
//                 </Form.Row>
//                 <br/>
//                 <ButtonGroup><Button variant="primary" type="submit"  value="submit">Submit form</Button></ButtonGroup>
//             </Form>
//         </>
//     );
// };
//
// export default UserForm;