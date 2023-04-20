import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserDetail, userPostAdd, userPostEdit } from "../store/actions/actionCreator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormAddEdit = () => {
  const { isLoading, userDetail, errorMsg: error } = useSelector((state) => state.user);
  const [isToggled, setIsToggled] = useState("personalData");

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [formUser, setFormUser] = useState({ firstName: "", lastName: "", maidenName: "", age: "", gender: "", email: "", phone: "", username: "", password: "", birthDate: "", image: "", university: "", ein: "", ssn: "", address: {}, bank: {}, company: {} });

  useEffect(() => {
    if (params.id) {
      // fetchDetailHandler(params.id);
    }
  }, []);

  useEffect(() => {
    setFormUser({
      firstName: userDetail?.firstName || "",
      lastName: userDetail?.lastName || "",
      maidenName: userDetail?.maidenName || "",
      age: userDetail?.age || "",
      gender: userDetail?.gender || "",
      email: userDetail?.email || "",
      phone: userDetail?.phone || "",
      username: userDetail?.username || "",
      password: userDetail?.password || "",
      birthDate: userDetail?.birthDate || "",
      image: userDetail?.image || "",
      university: userDetail?.university || "",
      ein: userDetail?.ein || "",
      ssn: userDetail?.ssn || "",
      address: userDetail?.address?.address || "",
      addressPostalCode: userDetail?.address?.postalCode || "",
      addressCity: userDetail?.address?.city || "",
      companyName: userDetail?.company?.name || "",
      companyTitle: userDetail?.company?.title || "",
      companyDepartment: userDetail?.company?.department || "",
      companyAddress: userDetail?.company?.address?.address || "",
      companyAddressPostalCode: userDetail?.company?.address?.postalCode || "",
      companyAddressCity: userDetail?.company?.address?.city || "",
      companyAddressState: userDetail?.company?.address?.state || "",
      cardNumber: userDetail?.bank?.cardNumber || "",
      iban: userDetail?.bank?.iban || "",
      cardType: userDetail?.bank?.cardType || "",
      currency: userDetail?.bank?.currency || "",
      cardExpire: userDetail?.bank?.cardExpire || "",
    });
  }, [userDetail]);

  const fetchDetailHandler = async (params) => {
    try {
      // console.log(params, "MMMMMMMMMMMMM")

      await dispatch(fetchUserDetail(params));
    } catch (err) {
      console.log(err);
    }
  };

  // Post Data
  const addeditUserHandler = async (dataToPost) => {
    try {
      if (params.id) {
        await dispatch(userPostEdit(dataToPost, params));
        toast.success("Edit user successfull", toastOptions);
        navigate(`/detail/${params.id}`);
      } else {
        await dispatch(userPostAdd(dataToPost));
        toast.success("Add new user successfull", toastOptions);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formAddEditOnChangeHandler = (event) => {
    const newObj = {
      ...formUser,
    };

    newObj[event.target.name] = event.target.value;

    setFormUser(newObj);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const dataToPost = {
      ...formUser,
    };
    // console.log(dataToPost, "////////////////////");
    // console.log(allValuesNotEmpty)
    if (handleValidation) {
      addeditUserHandler(dataToPost);
    }

    // navigate("/");
  };

  const handleValidation = Object.values(formUser).every((val) => val);

  const handleToggle = (section) => {
    setIsToggled(section);
  };
  return (
    <>
      <div class="card-header mb-3">
        <ul class="nav nav-tabs card-header-tabs fw-semibold">
          <li class="nav-item">
            <a className={`nav-link ${isToggled === "personalData" ? "active text-primary" : "text-black"}`} onClick={() => handleToggle("personalData")} href="#">
              Personal Data
            </a>
          </li>
          <li class="nav-item">
            <a className={`nav-link ${isToggled === "userCompany" ? "active text-primary" : "text-black"}`} onClick={() => handleToggle("userCompany")} href="#">
              User Company
            </a>
          </li>
          <li class="nav-item">
            <a className={`nav-link ${isToggled === "userBankData" ? "active text-primary" : "text-black"}`} onClick={() => handleToggle("userBankData")} href="#">
              User Bank Data
            </a>
          </li>
        </ul>
      </div>

      <form onSubmit={submitHandler}>
        {isToggled === "personalData" && (
          <div id="personalData" className="fw-medium">
            <div class="mb-3 col-12">
              <div className="row">
                <div className="col-4">
                  <label for="firstName" class="form-label">
                    First name
                  </label>
                  <input name="firstName" value={formUser.firstName} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="firstName" />
                </div>
                <div className="col-4">
                  <label for="lastName" class="form-label">
                    Last name
                  </label>
                  <input name="lastName" value={formUser.lastName} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="lastName" />
                </div>
                <div className="col-4">
                  <label for="maidenName" class="form-label">
                    Maiden name
                  </label>
                  <input name="maidenName" value={formUser.maidenName} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="maidenName" />
                </div>
              </div>
            </div>

            <div class="mb-3 col-12">
              <div className="row">
                <div className="col-4">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <input name="username" value={formUser.username} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="username" />
                </div>
                <div className="col-4">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input name="email" value={formUser.email} onChange={formAddEditOnChangeHandler} type="email" class="form-control" id="email" />
                </div>
                <div className="col-4">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input name="password" value={formUser.password} onChange={formAddEditOnChangeHandler} type="password" class="form-control" id="password" />
                </div>
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="birthDate" class="form-label">
                  Birth date
                </label>
                <input name="birthDate" value={formUser.birthDate} onChange={formAddEditOnChangeHandler} type="date" class="form-control" id="birthDate" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="gender" class="form-label">
                  Gender
                </label>
                <select class="form-select" name="gender" value={formUser.gender} onChange={formAddEditOnChangeHandler} id="gender" aria-label="Example select with button addon">
                  <option>Choose...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="address" class="form-label">
                  Address
                </label>
                <input name="address" value={formUser?.address} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="address" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="postalCode" class="form-label">
                  Postal code
                </label>
                <input name="addressPostalCode" value={formUser?.addressPostalCode} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="postalCode" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="city" class="form-label">
                  City
                </label>
                <input name="addressCity" value={formUser?.addressCity} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="city" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="university" class="form-label">
                  University
                </label>
                <input name="university" value={formUser.university} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="state" />
              </div>
            </div>

            <div class="mb-3 col-12">
              <div className="row">
                <div className="col-4">
                  <label for="EIN" class="form-label">
                    EIN
                  </label>
                  <input name="ein" value={formUser.ein} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="EIN" />
                </div>
                <div className="col-4">
                  <label for="SSN" class="form-label">
                    SSN
                  </label>
                  <input name="ssn" value={formUser.ssn} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="SSN" />
                </div>
              </div>
            </div>
          </div>
        )}

        {isToggled === "userCompany" && (
          <div id="personalData" className="fw-medium">
            <div className="row">
              <div class="mb-3 col-8">
                <label for="companyName" class="form-label">
                  Company name
                </label>
                <input name="companyName" value={formUser?.companyName} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="companyName" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="jobTitle" class="form-label">
                  Job Title
                </label>
                <input name="companyTitle" value={formUser?.companyTitle} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="jobTitle" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="department" class="form-label">
                  Department
                </label>
                <input name="companyDepartment" value={formUser?.companyDepartment} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="department" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="address" class="form-label">
                  Address
                </label>
                <input name="companyAddress" value={formUser?.companyAddress} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="address" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="postalCode" class="form-label">
                  Postal Code
                </label>
                <input name="companyAddressPostalCode" value={formUser?.companyAddressPostalCode} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="postalCode" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="city" class="form-label">
                  City
                </label>
                <input name="companyAddressCity" value={formUser?.companyAddressCity} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="city" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="state" class="form-label">
                  State
                </label>
                <input name="companyAddressState" value={formUser?.companyAddressState} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="state" />
              </div>
            </div>
          </div>
        )}

        {isToggled === "userBankData" && (
          <div id="userBankData" className="fw-medium">
            <div className="row">
              <div class="mb-3 col-8">
                <label for="cardNumber" class="form-label">
                  Card number
                </label>
                <input name="cardNumber" value={formUser?.cardNumber} onChange={formAddEditOnChangeHandler} type="number" class="form-control" id="cardNumber" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="IBAN" class="form-label">
                  IBAN
                </label>
                <input name="iban" value={formUser?.iban} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="IBAN" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="cardType" class="form-label">
                  Card Type
                </label>
                <input name="cardType" value={formUser?.cardType} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="cardType" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="currency" class="form-label">
                  Currency
                </label>
                <input name="currency" value={formUser?.currency} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="currency" />
              </div>
            </div>

            <div className="row">
              <div class="mb-3 col-8">
                <label for="cardExpire" class="form-label">
                  Card expire
                </label>
                <input name="cardExpire" value={formUser?.cardExpire} onChange={formAddEditOnChangeHandler} type="text" class="form-control" id="postalCode" />
              </div>
            </div>
          </div>
        )}

        <button type="submit" class="btn btn-primary" disabled={!handleValidation}>
          Submit
        </button>
      </form>
    </>
  );
};

export default FormAddEdit;
