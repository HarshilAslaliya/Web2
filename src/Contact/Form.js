import React from "react";
const Form = () => {
    return (
        <>
            <div class="form-blog">
                <div class="container">
                    <div class="inner-block">
                        <div class="formblog-inner">
                            <div class="form-cards">
                                <div class="form-main">
                                    <h3>
                                        Contatc Us
                                    </h3>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Entet Your Name" />
                                        <label for="floatingInput">Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Entet Your Number" />
                                        <label for="floatingInput">Number</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Entet Your Subject" />
                                        <label for="floatingInput">Subject</label>
                                    </div>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Your Message</label>
                                    </div>

                                    <div class="btn">
                                        <input type="submit" value="SUBMIT"></input>
                                    </div>



                                    {/* <form action="">
                                <table cellpadding="7">
                                    <tr>
                                        <td>
                                            <label for="name">NAME :</label>

                                        </td>


                                        <td>
                                            <input type="text" name="name" placeholder="Enter Your Name..........." />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="email">Email:</label>

                                        </td>
                                        <td>
                                            <input type="email" name="name" placeholder="Enter Your Email..........." />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="name">Telephone :</label>

                                        </td>


                                        <td>
                                            <input type="text" name="telephone"
                                                placeholder="Enter Your Number..........." />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="subject">Subject :</label>

                                        </td>


                                        <td>
                                            <input type="text" name="subject"
                                                placeholder="Enter Your subject..........." />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="message">Your Message :</label>

                                        </td>


                                        <td>
                                            <textarea placeholder="Enter Your Message..."></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="submit" value="Submit" />
                                        </td>
                                    </tr>
                                </table>
                            </form> */}
                                </div>
                            </div>

                            <div class="form-cards">
                                <div class="form-main">
                                    <h3>

                                        Contact Info
                                    </h3>
                                    <h4>
                                        India : Head Office
                                    </h4>
                                    <div class="main-text">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span>F-144, ABC Mall, 2, Sudama Chowk, Mota Varachha, Surat, Gujarat 394101</span>

                                        <p> <i class="fa-solid fa-envelope"></i> <a href="http://innovatix.tech/">www.innovatix.tech</a></p>

                                        <p><i class="fa-solid fa-phone"></i><a href="tel:9328949821">+91 9328949821</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Form;