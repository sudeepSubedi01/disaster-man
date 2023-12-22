import React, { useState } from 'react'
import './Volunteer.css'
import Navbar from '../navbar/Navbar'
import Terms from '../terms/Terms'

const Volunteer = () => {
    const [selectedProvince, setSelectedProvince] = useState(' ');
    const [selectedDistrict, setSelectedDistrict] = useState(' ');
    const [toggleChecked1, setToggleChecked1] = useState(false);
    const [toggleChecked2, setToggleChecked2] = useState(false);

    const provinceData = ['Province 1', 'Madhesh Pradesh', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpaschim'];
    const districtData = ['Achham', 'Arghakhanchi', 'Baglung', 'Baitadi', 'Bajhang', 'Bajura', 'Banke', 'Bara', 'Bardiya', 'Bhaktapur', 'Bhojpur', 'Chitwan', 'Dadeldhura', 'Dailekh', 'Dang', 'Darchula', 'Dhading', 'Dhankuta', 'Dhanusa', 'Dholkha', 'Dolpa', 'Doti', 'Gorkha', 'Gulmi', 'Humla', 'Ilam', 'Jajarkot', 'Jhapa', 'Jumla', 'Kailali', 'Kalikot', 'Kanchanpur', 'Kapilvastu', 'Kaski', 'Kathmandu', 'Kavrepalanchok', 'Khotang', 'Lalitpur', 'Lamjung', 'Mahottari', 'Makwanpur', 'Manang', 'Morang', 'Mugu', 'Mustang', 'Myagdi', 'Nawalparasi', 'Nuwakot', 'Okhaldhunga', 'Palpa', 'Panchthar', 'Parbat', 'Parsa', 'Pyuthan', 'Ramechhap', 'Rasuwa', 'Rautahat', 'Rolpa', 'Rukum', 'Rupandehi', 'Salyan', 'Sankhuwasabha', 'Saptari', 'Sarlahi', 'Sindhuli', 'Sindhupalchok', 'Siraha', 'Solukhumbu', 'Sunsari', 'Surkhet', 'Syangja', 'Tanahu', 'Taplejung', 'Terhathum', 'Udayapur', 'Kanchanpur', 'Kaski'];

    const handleProvinceChange = (e) => {
        setSelectedProvince(e.target.value);
    }
    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    }
    const handleToggleChange1 = () => {
        setToggleChecked1(!toggleChecked1);
    };
    const handleToggleChange2 = () => {
        setToggleChecked2(!toggleChecked2);
    };

    const handleSubmit = () => {
        //Database connection
        console.log('Form submitted');
    };

    return (
        <>
            <Navbar />
            <div className="cardContainer">
                <div className="cardHead">
                    <div className="cardTitle"><i class="fa-solid fa-user-plus"></i>  Sign up as <span>Volunteers</span></div>
                    <div className="underLine"></div>
                </div>
                <div className="cardBody">
                    <div className="cardPersonal">
                        <div className="cardPersonalTitle"><i class="fa-solid fa-user"></i>   Personal Information</div>
                        <div className="inputs">
                            <div className="input">
                                <input type="text" placeholder='Email' />
                            </div>
                            <div className="input">
                                <input type="password" placeholder='Password' />
                            </div>
                            <div className="input">
                                <input type="password" placeholder='Confirm Password' />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='First Name' />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='About Yourself' />
                            </div>
                            <div className="input">
                                <input type="text" placeholder='National Identity Number' />
                            </div>
                            <div className="input">
                                <input type="number" placeholder='Mobile Number' />
                            </div>
                        </div>
                    </div>

                    <div className="cardAddress">
                        <div className="cardAddressTitle"><i class="fa-solid fa-map-location"></i>   Address Information</div>
                        <div className="dropdowns">
                            <div className="provinceDropdown">
                                <select name="province" id="province" value={selectedProvince} onChange={handleProvinceChange}>
                                    {/* <option value="">Select a province:</option> */}
                                    {provinceData.map((province, index) => (
                                        <option key={index} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="districtDropdown">
                                <select name="district" id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                                    {/* <option value="">Select a province:</option> */}
                                    {districtData.map((district, index) => (
                                        <option key={index} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="terms">
                            <Terms/>
                        </div>
                        <div className="toggleSlider slider1">
                            <label className="toggleSwitch">
                                <input type="checkbox" id="toggle1" checked={toggleChecked1} onChange={handleToggleChange1} required />
                                <span className="slider"></span>
                            </label>
                            <span className="toggleText">I accept the terms and conditions</span>
                        </div>
                        <div className="toggleSlider">
                            <label className="toggleSwitch">
                                <input type="checkbox" id="toggle2" checked={toggleChecked2} onChange={handleToggleChange2} required />
                                <span className="slider"></span>
                            </label>
                            <span className="toggleText">I agree to recieve updates</span>
                        </div>
                        <button type="submit" className="submitButton" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Volunteer