// import React, { useState } from "react";
// import {
//   Button,
//   Form,
//   Input,
//   Radio,
//   DatePicker,
//   Select,
//   message,
//   Upload,
//   Table
// } from "antd";
// import Cryokinesis_logo from "../Images/Cryokinesis_logo.png";
// import moment from "moment";
// import { UploadOutlined } from "@ant-design/icons";

// export default function Signup() {
//   const [form] = Form.useForm(); // useForm hook if you plan to handle form operations programmatically
//   const [formData, setFormData] = useState(null); // State to store submitted data
//   const [fileList, setFileList] = useState([]); // State to manage uploaded file

//   // Handle form submission
//   const onFinish = (values) => {
//     const data = { ...values, profilePhoto: fileList };
//     setFormData(data); // Store form data with profile photo
//     console.log("Submitted Form Data:", data);

//     message.success("Registration successful!");
//     form.resetFields();
//     setFileList([]); // Reset file list
//   };

//   // File upload handler
//   const handleUploadChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   // File validation
//   const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//     if (!isJpgOrPng) {
//       message.error("You can only upload JPG/PNG files!");
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error("Image must be smaller than 2MB!");
//     }
//     return isJpgOrPng && isLt2M;
//   };

//   const columns = [
//     {
//       title: "First Name",
//       dataIndex: "firstName",
//       key: "firstName",
//     },
//     {
//       title: "Last Name",
//       dataIndex: "lastName",
//       key: "lastName",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "Date of Birth",
//       dataIndex: "dob",
//       key: "dob",
//       render: (dob) => moment(dob).format("YYYY-MM-DD"), // Format the date
//     },
//     {
//       title: "Marital Status",
//       dataIndex: "maritalStatus",
//       key: "maritalStatus",
//     },
//     {
//       title: "Profile Photo",
//       dataIndex: "profilePhoto",
//       key: "profilePhoto",
//       render: (photo) => <img src={photo[0]?.thumbUrl} alt="Profile" width={50} />, // Show profile photo as thumbnail
//     },
//   ];

//   return (
//     <div className="container-fluid m-0 p-0">
//       <div className="container-fluid bg-primary">
//         <div className="row">
//           <div className="col-12 p-2">
//             <span>
//               <img
//                 src={Cryokinesis_logo}
//                 alt="Cryokinesis_logo"
//                 className="img-fluid bg-white border rounded-2 p-2"
//                 style={{ width: "5%" }}
//               />
//               <span className="mt-3">
//                 <span className="fs-2 text-white ms-3">
//                   Employee Registration Portal
//                 </span>
//               </span>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="container border border-3 border-light rounded-3 mt-5">
//         <div className="row mt-1">
//           <div className="col-12 ">
//             {/* Ant Design Form Component */}
//             <Form form={form} layout="vertical" onFinish={onFinish}>
//               {/* Row for the first column */}
//               <div className="row">
//                 <div className="col-6">
//                   {/* First Name Field */}

//                   <Form.Item
//                     label="First Name"
//                     name="firstName"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your first name!",
//                       },
//                     ]} // Validation rule
//                   >
//                     <Input placeholder="Enter your first name" />
//                   </Form.Item>

//                   <Form.Item
//                     label="Last Name"
//                     name="lastName"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your last name!",
//                       },
//                     ]}
//                   >
//                     <Input placeholder="Enter your last name" />
//                   </Form.Item>

//                   <Form.Item
//                     label="Gender"
//                     name="gender"
//                     rules={[
//                       { required: true, message: "Please select your gender!" },
//                     ]}
//                   >
//                     <Radio.Group>
//                       <Radio value="male">Male</Radio>
//                       <Radio value="female">Female</Radio>
//                       <Radio value="other">Other</Radio>
//                     </Radio.Group>
//                   </Form.Item>

//                   {/* Gender Radio Buttons */}
//                   <div className="row">
//                     <div className="col-6">
//                       {/* Date of Birth */}
//                       <Form.Item
//                         label="Date of Birth"
//                         name="dob"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please select your date of birth!",
//                           },
//                         ]}
//                       >
//                         <DatePicker
//                           format="YYYY-MM-DD"
//                           disabledDate={(current) =>
//                             current && current > moment().endOf("day")
//                           }
//                           style={{ width: "100%", fontSize: "16px" }} // Adjust width, height, and font size
//                         />
//                       </Form.Item>
//                     </div>
//                     <div className="col-6">
//                       <Form.Item
//                         label="Marital Status"
//                         name="maritalStatus"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please select your marital status!",
//                           },
//                         ]}
//                       >
//                         <Select placeholder="Select marital status">
//                           <Select.Option value="married">Married</Select.Option>
//                           <Select.Option value="unmarried">
//                             Unmarried
//                           </Select.Option>
//                         </Select>
//                       </Form.Item>
//                     </div>
//                   </div>

//                   <Form.Item
//                     label="Email"
//                     name="email"
//                     rules={[
//                       { required: true, message: "Please input your email!" },
//                       { type: "email", message: "Please input a valid email!" },
//                     ]}
//                   >
//                     <Input placeholder="Enter your email" />
//                   </Form.Item>

//                   <Form.Item
//                     label="Phone"
//                     name="phone"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your phone number!",
//                       },
//                       {
//                         pattern: /^[0-9]{10}$/,
//                         message: "Please input a valid phone number!",
//                       },
//                     ]}
//                   >
//                     <Input placeholder="Enter your phone number" />
//                   </Form.Item>
//                 </div>

//                 {/* Row for the second column */}
//                 <div className="col-6">
//                   {/* Phone */}

//                   <div className="row">
//                     <div className="col-6">
//                       <Form.Item
//                         label="Address Line 1"
//                         name="addressLine1"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please input address line 1!",
//                           },
//                         ]}
//                       >
//                         <Input placeholder="Enter address line 1" />
//                       </Form.Item>
//                     </div>
//                     <div className="col-6">
//                       <Form.Item label="Address Line 2" name="addressLine2">
//                         <Input placeholder="Enter address line 2" />
//                       </Form.Item>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-6">
//                       <Form.Item
//                         label="City"
//                         name="city"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please input your city!",
//                           },
//                         ]}
//                       >
//                         <Input placeholder="Enter your city" />
//                       </Form.Item>
//                     </div>

//                     <div className="col-6">
//                       {/* State */}
//                       <Form.Item
//                         label="State"
//                         name="state"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please input your state!",
//                           },
//                         ]}
//                       >
//                         <Input placeholder="Enter your state" />
//                       </Form.Item>
//                     </div>
//                   </div>
//                   {/* Pin Code */}
//                   <Form.Item
//                     label="Pin Code"
//                     name="pinCode"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your pin code!",
//                       },
//                       {
//                         pattern: /^[0-9]{6}$/,
//                         message: "Please input a valid pin code!",
//                       },
//                     ]}
//                   >
//                     <Input placeholder="Enter your pin code" />
//                   </Form.Item>
//                   <Form.Item
//                     label="Password"
//                     name="password"
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please input your password!",
//                       },
//                       {
//                         pattern:
//                           /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
//                         message:
//                           "Password must be at least 8 characters long, include letters, numbers, and special characters!",
//                       },
//                     ]}
//                     hasFeedback // Provides visual feedback
//                   >
//                     <Input.Password placeholder="Enter password" />
//                   </Form.Item>

//                   <Form.Item
//                     label="Confirm Password"
//                     name="confirmPassword"
//                     dependencies={["password"]} // Ensure it depends on the "password" field
//                     hasFeedback
//                     rules={[
//                       {
//                         required: true,
//                         message: "Please confirm your password!",
//                       },
//                       ({ getFieldValue }) => ({
//                         validator(_, value) {
//                           if (!value || getFieldValue("password") === value) {
//                             return Promise.resolve();
//                           }
//                           return Promise.reject(
//                             new Error(
//                               "The two passwords that you entered do not match!"
//                             )
//                           );
//                         },
//                       }),
//                     ]}
//                   >
//                     <Input.Password placeholder="Enter confirm password" />
//                   </Form.Item>
//                   <Form.Item
//                     label="Profile Photo"
//                     name="profilePhoto"
//                     rules={[
//                       {
//                         required: true,
//                         validator: (_, value) => {
//                           if (fileList.length === 0) {
//                             return Promise.reject(
//                               new Error("Please upload your profile photo!")
//                             );
//                           }
//                           return Promise.resolve();
//                         },
//                       },
//                     ]}
//                   >
//                     <Upload
//                       beforeUpload={beforeUpload}
//                       onChange={handleUploadChange}
//                       fileList={fileList}
//                       maxCount={1}
//                       listType="picture"
//                     >
//                       <Button icon={<UploadOutlined />}>
//                         Upload Profile Photo
//                       </Button>
//                     </Upload>
//                   </Form.Item>
//                 </div>
//               </div>{" "}
//               {/* End of row */}
//               <div className="row">
//                 <div className="col-12 text-center ">
//                   <Form.Item>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       block
//                       className="w-25 mt-4 fs-5 fw-thin"
//                     >
//                       Register
//                     </Button>
//                   </Form.Item>
//                 </div>
//               </div>
//             </Form>
//             {formData && (
//         <div className="mt-5">
//           <h3>Submitted Data</h3>
//           <Table
//             columns={columns}
//             dataSource={[formData]} // Pass the form data as the table data
//             pagination={false} // Disable pagination if you want to display all data
//             rowKey="email" // Unique key for each row (use email or any other unique field)
//           />
//         </div>
//       )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Radio,
  DatePicker,
  Select,
  message,
  Upload,
  
} from "antd";
import Cryokinesis_logo from "../Images/Cryokinesis_logo.png";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";

export default function Signup() {
  const [form] = Form.useForm(); // useForm hook if you plan to handle form operations programmatically
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [fileList, setFileList] = useState([]); // State to manage uploaded file

  // Handle form submission
  const onFinish = (values) => {
    const data = { ...values, profilePhoto: fileList };
    setFormData(data); // Store form data with profile photo
    console.log("Submitted Form Data:", data);

    message.success("Registration successful!");
    form.resetFields();
    setFileList([]); // Reset file list
  };

  // File upload handler
  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // File validation
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG files!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  

  return (
    <div className="container-fluid m-0 p-0">
      <div className="container-fluid bg-primary">
        <div className="row">
          <div className="col-12 p-2">
            <span>
              <img
                src={Cryokinesis_logo}
                alt="Cryokinesis_logo"
                className="img-fluid bg-white border rounded-2 p-2"
                style={{ width: "5%" }}
              />
              <span className="mt-3">
                <span className="fs-2 text-white ms-3">
                  Employee Registration Portal
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="container border border-3 border-light rounded-3 mt-5">
        <div className="row mt-1">
          <div className="col-12 ">
            {/* Ant Design Form Component */}
            <Form form={form} layout="vertical" onFinish={onFinish}>
              {/* Row for the first column */}
              <div className="row">
                <div className="col-6">
                  {/* First Name Field */}

                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]} // Validation rule
                  >
                    <Input placeholder="Enter your first name" />
                  </Form.Item>

                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your last name" />
                  </Form.Item>

                  <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                      { required: true, message: "Please select your gender!" },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value="male">Male</Radio>
                      <Radio value="female">Female</Radio>
                      <Radio value="other">Other</Radio>
                    </Radio.Group>
                  </Form.Item>

                  {/* Gender Radio Buttons */}
                  <div className="row">
                    <div className="col-6">
                      {/* Date of Birth */}
                      <Form.Item
                        label="Date of Birth"
                        name="dob"
                        rules={[
                          {
                            required: true,
                            message: "Please select your date of birth!",
                          },
                        ]}
                      >
                        <DatePicker
                          format="YYYY-MM-DD"
                          disabledDate={(current) =>
                            current && current > moment().endOf("day")
                          }
                          style={{ width: "100%", fontSize: "16px" }} // Adjust width, height, and font size
                        />
                      </Form.Item>
                    </div>
                    <div className="col-6">
                      <Form.Item
                        label="Marital Status"
                        name="maritalStatus"
                        rules={[
                          {
                            required: true,
                            message: "Please select your marital status!",
                          },
                        ]}
                      >
                        <Select placeholder="Select marital status">
                          <Select.Option value="married">Married</Select.Option>
                          <Select.Option value="unmarried">
                            Unmarried
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>

                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      { type: "email", message: "Please input a valid email!" },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                      {
                        pattern: /^[0-9]{10}$/,
                        message: "Please input a valid phone number!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your phone number" />
                  </Form.Item>
                </div>

                {/* Row for the second column */}
                <div className="col-6">
                  {/* Phone */}

                  <div className="row">
                    <div className="col-6">
                      <Form.Item
                        label="Address Line 1"
                        name="addressLine1"
                        rules={[
                          {
                            required: true,
                            message: "Please input address line 1!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter address line 1" />
                      </Form.Item>
                    </div>
                    <div className="col-6">
                      <Form.Item label="Address Line 2" name="addressLine2">
                        <Input placeholder="Enter address line 2" />
                      </Form.Item>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <Form.Item
                        label="City"
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: "Please input your city!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter your city" />
                      </Form.Item>
                    </div>

                    <div className="col-6">
                      {/* State */}
                      <Form.Item
                        label="State"
                        name="state"
                        rules={[
                          {
                            required: true,
                            message: "Please input your state!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter your state" />
                      </Form.Item>
                    </div>
                  </div>
                  {/* Pin Code */}
                  <Form.Item
                    label="Pin Code"
                    name="pinCode"
                    rules={[
                      {
                        required: true,
                        message: "Please input your pin code!",
                      },
                      {
                        pattern: /^[0-9]{6}$/,
                        message: "Please input a valid pin code!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your pin code" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        pattern:
                          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                        message:
                          "Password must be at least 8 characters long, include letters, numbers, and special characters!",
                      },
                    ]}
                    hasFeedback // Provides visual feedback
                  >
                    <Input.Password placeholder="Enter password" />
                  </Form.Item>

                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]} // Ensure it depends on the "password" field
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password placeholder="Enter confirm password" />
                  </Form.Item>
                  <Form.Item
                    label="Profile Photo"
                    name="profilePhoto"
                    rules={[
                      {
                        required: true,
                        validator: (_, value) => {
                          if (fileList.length === 0) {
                            return Promise.reject(
                              new Error("Please upload your profile photo!")
                            );
                          }
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Upload
                      beforeUpload={beforeUpload}
                      onChange={handleUploadChange}
                      fileList={fileList}
                      maxCount={1}
                      listType="picture"
                    >
                      <Button icon={<UploadOutlined />}>
                        Upload Profile Photo
                      </Button>
                    </Upload>
                  </Form.Item>
                </div>
              </div>{" "}
              {/* End of row */}
              <div className="row">
                <div className="col-12 text-center ">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      className="w-25 mt-4 fs-5 fw-thin"
                    >
                      Register
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
    
          </div>
        </div>
      </div>
    </div>
  );
}

