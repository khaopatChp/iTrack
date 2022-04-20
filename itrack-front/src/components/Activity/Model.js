import React, { useState } from "react";
import './Model.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Model = ({ showModel, setShowModel, res, FetchData }) => {
    const [inputName, setInputName] = useState(res.activityName);
    const [inputDescription, setInputDescription] = useState(res.description);
    const [inputType, setInputType] = useState(res.typeOfActivity);
    const [inputDate, setInputDate] = useState(res.date.slice(0, 10));
    const [inputDuration, setInputDuration] = useState(res.duration);
    const [inputImg, setInputImg] = useState(res.img);

    const [nameErr, setNameErr] = useState({});
    const [descriptionErr, setDescriptionErr] = useState({});
    const [typeErr, setTypeErr] = useState({});
    const [dateErr, setDateErr] = useState({});
    const [durationErr, setDurationErr] = useState({});


    function handleSubmit(e) {
        e.preventDefault();
        const isValid = formValidation();
        console.log(inputName)
        let records = {
            activityName: inputName,
            typeOfActivity: inputType,
            date: inputDate,
            description: inputDescription,
            duration: inputDuration,
            img: inputImg,
        }
        if (isValid) {
        axios
            .put(`https://i-track-back.vercel.app/users/me/records/${res._id}`, records)
            .then((res) => {
                console.log("data: ", res.data);
                FetchData()
            })
        }
    }

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        console.log(base64);
        setInputImg(base64)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const formValidation = () => {
        const nameErr = {};
        const descriptionErr = {};
        const typeErr = {};
        const dateErr = {};
        const durationErr = {};

        let isValid = true;

        if (inputName.trim().length <= 0) {
            nameErr.nameRe = "Name is required!";
            isValid = false;
        }

        if (inputName.trim().length > 20) {
            nameErr.nameLong = "Name is too long";
            isValid = false;
        }

        if (inputType === '' && inputType === 'Sport types') {
            typeErr.typeSe = "Pleas, select a sport";
            isValid = false;
        }

        if (inputDescription.trim().length > 180) {
            descriptionErr.descriptionLong = "Description is too long";
            isValid = false;
        }

        if (inputDescription.trim().length <= 0) {
            descriptionErr.descriptionShort = "Description is required!";
            isValid = false;
        }

        if (inputDate === '') {
            dateErr.dateReq = "Pleas, enter date";
            isValid = false;
        }

        // if (inputDuration.trim().length <= 0) {
        //     durationErr.durationShort = "Pleas, input time that you spent";
        //     isValid = false;
        // }

        setNameErr(nameErr);
        setDescriptionErr(descriptionErr);
        setTypeErr(typeErr);
        setDateErr(dateErr);
        setDurationErr(durationErr);

        return isValid;
    }


    return (
        <>
            {showModel ?
                <div className="model">
                    <div className="Add_Activity">

                        <div className="full">
                            <div className='center Add_Activity_right'>
                                <div>
                                    <i className="fa-solid fa-xmark close" onClick={() => setShowModel(prev => !prev)}></i>
                                </div>
                                <div className="title">
                                    <h1>Let's create your activity!</h1>

                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="inputbox">
                                        <input
                                            value={inputName}
                                            className='input InputName'
                                            id="name"
                                            type="text"
                                            onChange={e => setInputName(e.target.value)}
                                            required="required"
                                        />
                                        <span>Name</span>
                                    </div>
                                    <div className='errors'>
                                        {Object.keys(nameErr).map((key) => {
                                            return <div style={{ color: "red" }}>{nameErr[key]}</div>
                                        })}
                                    </div>
                                    <div className="inputbox" value="inputType" onChange={e => setInputType(e.target.value)}>
                                        <select id="type" name="type" required="required">
                                            <option value="type">Sport types</option>
                                            <option value="water">water sport</option>
                                            <option value="running">running</option>
                                            <option value="yoga">yoga</option>
                                            <option value="accessories">use accessories</option>
                                            <option value="fitness">fitness</option>
                                        </select>
                                    </div>
                                    <div className='errors'>
                                        {Object.keys(typeErr).map((key) => {
                                            return <div style={{ color: "red" }}>{typeErr[key]}</div>
                                        })}
                                    </div>
                                    <div className='inputbox'>
                                        <input
                                            value={inputDescription}
                                            type="text"
                                            id="des"
                                            name="des"
                                            required="required"
                                            onChange={e => setInputDescription(e.target.value)}
                                        />
                                        <span>Description</span>
                                    </div>
                                    <div className='errors'>
                                        {Object.keys(descriptionErr).map((key) => {
                                            return <div style={{ color: "red" }}>{descriptionErr[key]}</div>
                                        })}
                                    </div>
                                    <div className="inputbox">
                                        <input
                                            value={inputDate}
                                            type="date"
                                            id="start"
                                            min="2018-01-01"
                                            max="2030-12-31"
                                            required="required"
                                            onChange={e => setInputDate(e.target.value)}
                                        />
                                    </div>
                                    <div className='errors'>
                                        {Object.keys(dateErr).map((key) => {
                                            return <div style={{ color: "red" }}>{dateErr[key]}</div>
                                        })}
                                    </div>
                                    <div className="inputbox">
                                        <input
                                            value={inputDuration}
                                            id="duration"
                                            type="number"
                                            name="duration"
                                            required="required"
                                            onChange={e => setInputDuration(e.target.value)}
                                        />
                                        <span>Time Spent [minutes]</span>
                                    </div>
                                    <div className='errors'>
                                        {Object.keys(durationErr).map((key) => {
                                            return <div style={{ color: "red" }}>{durationErr[key]}</div>
                                        })}
                                    </div>
                                    <div className="inputbox">
                                        <input
                                            value={inputImg}
                                            type="file"
                                            onChange={(e) => {
                                                uploadImage(e);
                                            }}
                                        />
                                    </div>
                                    <button className="SubmitButton" onClick={handleSubmit}>SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </>
    )
}

export default Model;