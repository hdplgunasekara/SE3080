import React from "react";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import SearchModal from "../../modals/user/SearchModal";

const Search = (props) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(false);
  const handleClose = () => setShow(false);

  function searchId(e) {
    if (e.keyCode == 13) {
      setShow(true);
    }
  }
  return (
    <div>
      <div class="row">
        <div class="col-sm-10"></div>
        <div class="col-sm-5"></div>
        <MDBCol md="4">
          <MDBIcon icon="search" />
          <input
            className="form-control form-control-sm ml-3 w-75 float-right"
            type="text"
            placeholder="Search Users"
            aria-label="Search"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            onKeyDown={(e) => searchId(e)}
          />
        </MDBCol>
      </div>
      <Modal show={show} size="lg" centered>
        <SearchModal user={user} />

      </Modal>
    </div>
  );
};

export default Search;
