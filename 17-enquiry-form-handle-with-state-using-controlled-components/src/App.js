import { Col, Container, Row, Table } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  let [formData, setFormData] = useState({
    uName: "",
    uEmail: "",
    uPhone: "",
    uMessage: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);

  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;

    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let currentUserFormData = {
      uName: formData.uName,
      uEmail: formData.uEmail,
      uPhone: formData.uPhone,
      uMessage: formData.uMessage,
    };

    if (formData.index === "") {
      let checkFilteredUserData = userData.filter((value, index) => {
        return (
          value.uEmail == formData.uEmail || value.uPhone == formData.uPhone
        );
      });

      if (checkFilteredUserData.length == 1) {
        toast.error("Email or Phone Already Exists.....", {
          theme: "dark",
        });
      } else {
        let oldUserData = [...userData, currentUserFormData];
        setUserData(oldUserData);
        setFormData({
          uName: "",
          uEmail: "",
          uPhone: "",
          uMessage: "",
          index: "",
        });
      }
    } else {
      let editIndex = formData.index;
      let oldData = userData;

      let checkFilteredUserData = userData.filter((value, index) => {
        return (
          (value.uEmail == formData.uEmail ||
            value.uPhone == formData.uPhone) &&
          index !== editIndex
        );
      });

      if (checkFilteredUserData.length == 0) {
        oldData[editIndex]["uName"] = formData.uName;
        oldData[editIndex]["uEmail"] = formData.uEmail;
        oldData[editIndex]["uPhone"] = formData.uPhone;
        oldData[editIndex]["uMessage"] = formData.uMessage;

        setUserData(oldData);
        setFormData({
          uName: "",
          uEmail: "",
          uPhone: "",
          uMessage: "",
          index: "",
        });
      } else {
        toast.error("Email or Phone Already Exists.....", {
          theme: "dark",
        });
      }
    }
  };

  let deleteRow = (indexNumber) => {
    let filteredRow = userData.filter((value, i) => i !== indexNumber);

    setUserData(filteredRow);
    toast.success("Successfully Deleted!", {
      theme: "dark",
    });
  };

  let editRow = (indexNumber) => {
    let filteredRowForEdit = userData.filter((value, i) => i == indexNumber)[0];

    filteredRowForEdit["index"] = indexNumber;

    setFormData(filteredRowForEdit);
  };

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <form onSubmit={handleSubmit}>
              <div className="pb-3">
                <label className="form-label">Name</label>
                <input
                  value={formData.uName}
                  type="text"
                  name="uName"
                  className="form-control"
                  onChange={getValue}
                />
              </div>
              <div className="pb-3">
                <label className="form-label">Email</label>
                <input
                  value={formData.uEmail}
                  type="email"
                  name="uEmail"
                  className="form-control"
                  onChange={getValue}
                />
              </div>
              <div className="pb-3">
                <label className="form-label">Phone</label>
                <input
                  value={formData.uPhone}
                  type="number"
                  name="uPhone"
                  className="form-control"
                  onChange={getValue}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  value={formData.uMessage}
                  className="form-control"
                  name="uMessage"
                  id=""
                  rows="3"
                  onChange={getValue}
                />
              </div>

              <button className="btn btn-success">
                {formData.index !== "" ? "Update" : "Save"}
              </button>
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? (
                  userData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.uName}</td>
                        <td>{data.uEmail}</td>
                        <td>{data.uPhone}</td>
                        <td>{data.uMessage}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteRow(index)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-info"
                            onClick={() => editRow(index)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6}>No Data Found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Container>
  );
}

export default App;
