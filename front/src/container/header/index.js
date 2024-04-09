import "./index.scss"
import Grid from "../../component/grid";
import Box from "../../component/info-dark-box";

export default function Container() {
    return (
        <Grid>
            <Box>
                <div className="upper-heading">
                <p className="text-light">Call: <a href="tel:+39 01 0000 0000" className="text-bold">+39-01-0000-0000</a></p>

                <div className="custom-select">
                <label className=" text-light">Your city:
                <select name="cities" id="cities" className="">
                    <option value="rome">Rome</option>
                    <option value="rome">Naples</option>
                    <option value="rome">Milan</option>
                    <option value="rome">Venice</option>
                    <option value="rome">Florence</option>
                </select>
                </label>
                </div>

                <div className="custom-select">
                <label className=" text-light">
                <select name="language" id="language">
                    <option value="en">EN</option>
                    <option value="it">IT</option>
                </select>
                </label>
                </div>
            
                <a href="#" className="link-decor text-light"><img src="/svg/account.svg" alt="account"/>Account</a>
                </div>
            </Box>
        </Grid>
    )
}